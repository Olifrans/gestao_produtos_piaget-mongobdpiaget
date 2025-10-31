

import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import {
    Button,
    Card,
    Divider,
    Paragraph,
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

export default function ProductDetailScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProduct();
    }, [id]);

    const loadProduct = async () => {
        try {
            const productData = await productService.getProductById(id as string);
            setProduct(productData);
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível carregar os detalhes do produto');
            router.back();
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = () => {
        Alert.alert(
            'Confirmar Exclusão',
            `Deseja realmente excluir o produto "${product.nomeDoProduto}"?`,
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: deleteProduct,
                },
            ]
        );
    };

    const deleteProduct = async () => {
        try {
            await productService.deleteProduct(id as string);
            Alert.alert('Sucesso', 'Produto excluído com sucesso!', [
                { text: 'OK', onPress: () => router.push('/(tabs)') }
            ]);
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível excluir o produto');
        }
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color={LOCAL_COLORS.primary} />
            </View>
        );
    }

    if (!product) {
        return (
            <View style={styles.center}>
                <Paragraph>Produto não encontrado</Paragraph>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.title}>{product.nomeDoProduto}</Title>
                    <Paragraph style={styles.code}>Código: {product.codigoDoProduto}</Paragraph>

                    <Divider style={styles.divider} />

                    <Paragraph style={styles.label}>Descrição:</Paragraph>
                    <Paragraph style={styles.value}>{product.descricaoDoProduto}</Paragraph>

                    <Divider style={styles.divider} />

                    <Paragraph style={styles.label}>Preço:</Paragraph>
                    <Paragraph style={styles.price}>R$ {product.precoDoProduto?.toFixed(2)}</Paragraph>

                    <Divider style={styles.divider} />

                    <View style={styles.buttonContainer}>
                        <Button
                            mode="contained"
                            onPress={() => router.push(`/edit-product/${product._id}`)}
                            style={styles.button}
                        >
                            Editar Produto
                        </Button>
                        <Button
                            mode="outlined"
                            buttonColor={LOCAL_COLORS.error}
                            textColor="#fff"
                            onPress={handleDelete}
                            style={styles.button}
                        >
                            Excluir Produto
                        </Button>
                    </View>
                </Card.Content>
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: LOCAL_COLORS.background,
        padding: 10,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        elevation: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        color: LOCAL_COLORS.text,
    },
    code: {
        fontSize: 16,
        color: LOCAL_COLORS.textSecondary,
        marginBottom: 15,
    },
    divider: {
        marginVertical: 15,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
        color: LOCAL_COLORS.text,
    },
    value: {
        fontSize: 16,
        lineHeight: 22,
        color: LOCAL_COLORS.text,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: LOCAL_COLORS.success,
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        marginBottom: 10,
    },
});