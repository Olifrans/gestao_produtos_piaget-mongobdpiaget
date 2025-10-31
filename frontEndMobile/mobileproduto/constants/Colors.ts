// const tintColorLight = '#2c3e50';
// const tintColorDark = '#fff';

// export default {
//     light: {
//         text: '#2c3e50',
//         textSecondary: '#666',
//         background: '#f5f5f5',
//         tint: tintColorLight,
//         tabIconDefault: '#ccc',
//         tabIconSelected: tintColorLight,
//         primary: '#3498db',
//         success: '#27ae60',
//         error: '#e74c3c',
//         warning: '#f39c12',
//     },
//     dark: {
//         text: '#fff',
//         textSecondary: '#ccc',
//         background: '#1a1a1a',
//         tint: tintColorDark,
//         tabIconDefault: '#ccc',
//         tabIconSelected: tintColorDark,
//         primary: '#3498db',
//         success: '#27ae60',
//         error: '#e74c3c',
//         warning: '#f39c12',
//     },
// };

// // Exportação correta para uso direto
// export const Colors = {
//     text: '#2c3e50',
//     textSecondary: '#666',
//     background: '#f5f5f5',
//     tint: tintColorLight,
//     primary: '#3498db',
//     success: '#27ae60',
//     error: '#e74c3c', // AGORA ESTÁ DEFINIDO
//     warning: '#f39c12',
// };









// constants/Colors.ts
const tintColorLight = '#2c3e50';
const tintColorDark = '#fff';

// Exportação padrão para temas
export default {
  light: {
    text: '#2c3e50',
    textSecondary: '#666',
    background: '#f5f5f5',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    primary: '#3498db',
    success: '#27ae60',
    error: '#e74c3c',
    warning: '#f39c12',
  },
  dark: {
    text: '#fff',
    textSecondary: '#ccc',
    background: '#1a1a1a',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    primary: '#3498db',
    success: '#27ae60',
    error: '#e74c3c',
    warning: '#f39c12',
  },
};

// Exportação direta para uso em componentes
export const Colors = {
  text: '#2c3e50',
  textSecondary: '#666',
  background: '#f5f5f5',
  tint: tintColorLight,
  primary: '#3498db', // AGORA ESTÁ DEFINIDO
  success: '#27ae60',
  error: '#e74c3c',
  warning: '#f39c12',
};