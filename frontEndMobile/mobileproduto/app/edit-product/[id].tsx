import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import {
    ActivityIndicator,
    Button,
    Card,
    TextInput,
    Title,
} from 'react-native-paper';
import { productService } from '../../services/api';

// Cores locais para evitar problemas de importação
const LOCAL_COLORS = {
  primary: '#3498db',
  background: '#f5f5f5',
  text: '#2c3e50',
  textSecondary: '#666',
  success: '#27ae60',
  error: '#e74c3c',
};

export default function EditProductScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<any>(null);
  const [formData, setFormData] = useState({
    nomeDoProduto: '',
    descricaoDoProduto: '',
    codigoDoProduto: '',
    precoDoProduto: '',
  });

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      const productData = await productService.getProductById(id as string);
      setProduct(productData);
      setFormData({
        nomeDoProduto: productData.nomeDoProduto || '',
        descricaoDoProduto: productData.descricaoDoProduto || '',
        codigoDoProduto: productData.codigoDoProduto || '',
        precoDoProduto: productData.precoDoProduto?.toString() || '',
      });
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar o produto');
      router.back();
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.nomeDoProduto.trim()) {
      Alert.alert('Erro', 'Nome do produto é obrigatório');
      return;
    }

    setLoading(true);
    try {
      const updateData = {
        ...formData,
        precoDoProduto: parseFloat(formData.precoDoProduto),
      };
      
      await productService.updateProduct(id as string, updateData);
      Alert.alert('Sucesso', 'Produto atualizado com sucesso!', [
        { text: 'OK', onPress: () => router.back() }
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar o produto');
    } finally {
      setLoading(false);
    }
  };

  if (!product) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={LOCAL_COLORS.primary} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>Editar Produto</Title>

            <TextInput
              label="Nome do Produto *"
              value={formData.nomeDoProduto}
              onChangeText={(text) => handleInputChange('nomeDoProduto', text)}
              style={styles.input}
              mode="outlined"
            />

            <TextInput
              label="Descrição do Produto *"
              value={formData.descricaoDoProduto}
              onChangeText={(text) => handleInputChange('descricaoDoProduto', text)}
              style={styles.input}
              mode="outlined"
              multiline
              numberOfLines={3}
            />

            <TextInput
              label="Código do Produto *"
              value={formData.codigoDoProduto}
              onChangeText={(text) => handleInputChange('codigoDoProduto', text.toUpperCase())}
              style={styles.input}
              mode="outlined"
              autoCapitalize="characters"
            />

            <TextInput
              label="Preço do Produto *"
              value={formData.precoDoProduto}
              onChangeText={(text) => handleInputChange('precoDoProduto', text.replace(',', '.'))}
              style={styles.input}
              mode="outlined"
              keyboardType="decimal-pad"
            />

            <View style={styles.buttonContainer}>
              <Button
                mode="outlined"
                onPress={() => router.back()}
                style={styles.button}
                disabled={loading}
              >
                Cancelar
              </Button>
              <Button
                mode="contained"
                onPress={handleSubmit}
                style={styles.button}
                loading={loading}
                disabled={loading}
              >
                {loading ? 'Salvando...' : 'Atualizar'}
              </Button>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LOCAL_COLORS.background,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    padding: 10,
  },
  card: {
    elevation: 2,
  },
  title: {
    marginBottom: 20,
    color: LOCAL_COLORS.text,
  },
  input: {
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});