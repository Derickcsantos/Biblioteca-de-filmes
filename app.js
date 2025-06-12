require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

// Conexão MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB conectado!'))
.catch(err => console.error('Erro na conexão MongoDB:', err));

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
