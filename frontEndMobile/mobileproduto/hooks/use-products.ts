import { useEffect, useState } from 'react';
import { productService } from '../services/api';

export function useProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const loadProducts = async () => {
    try {
      const data = await productService.getAllProducts();
      setProducts(data.produtos || data);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return {
    products,
    loading,
    refreshing,
    searchQuery,
    setSearchQuery,
    loadProducts,
    onRefresh,
  };
}