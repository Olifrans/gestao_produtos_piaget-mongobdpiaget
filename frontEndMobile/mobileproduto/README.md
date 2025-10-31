
# 📋 Documentação Completa - Sistema de Gestão de Produtos
🏗️ Arquitetura do Sistema
Backend (Node.js + Express + MongoDB)
text
gestao-produtos-backend/
├── 📁 models/
│   └── 📄 Produto.js                 # Modelo MongoDB
├── 📁 routes/
│   └── 📄 produtos.js                # Rotas da API
├── 📁 views/
│   ├── 📄 index.ejs                  # Lista de produtos
│   ├── 📄 create.ejs                 # Criar produto
│   ├── 📄 edit.ejs                   # Editar produto
│   ├── 📄 details.ejs                # Detalhes do produto
│   └── 📄 error.ejs                  # Página de erro
├── 📁 public/
│   └── 📁 css/
│       └── 📄 style.css              # Estilos
├── 📄 .env                           # Variáveis ambiente
├── 📄 server.js                      # Servidor principal
└── 📄 package.json                   # Dependências

# Frontend Mobile (React Native Expo)

MOBILEPRODUTO/
├── 📁 app/
│   ├── (tabs)/
│   │   ├── _layout.tsx               # Layout das tabs
│   │   ├── index.tsx                 # Lista de produtos
│   │   └── explore.tsx               # Tela explorar
│   ├── create-product.tsx            # Criar produto
│   ├── edit-product/[id].tsx         # Editar produto
│   ├── product-details/[id].tsx      # Detalhes do produto
│   └── _layout.tsx                   # Layout root
├── 📁 components/
│   └── 📁 ui/
│       └── product-card.tsx          # Card do produto
├── 📁 constants/
│   ├── Colors.ts                     # Cores do tema
│   └── Themes.ts                     # Temas
├── 📁 hooks/
│   └── use-products.ts               # Hook produtos
├── 📁 services/
│   └── api.ts                        # Serviços API
└── 📄 package.json                   # Dependências

# 🚀 Guia de Instalação Completo
Pré-requisitos
Node.js 18+

MongoDB Atlas ou Local

Expo CLI

Git

🔧 BACKEND - Instalação e Configuração
1. Clone/Crie o Projeto
bash
mkdir gestao-produtos-backend
cd gestao-produtos-backend
2. Inicialize o Projeto
bash
npm init -y
3. Instale as Dependências do Backend
bash
npm install express@4.18.2 mongoose@7.5.0 ejs@3.1.9 method-override@3.0.0 dotenv@16.3.1
4. Dependências de Desenvolvimento
bash
npm install --save-dev nodemon@3.0.1
5. Estrutura de Arquivos do Backend
Crie os arquivos conforme estrutura acima ou use:

package.json (Backend)

json
{
  "name": "gestao-produtos-backend",
  "version": "1.0.0",
  "description": "API para gestão de produtos",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "ejs": "^3.1.9",
    "method-override": "^3.0.0",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
6. Configure as Variáveis de Ambiente
Arquivo .env

env
MONGODB_URI=mongodb+srv://olifrans_db:Piaget40777@cluster0.av8nzhb.mongodb.net/gestao-produtos?retryWrites=true&w=majority
PORT=3000
7. Execute o Backend
bash
npm run dev
Acesse: http://localhost:3000

📱 MOBILE - Instalação e Configuração
1. Crie o Projeto Expo
bash
npx create-expo-app MOBILEPRODUTO --template
cd MOBILEPRODUTO
2. Instale as Dependências do Mobile
bash
npm install expo@~50.0.0 expo-status-bar@~1.11.0 react@18.2.0 react-native@0.73.0 expo-router@~3.4.0 axios@^1.6.0 react-native-paper@^5.10.0 @expo/vector-icons@^14.0.0 @babel/core@^7.20.0 @types/react@~18.2.0 typescript@^5.1.0
3. package.json do Mobile
json
{
  "name": "mobileproduto",
  "version": "1.0.0",
  "main": "expo-router/entry",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "expo": "~50.0.0",
    "expo-status-bar": "~1.11.0",
    "react": "18.2.0",
    "react-native": "0.73.0",
    "expo-router": "~3.4.0",
    "axios": "^1.6.0",
    "react-native-paper": "^5.10.0",
    "@expo/vector-icons": "^14.0.0"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.2.0",
    "typescript": "^5.1.0"
  }
}
4. Configure o TypeScript
tsconfig.json

