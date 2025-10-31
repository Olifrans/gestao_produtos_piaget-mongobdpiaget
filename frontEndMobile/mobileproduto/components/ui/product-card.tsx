import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';

interface ProductCardProps {
    product: {
        _id: string;
        nomeDoProduto: string;
        descricaoDoProduto: string;
        codigoDoProduto: string;
        precoDoProduto: number;
    };
    onPress: () => void;
    onEdit: () => void;
    onDelete: () => void;
}

export default function ProductCard({ product, onPress, onEdit, onDelete }: ProductCardProps) {
    return (
        <Card style={styles.card} onPress={onPress}>
            <Card.Content>
                <Title style={styles.title}>{product.nomeDoProduto}</Title>
                <Paragraph style={styles.code}>Código: {product.codigoDoProduto}</Paragraph>
                <Paragraph style={styles.price}>Preço: R$ {product.precoDoProduto?.toFixed(2)}</Paragraph>
                <Paragraph
                    style={styles.description}
                    numberOfLines={2}
                >
                    {product.descricaoDoProduto}
                </Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button
                    mode="outlined"
                    onPress={onEdit}
                    style={styles.button}
                >
                    Editar
                </Button>
                <Button
                    mode="contained"
                    buttonColor="#e74c3c" // Cor fixa como fallback
                    onPress={onDelete}
                    style={styles.button}
                >
                    Excluir
                </Button>
            </Card.Actions>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50', // Cor fixa
    },
    code: {
        fontSize: 14,
        color: '#666', // Cor fixa
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#27ae60', // Cor fixa
    },
    description: {
        fontSize: 14,
        color: '#666', // Cor fixa
        marginTop: 5,
    },
    button: {
        flex: 1,
        marginHorizontal: 2,
    },
});