const Movie = require('../models/Movie');
const path = require('path');
const fs = require('fs');

exports.listMovies = async (req, res) => {
  try {
    const movies = await Movie.find().lean();
    res.render('movies/index', { movies });
  } catch (err) {
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
    res.status(500).send('Erro ao cadastrar filme');
  }
};
