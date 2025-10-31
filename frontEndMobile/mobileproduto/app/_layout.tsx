import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen 
          name="create-product" 
          options={{ 
            title: 'Novo Produto',
            presentation: 'modal'
          }} 
        />
        <Stack.Screen 
          name="edit-product/[id]" 
          options={{ 
            title: 'Editar Produto',
            presentation: 'modal'
          }} 
        />
        <Stack.Screen 
          name="product-details/[id]" 
          options={{ 
            title: 'Detalhes do Produto'
          }} 
        />
      </Stack>
    </PaperProvider>
  );
}