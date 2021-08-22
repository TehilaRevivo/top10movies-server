const router = require('express').Router();

const movieController = require('../controllers/movie.controller')

router.get('/getAllMovies', movieController.getAllMovies)
router.post('/addMovie',movieController.addMovie)
router.post('/editMovie/:idMovie',movieController.editMovie)
router.post('/removeMovie/:idMovie',movieController.removeMovie)
module.exports = router;
