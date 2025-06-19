const Movie = require('../models/Movie');
const path = require('path');
const fs = require('fs');

exports.listMovies = async (req, res) => {
  try {
    const movies = await Movie.find().lean();
    res.render('movies/index', { movies });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao listar filmes');
  }
};

exports.showCreateForm = (req, res) => {
  res.render('movies/create');
};

exports.createMovie = async (req, res) => {
  try {
    const { nome, duracao, titulo, diretor, genero } = req.body;
    let capaPath = '';

    if (req.file) {
      capaPath = '/uploads/' + req.file.filename;
    }

    const movie = new Movie({
      nome,
      duracao,
      titulo,
      diretor,
      genero,
      capa: capaPath
    });

    await movie.save();
    res.redirect('/movies');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao cadastrar filme');
  }
};

exports.editMovieForm = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).lean();
    if (!movie) return res.status(404).send('Filme não encontrado');
    res.render('movies/editar', { movie });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao carregar formulário de edição');
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const { nome, duracao, titulo, diretor, genero } = req.body;
    const movie = await Movie.findById(req.params.id);

    if (!movie) return res.status(404).send('Filme não encontrado');

    // Se houver uma nova capa, atualiza e deleta a antiga
    if (req.file) {
      if (movie.capa && movie.capa.startsWith('/uploads/')) {
        const oldPath = path.join('public', movie.capa);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      movie.capa = '/uploads/' + req.file.filename;
    }

    // Atualiza os demais campos
    movie.nome = nome;
    movie.duracao = duracao;
    movie.titulo = titulo;
    movie.diretor = diretor;
    movie.genero = genero;

    await movie.save();
    res.redirect('/movies');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao atualizar filme');
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) return res.status(404).send('Filme não encontrado');

    // Remove a imagem do disco
    if (movie.capa && movie.capa.startsWith('/uploads/')) {
      const filePath = path.join('public', movie.capa);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    await Movie.findByIdAndDelete(req.params.id);
    res.redirect('/movies');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao excluir filme');
  }
};
