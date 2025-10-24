const express = require('express');
const router = express.Router();
const Produto = require('../models/Produto');

// GET: Listar todos os produtos
router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.find().sort({ createdAt: -1 });
    res.render('index', { produtos });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Erro ao carregar produtos' });
  }
});

// GET: Formulário de criação
router.get('/create', (req, res) => {
  res.render('create', { produto: new Produto() });
});

// GET: Detalhes do produto
router.get('/:id', async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) {
      return res.status(404).render('error', { message: 'Produto não encontrado' });
    }
    res.render('details', { produto });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Erro ao carregar produto' });
  }
});

// GET: Formulário de edição
router.get('/:id/edit', async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) {
      return res.status(404).render('error', { message: 'Produto não encontrado' });
    }
    res.render('edit', { produto });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Erro ao carregar produto' });
  }
});

// POST: Criar novo produto
router.post('/', async (req, res) => {
  const produto = new Produto({
    nomeDoProduto: req.body.nomeDoProduto,
    descricaoDoProduto: req.body.descricaoDoProduto,
    codigoDoProduto: req.body.codigoDoProduto,
    precoDoProduto: req.body.precoDoProduto
  });

  try {
    const novoProduto = await produto.save();
    res.redirect('/produtos');
  } catch (error) {
    console.error(error);
    res.render('create', {
      produto: produto,
      error: 'Erro ao criar produto'
    });
  }
});

// PUT: Atualizar produto
router.put('/:id', async (req, res) => {
  let produto;
  try {
    produto = await Produto.findById(req.params.id);
    if (!produto) {
      return res.status(404).render('error', { message: 'Produto não encontrado' });
    }

    produto.nomeDoProduto = req.body.nomeDoProduto;
    produto.descricaoDoProduto = req.body.descricaoDoProduto;
    produto.codigoDoProduto = req.body.codigoDoProduto;
    produto.precoDoProduto = req.body.precoDoProduto;

    await produto.save();
    res.redirect('/produtos');
  } catch (error) {
    console.error(error);
    if (!produto) {
      return res.redirect('/produtos');
    }
    res.render('edit', {
      produto: produto,
      error: 'Erro ao atualizar produto'
    });
  }
});

// DELETE: Remover produto
router.delete('/:id', async (req, res) => {
  let produto;
  try {
    produto = await Produto.findById(req.params.id);
    if (!produto) {
      return res.status(404).render('error', { message: 'Produto não encontrado' });
    }

    await Produto.findByIdAndDelete(req.params.id);
    res.redirect('/produtos');
  } catch (error) {
    console.error(error);
    if (!produto) {
      return res.redirect('/produtos');
    }
    res.render('details', {
      produto: produto,
      error: 'Erro ao deletar produto'
    });
  }
});

module.exports = router;