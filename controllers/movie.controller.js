const Movie = require('../models/movie')

const addMovie = async (req, res, next) => {
    console.log('add movie');
    const movie = req.body;
    let newMovie = new Movie(movie);

    try {
        await newMovie.save();
        console.log(newMovie);
        res.status(200).json({ message: 'Movie successfully added', newMovie: newMovie });
    }
    catch (err) {
        res.status(400).send(err.message)
    }
}

const getAllMovies = async (req, res) => {
    try {
        const allMovies = await Movie.find()

        res.status(200).json({ message: 'Movies', allMovies: allMovies });
    }
    catch (err) {
        res.status(400).send(err.message)
    }
}
const removeMovie = async (req, res) => {
    console.log('remove movie');
    const idMovie = req.params.idMovie
    console.log(idMovie);
    try {
        await Movie.findByIdAndDelete(idMovie)
        console.log('remove movie!!!');
        res.status(200).send('The movie has been deleted');
    }
    catch (err) {
        res.status(400).send(err.message)
    }
}
const editMovie = async (req, res) => {
    const idMovie = req.params.idMovie
    const movie = req.body
    console.log(idMovie);
    try {
        console.log(movie);
        await Movie.findByIdAndUpdate(idMovie,{ $set:movie}, {useFindAndModify: false})
        res.status(200).send('The movie has been updated');
    }
    catch (err) {
        res.status(400).send(err.message)
    }
}

module.exports = {
    getAllMovies,
    addMovie,
    removeMovie,
    editMovie
}