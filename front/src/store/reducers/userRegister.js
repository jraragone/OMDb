const initialState = {
    user: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return Object.assign({}, state, { user: action.user })
        case 'LOG_OUT':
            return Object.assign({}, state, { user: {} })
        default:
            return state;
    }
}
