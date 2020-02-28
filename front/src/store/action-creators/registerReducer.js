import axios from 'axios';

const createUser = (user) => ({
    type: 'CREATE_USER',
    user,
});


const logInUser = (user) => ({
    type: 'LOG_IN',
    user,
});

const logOutUser = (user) => ({
    type: 'LOG_OUT',
    user,
});

export const addUser = (username, password) => dispatch =>
    axios.post('/users/register', { username: username, password: password })
        .then(res => res.data)
        .then(() => console.log('se creo el usuario'))
        .catch(console.log('no se creo'))


export const logIn = (username, password) => dispatch =>
    axios.post('/users/login', { username: username, password: password })
        .then(res => res.data)
        .then(user => {
            dispatch(logInUser(user));
        });

export const logOut = () => dispatch =>
    axios.get('/users/logout')
        .then(res => res.data)
        .then(() => {
            dispatch(logOutUser());
        });