const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nomeDoProduto: {
    type: String,
    required: [true, 'Nome do produto é obrigatório'],
    trim: true
  },
  descricaoDoProduto: {
    type: String,
    required: [true, 'Descrição do produto é obrigatória'],
    trim: true
  },
  codigoDoProduto: {
    type: String,
    required: [true, 'Código do produto é obrigatório'],
    unique: true,
    trim: true
  },
  precoDoProduto: {
    type: Number,
    required: [true, 'Preço do produto é obrigatório'],
    min: [0, 'Preço não pode ser negativo']
  }
}, {
  timestamps: true
});

// Middleware para garantir que o ID seja gerado automaticamente
productSchema.pre('save', function(next) {
  if (!this._id) {
    this._id = new mongoose.Types.ObjectId();
  }
  next();
});

module.exports = mongoose.model('Produto', productSchema);