const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const multer = require('multer');
const path = require('path');

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

router.get('/', movieController.listMovies);
router.get('/new', movieController.showCreateForm);
router.post('/new', upload.single('capa'), movieController.createMovie);

module.exports = router;
