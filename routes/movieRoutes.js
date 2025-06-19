const express = require('express'); 
const router = express.Router();
const movieController = require('../controllers/movieController');
const multer = require('multer');
const path = require('path');
const methodOverride = require('method-override');

// Middleware para permitir PUT/DELETE via HTML
router.use(methodOverride('_method'));

// Configuração Multer para upload de capas
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// ROTAS
router.get('/', movieController.listMovies);
router.get('/new', movieController.showCreateForm);
router.post('/new', upload.single('capa'), movieController.createMovie);

router.get('/:id/edit', movieController.editMovieForm);
router.put('/:id', upload.single('capa'), movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
