require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const movieRoutes = require('./routes/movieRoutes');
const methodOverride = require('method-override');

const app = express();

app.use(methodOverride('_method'));
// Conexão MongoDB
// Conexão MongoDB
console.log('Tentando conectar ao MongoDB...');

mongoose.connect('mongodb://localhost:27017/biblioteca-filmes', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(() => {
  console.log('✅ MongoDB conectado com sucesso!');
})
.catch(err => {
  console.error('❌ Erro na conexão MongoDB:');
  console.error(err.name);
  console.error(err.message);
  console.error(err.stack);
});

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rotas
app.use('/movies', movieRoutes);

app.get('/', (req, res) => {
  res.redirect('/movies');
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
