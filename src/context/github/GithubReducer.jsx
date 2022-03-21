const githubReducer = (currentState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...currentState,
                users: action.payload,
                isLoading: false
            }
        case 'GET_USER_AND_REPOS':
            return {
                ...currentState,
                user: action.payload.user,
                repos: action.payload.repos,
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
