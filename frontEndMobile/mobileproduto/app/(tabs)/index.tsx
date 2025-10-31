

import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import { ActivityIndicator, FAB, Searchbar } from 'react-native-paper';
import ProductCard from '../../components/ui/product-card';
import { Colors } from '../../constants/Colors'; // Importação CORRETA
import { useProducts } from '../../hooks/use-products';
import { productService } from '../../services/api';

export default function HomeScreen() {
  const router = useRouter();
  const { products, loading, refreshing, searchQuery, setSearchQuery, loadProducts, onRefresh } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter(product =>
        product.nomeDoProduto.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.codigoDoProduto.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  const handleDeleteProduct = (product: any) => {
    Alert.alert(
      'Confirmar Exclusão',
      `Deseja realmente excluir o produto "${product.nomeDoProduto}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => deleteProduct(product._id),
        },
      ]
    );
  };

  const deleteProduct = async (id: string) => {
    try {
      await productService.deleteProduct(id);
      loadProducts();
      Alert.alert('Sucesso', 'Produto excluído com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível excluir o produto');
    }
  };

  if (loading && products.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar produtos..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />

      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => router.push(`/product-details/${item._id}`)}
            onEdit={() => router.push(`/edit-product/${item._id}`)}
            onDelete={() => handleDeleteProduct(item)}
          />
        )}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
        }
      />

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => router.push('/create-product')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchbar: {
    margin: 10,
  },
  list: {
    padding: 10,
  },
  empty: {
    padding: 20,
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.primary,
  },
});