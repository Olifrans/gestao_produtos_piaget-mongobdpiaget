import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Cores locais para evitar problemas de importação
const LOCAL_COLORS = {
  primary: '#3498db',
  background: '#f5f5f5',
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: LOCAL_COLORS.primary,
        tabBarStyle: {
          backgroundColor: LOCAL_COLORS.background,
        },
        headerStyle: {
          backgroundColor: LOCAL_COLORS.primary,
        },
        headerTintColor: '#fff',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Produtos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}