const githubReducer = (currentState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...currentState,
                users: action.payload,
                isLoading: false
            }
        case 'SET_LOADING':
            return {
                ...currentState,
                isLoading: true
            }
        case 'CLEAR_USERS':
            return {
                ...currentState,
                users: []
            }
        default:
            return currentState
    }
}

export default githubReducer
