const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao MongoDB!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gestao-produtos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Configurações do Express
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/produtos', require('./routes/produtos'));

// Rota principal
app.get('/', (req, res) => {
  res.redirect('/produtos');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});