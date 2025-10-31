// import { useRouter } from 'expo-router';
// import React, { useState } from 'react';
// import {
//     Alert,
//     KeyboardAvoidingView,
//     Platform,
//     ScrollView,
//     StyleSheet,
//     View,
// } from 'react-native';
// import {
//     Button,
//     Card,
//     TextInput,
//     Title
// } from 'react-native-paper';
// import Colors from '../constants/Colors';
// import { productService } from '../services/api';

// export default function CreateProductScreen() {
//     const router = useRouter();
//     const [loading, setLoading] = useState(false);
//     const [formData, setFormData] = useState({
//         nomeDoProduto: '',
//         descricaoDoProduto: '',
//         codigoDoProduto: '',
//         precoDoProduto: '',
//     });

//     const handleInputChange = (field: string, value: string) => {
//         setFormData(prev => ({
//             ...prev,
//             [field]: value,
//         }));
//     };

//     const handleSubmit = async () => {
//         if (!formData.nomeDoProduto.trim()) {
//             Alert.alert('Erro', 'Nome do produto é obrigatório');
//             return;
//         }
//         if (!formData.codigoDoProduto.trim()) {
//             Alert.alert('Erro', 'Código do produto é obrigatório');
//             return;
//         }
//         if (!formData.precoDoProduto || parseFloat(formData.precoDoProduto) <= 0) {
//             Alert.alert('Erro', 'Preço deve ser maior que zero');
//             return;
//         }

//         setLoading(true);
//         try {
//             const productData = {
//                 ...formData,
//                 precoDoProduto: parseFloat(formData.precoDoProduto),
//             };

//             await productService.createProduct(productData);
//             Alert.alert('Sucesso', 'Produto criado com sucesso!', [
//                 { text: 'OK', onPress: () => router.back() }
//             ]);
//         } catch (error) {
//             Alert.alert('Erro', 'Não foi possível criar o produto');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <KeyboardAvoidingView
//             style={styles.container}
//             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         >
//             <ScrollView contentContainerStyle={styles.scrollContent}>
//                 <Card style={styles.card}>
//                     <Card.Content>
//                         <Title style={styles.title}>Novo Produto</Title>

//                         <TextInput
//                             label="Nome do Produto *"
//                             value={formData.nomeDoProduto}
//                             onChangeText={(text) => handleInputChange('nomeDoProduto', text)}
//                             style={styles.input}
//                             mode="outlined"
//                         />

//                         <TextInput
//                             label="Descrição do Produto *"
//                             value={formData.descricaoDoProduto}
//                             onChangeText={(text) => handleInputChange('descricaoDoProduto', text)}
//                             style={styles.input}
//                             mode="outlined"
//                             multiline
//                             numberOfLines={3}
//                         />

//                         <TextInput
//                             label="Código do Produto *"
//                             value={formData.codigoDoProduto}
//                             onChangeText={(text) => handleInputChange('codigoDoProduto', text.toUpperCase())}
//                             style={styles.input}
//                             mode="outlined"
//                             autoCapitalize="characters"
//                         />

//                         <TextInput
//                             label="Preço do Produto *"
//                             value={formData.precoDoProduto}
//                             onChangeText={(text) => handleInputChange('precoDoProduto', text.replace(',', '.'))}
//                             style={styles.input}
//                             mode="outlined"
//                             keyboardType="decimal-pad"
//                         />

//                         <View style={styles.buttonContainer}>
//                             <Button
//                                 mode="outlined"
//                                 onPress={() => router.back()}
//                                 style={styles.button}
//                                 disabled={loading}
//                             >
//                                 Cancelar
//                             </Button>
//                             <Button
//                                 mode="contained"
//                                 onPress={handleSubmit}
//                                 style={styles.button}
//                                 loading={loading}
//                                 disabled={loading}
//                             >
//                                 Criar Produto
//                             </Button>
//                         </View>
//                     </Card.Content>
//                 </Card>
//             </ScrollView>
//         </KeyboardAvoidingView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: Colors.background,
//     },
//     scrollContent: {
//         padding: 10,
//     },
//     card: {
//         elevation: 2,
//     },
//     title: {
//         marginBottom: 20,
//         color: Colors.text,
//     },
//     input: {
//         marginBottom: 15,
//     },
//     buttonContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: 20,
//     },
//     button: {
//         flex: 1,
//         marginHorizontal: 5,
//     },
// });





import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform, // CORRIGIDO: StyleSheet em vez de Stylesheet
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import {
    Button,
    Card,
    TextInput,
    Title
} from 'react-native-paper';
import { Colors } from '../constants/Colors';
import { productService } from '../services/api';

export default function CreateProductScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nomeDoProduto: '',
    descricaoDoProduto: '',
    codigoDoProduto: '',
    precoDoProduto: '',
  });

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
    if (!formData.codigoDoProduto.trim()) {
      Alert.alert('Erro', 'Código do produto é obrigatório');
      return;
    }
    if (!formData.precoDoProduto || parseFloat(formData.precoDoProduto) <= 0) {
      Alert.alert('Erro', 'Preço deve ser maior que zero');
      return;
    }

    setLoading(true);
    try {
      const productData = {
        ...formData,
        precoDoProduto: parseFloat(formData.precoDoProduto),
      };
      
      await productService.createProduct(productData);
      Alert.alert('Sucesso', 'Produto criado com sucesso!', [
        { text: 'OK', onPress: () => router.back() }
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível criar o produto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>Novo Produto</Title>

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
                Criar Produto
              </Button>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// CORRIGIDO: StyleSheet em vez de Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: 10,
  },
  card: {
    elevation: 2,
  },
  title: {
    marginBottom: 20,
    color: Colors.text,
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