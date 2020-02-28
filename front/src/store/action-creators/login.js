import axios from 'axios';

// const logInUser = (user) => ({
//     type: 'LOG_IN',
//     user,
// });


// export const logIn = (username, password) => dispatch =>
//     axios.post('/users/login', { username: username, password: password })
//         .then(res => res.data)
//         .then(user => {
//             dispatch(logInUser(user));
//         })
//         .catch(err);