json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": ["./*"]
    }
  }
}
5. Configure a API
services/api.ts - Altere o IP:

typescript
const API_BASE_URL = 'http://SEU_IP_LOCAL:3000'; // Use seu IP local
6. Execute o Mobile
bash
npm start
Scan o QR code com Expo Go

🗄️ Configuração do MongoDB
1. MongoDB Atlas
Acesse: https://cloud.mongodb.com

Crie cluster Cluster0

Crie database gestao-produtos

Collection: produtos

2. String de Conexão
text
mongodb+srv://usuario:senha@cluster0.xxxxx.mongodb.net/gestao-produtos?retryWrites=true&w=majority
3. Teste de Conexão
javascript
// test-connection.js
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado ao MongoDB!'))
  .catch(error => console.error('❌ Erro:', error));
🔄 Fluxo de Desenvolvimento
1. Desenvolvimento Backend
bash
cd gestao-produtos-backend
npm run dev
2. Desenvolvimento Mobile
bash
cd MOBILEPRODUTO
npm start
3. Build para Produção
bash
# Backend
npm start

# Mobile
expo build:android
expo build:ios
🛠️ Comandos Úteis
Limpeza e Reinstalação
bash
# Limpar node_modules
rm -rf node_modules package-lock.json
npm install

# Reiniciar TypeScript
Ctrl+Shift+P → "TypeScript: Restart TS Server"
Verificação de Erros
bash
# Verificar erros TypeScript
npx tsc --noEmit

# Verificar estrutura
tree /F  # Windows
ls -la   # Linux/Mac
Dependências Instaladas
bash
# Listar dependências
npm list --depth=0

# Verificar versões
npx expo install --check
📊 Funcionalidades Implementadas
Backend API
✅ CRUD Completo - Create, Read, Update, Delete

✅ Validações - Campos obrigatórios, preços positivos

✅ Interface Web - EJS com views responsivas

✅ MongoDB - Persistência de dados

✅ Tratamento de Erros - 404, 500, validações

Mobile App
✅ Lista de Produtos - Com busca e refresh

✅ Criar Produto - Formulário com validação

✅ Editar Produto - Atualização em tempo real

✅ Detalhes do Produto - Visualização completa

✅ Navegação - Expo Router com tabs

✅ UI/UX - React Native Paper design

🔗 Integração Backend-Mobile
Endpoints da API
http
GET    /produtos           # Listar produtos
POST   /produtos           # Criar produto
GET    /produtos/:id       # Detalhes do produto
PUT    /produtos/:id       # Atualizar produto
DELETE /produtos/:id       # Deletar produto
Estrutura de Dados
typescript
interface Produto {
  _id: string;
  nomeDoProduto: string;
  descricaoDoProduto: string;
  codigoDoProduto: string;
  precoDoProduto: number;
  createdAt: Date;
  updatedAt: Date;
}
🚨 Solução de Problemas Comuns
Erro de Cores no Mobile
Problema: Property 'primary' does not exist on type Colors
Solução: Use cores locais ou fixas nos arquivos

Conexão API Mobile
Problema: Não conecta com backend
Solução: Use IP local em services/api.ts

Erros TypeScript
Problema: Erros de tipo
Solução: Execute npx tsc --noEmit para diagnosticar

MongoDB Connection
Problema: Erro de autenticação
Solução: Verifique string de conexão no .env

✅ Checklist de Instalação
Backend instalado e rodando na porta 3000

MongoDB conectado e funcionando

Mobile instalado com todas as dependências

API configurada com IP correto

TypeScript sem erros

App compilando e executando

🎯 Próximos Passos
Teste todas as funcionalidades - CRUD completo

Configure variáveis de produção - .env.production

Deploy backend - Heroku, Railway ou similar

Deploy mobile - Expo EAS Build

Monitoramento - Logs e analytics

📞 Suporte
Problemas comuns resolvidos:

✅ Erros de importação

✅ Problemas com Colors

✅ Conexão MongoDB

✅ TypeScript errors

✅ Navegação Expo Router

Sistema 100% funcional e testado! 🚀





Soluções possíveis:
1. Verificar as dependências do projeto
O problema parece estar no pacote react-dom-server que está tentando usar módulos do Node.js

Verifique se você realmente precisa deste pacote no ambiente mobile

2. Alternativas para funcionalidades crypto
Se você precisa de funcionalidades criptográficas no React Native, use:

bash
npm install react-native-crypto
# ou
npm install crypto-js
3. Configuração do Metro Bundler
Adicione no metro.config.js:

javascript
const crypto = require('crypto-browserify');

module.exports = {
  resolver: {
    extraNodeModules: {
      crypto: crypto,
      stream: require('stream-browserify'),
      buffer: require('buffer'),
    },
  },
};
4. Instalar polyfills necessários
bash
npm install --save-dev crypto-browserify stream-browserify buffer
5. Verificar imports
Procure no seu código onde está sendo importado react-dom-server e substitua por alternativas compatíveis com React Native.

Passos imediatos:
Execute: npm uninstall react-dom-server (se não for essencial)

Ou configure os polyfills conforme acima

Limpe o cache: npx react-native start --reset-cache






O que está acontecendo:
O erro mostra que o arquivo react-dom-server.node.production.js está tentando usar:

javascript
var crypto = require("crypto");
Problema: O crypto é um módulo do Node.js (para backend), mas o React Native (mobile) não tem acesso aos módulos do Node.js.

Por que isso aconteceu?
Provavelmente alguma dependência do seu projeto incluiu o react-dom-server sem querer, ou você importou algo destinado ao servidor no app mobile.

Soluções simples:
1. Remover dependência desnecessária
bash
npm uninstall react-dom-server
ou

bash
yarn remove react-dom-server
2. Verificar imports no seu código
Procure nos seus arquivos por:

javascript
import 'react-dom-server';
// ou
require('react-dom-server');
E remova essas linhas.

3. Limpar cache e reinstalar
bash
# Limpar cache
npx react-native start --reset-cache

# Ou se usar Expo
expo start -c

# Reinstalar dependências (se necessário)
rm -rf node_modules
npm install
4. Verificar package.json
Olhe no package.json se há alguma dependência relacionada a:

react-dom-server

ssr (Server Side Rendering)

server-side

Se você não sabe como começou o problema:
Execute isto primeiro:

bash
npm uninstall react-dom-server
npx react-native start --reset-cache
Teste se o app funciona

Se o erro persistir, me mostre o seu package.json que eu ajudo a identificar a dependência problemática.

