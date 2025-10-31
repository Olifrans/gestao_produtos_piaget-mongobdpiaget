import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

// Cores locais para evitar problemas de importação
const LOCAL_COLORS = {
  background: '#f5f5f5',
  text: '#2c3e50',
  textSecondary: '#666',
};

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorar Produtos</Text>
      <Text style={styles.subtitle}>
        Funcionalidades em desenvolvimento...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LOCAL_COLORS.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: LOCAL_COLORS.text,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: LOCAL_COLORS.textSecondary,
  },
});