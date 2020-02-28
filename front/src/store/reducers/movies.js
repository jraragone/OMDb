const initialState = {
    list: [],
    selectedMovie: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_MOVIES':
            return Object.assign({}, state, { list: action.movies });
        case 'RECEIVE_SINGLE_MOVIE':
            return Object.assign({}, state, { selectedMovie: action.movie });

        default:
            return state;
    }
}
