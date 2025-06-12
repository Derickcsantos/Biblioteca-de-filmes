const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  duracao: { type: String, required: true },
  titulo: { type: String, required: true },
  diretor: { type: String, required: true },
  genero: { type: String, required: true },
  capa: { type: String } // caminho do arquivo da capa
});

module.exports = mongoose.model('Movie', movieSchema);
