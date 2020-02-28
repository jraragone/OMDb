import { combineReducers } from 'redux'
import movies from './movies'
import userRegister from './userRegister'


const reducer = combineReducers({
    movies,
    userRegister
});

export default reducer