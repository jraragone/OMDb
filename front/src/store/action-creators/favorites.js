import axios from 'axios';

const addFavorite = (user) => ({
    type: 'ADD_FAVORITE',
    user,
});


export const addToFavs = (username, password) => dispatch =>
    axios.post('/favorite', { username: username, password: password })
        .then(res => res.data)
        .then(fav => {
            dispatch(addFavorite(fav));
        });