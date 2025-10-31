
# 📁 Estrutura do Projeto Completa:

## Aceso ao mongoDB
Username: olifrans_db
Password: Piaget40777




# 📋 Documentação do Projeto - Gestão de Produtos
## 🏗️ Estrutura Geral do Projeto
gestao_products_piaget-mongobdpiaget/
├── 📁 models/
│   └── 📄 Produto.js                 # Modelo do MongoDB
├── 📁 routes/
│   └── 📄 produtos.js                # Rotas da aplicação
├── 📁 views/
│   ├── 📄 index.ejs                  # Lista de produtos
│   ├── 📄 create.ejs                 # Formulário de criação
│   ├── 📄 edit.ejs                   # Formulário de edição
│   ├── 📄 details.ejs                # Detalhes do produto
│   └── 📄 error.ejs                  # Página de erro
├── 📁 public/
│   └── 📁 css/
│       └── 📄 style.css              # Estilos CSS
├── 📄 .env                           # Variáveis de ambiente
├── 📄 server.js                      # Arquivo principal
└── 📄 package.json                   # Dependências do projeto
🔧 Tecnologias Utilizadas







## Tecnologia	Versão	Finalidade
Node.js	v22.14.0	Runtime JavaScript
Express.js	^4.18.2	Framework web
MongoDB	^7.5.0	Banco de dados NoSQL
Mongoose	^7.5.0	ODM para MongoDB
EJS	^3.1.9	Template engine
Method-Override	^3.0.0	Suporte a PUT/DELETE

## Dotenv	^16.3.1	Gerenciamento de variáveis
📊 Modelo de Dados - Produto
{
  _id: ObjectId,                    // ID único gerado automaticamente
  nomeDoProduto: String,            // Nome do produto (obrigatório)
  descricaoDoProduto: String,       // Descrição do produto (obrigatório)
  codigoDoProduto: String,          // Código único (obrigatório, único)
  precoDoProduto: Number,           // Preço (obrigatório, >= 0)
  createdAt: Date,                  // Data de criação automática
  updatedAt: Date                   // Data de atualização automática
}

## 🛣️ Rotas da API
📋 Lista de Rotas
Método	Rota	Descrição	View
GET	/	Redireciona para lista de produtos	-
GET	/produtos	Lista todos os produtos	index.ejs
GET	/produtos/create	Formulário de criação	create.ejs
POST	/produtos	Cria novo produto	-
GET	/produtos/:id	Detalhes do produto	details.ejs
GET	/produtos/:id/edit	Formulário de edição	edit.ejs
PUT	/produtos/:id	Atualiza produto	-
DELETE	/produtos/:id	Remove produto	-

## 🔐 Configuração de Ambiente
Arquivo .env
MONGODB_URI=mongodb+srv://olifrans_db:Piaget40777@cluster0.av8nzhb.mongodb.net/gestao-produtos?retryWrites=true&w=majority
PORT=3000
Configuração do MongoDB Atlas
Cluster: Cluster0

Database: gestao-produtos

Collection: produtos

String de conexão: URI do MongoDB Atlas


## 🚀 Instalação e Execução
1. Instalação das Dependências
npm install express@4.18.2 mongoose@7.5.0 ejs@3.1.9 method-override@3.0.0 dotenv@16.3.1 --save
npm install --save-dev nodemon@3.0.1

## 2. Execução do Projeto

### Modo produção
npm start

##  Modo desenvolvimento (com auto-reload)
npm run dev

3. Acesso à Aplicação
http://localhost:3000

## 💾 Funcionalidades Implementadas
✅ CRUD Completo
Create: Adicionar novos produtos
Read: Listar e visualizar produtos
Update: Editar produtos existentes
Delete: Remover produtos

## 🎯 Validações
Campos obrigatórios
Código único por produto
Preço não negativo
Limites de caracteres
Formatação automática (uppercase para códigos)

## 🎨 Interface
Design responsivo

Navegação intuitiva
Mensagens de confirmação

Tratamento de erros

## 🔍 Fluxo da Aplicação
Página Inicial (/)
      ↓
Lista de Produtos (/produtos)
      ↓
