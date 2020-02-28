import axios from 'axios';

const receiveMovies = (movies) => ({
    type: 'RECEIVE_MOVIES',
    movies,
});

const receiveSingleMovie = (movie) => ({
    type: 'RECEIVE_SINGLE_MOVIE',
    movie
});

export const fetchMovies = (search) => dispatch =>

    axios.get(`https://www.omdbapi.com/?apikey=1f7bc67a&s=${search}`)
        .then(res => res.data)
        .then(movies => dispatch(receiveMovies(movies.Search)));


export const fetchSingleMovie = (id) => dispatch =>
    axios.get(`https://www.omdbapi.com/?apikey=1f7bc67a&i=${id}`)
        .then(res => res.data)
        .then(movie => dispatch(receiveSingleMovie(movie)));