[ Criar ] → Formulário → Salvar → Redireciona para lista
[ Editar ] → Formulário → Atualizar → Redireciona para lista  
[ Detalhes ] → Visualização → [ Editar | Deletar ]
[ Deletar ] → Confirmação → Remove → Redireciona para lista


## ⚠️ Tratamento de Erros
Cenários Tratados
Produto não encontrado (404)
Erro de conexão com MongoDB
Validação de dados
Erros internos do servidor (500)
Páginas de Erro
error.ejs - Página genérica de erro
Mensagens contextualizadas para o usuário

## 🎨 Estilo e Design
Características do CSS
Cores: Azul corporativo (#3498db, #2c3e50)
Layout: Container centralizado responsivo
Tipografia: Segoe UI para melhor legibilidade
Componentes: Botões, tabelas, formulários estilizados
Interações: Hover effects e transições suaves

## 📈 Próximas Melhorias Possíveis
### 🔍 Filtros e busca na lista de produtos

📱 Design mobile-first aprimorado
📊 Paginação para muitos produtos
🖼️ Upload de imagens dos produtos
🔐 Sistema de autenticação
📦 Categorias de produtos
📄 Relatórios e exportação
✅ Status do Projeto

## 🎉 COMPLETO E FUNCIONAL
Conexão com MongoDB Atlas
CRUD completo de produtos
Interface web responsiva
Validações de dados
Tratamento de erros
Deploy local funcionando

📝 Desenvolvido por: [Seu Nome]
🏢 Projeto: Sistema de Gestão de Produtos
🛠️ Stack: Node.js + Express + MongoDB + EJS
📅 Versão: 1.0.0

















## 🗄️ Como criar o banco de dados no MongoDB Atlas:
1. Acesse seu cluster:
No MongoDB Atlas, clique no seu cluster "Cluster0"

2. Clique em "Browse Collections":
Isso abrirá o Data Explorer

3. Crie o banco de dados:
No Data Explorer, clique em "Create Database"

Preencha os campos:

Database Name: gestao-produtos

Collection Name: produtos (será criada automaticamente)

4. Ou crie através de uma inserção:
Você também pode criar o banco de dados executando este comando no MongoDB Shell ou Compass:

javascript
use gestao-produtos
db.produtos.insertOne({ 
  nomeDoProduto: "Produto Teste",
  descricaoDoProduto: "Descrição teste",
  codigoDoProduto: "TEST001",
  precoDoProduto: 99.99
})




## 🔧 Alternativa: Atualize sua string de conexão
Se preferir, você pode usar o banco de dados padrão sem criar um específico. Nesse caso, atualize sua string de conexão no arquivo .env:

Opção 1 - Com banco específico (RECOMENDADO):
env
MONGODB_URI=mongodb+srv://olifrans_db:Piaget%40777@cluster0.av8nzhb.mongodb.net/gestao-produtos?retryWrites=true&w=majority
Opção 2 - Sem banco específico (será criado automaticamente):
env
MONGODB_URI=mongodb+srv://olifrans_db:Piaget%40777@cluster0.av8nzhb.mongodb.net/?retryWrites=true&w=majority








Funcionado

MONGODB_URI=mongodb+srv://olifrans_db:Piaget40777@cluster0.av8nzhb.mongodb.net/gestao-produtos?retryWrites=true&w=majority
PORT=3000

## 📋 Passo a passo visual no Atlas:
No seu dashboard do Atlas, clique no botão "Browse Collections"

Se não houver bancos, aparecerá um botão "Add My Own Data"

Clique em "Create Database"

Preencha:

gestao-produtos como Database Name

produtos como Collection Name

Clique "Create"

## 🚀 Depois de criar o banco:
Execute seu projeto:


npm start
O MongoDB criará automaticamente:
O banco de dados gestao-produtos
A collection produtos
Os documentos conforme você usar a aplicação

## ✅ Verificação:
Após executar a aplicação, volte ao MongoDB Atlas
Clique em "Browse Collections"
Você deverá ver o banco gestao-produtos com a collection produtos
Os produtos que você criar aparecerão lá












