const achieversReducer = (state = [], action) => {

    switch(action.type) {

        case 'FETCH_ACHIEVERS':
            return action.achievers;

        case 'ADD_ACHIEVER':
            return state.concat(action.achiever);

        case 'UPDATE_ACHIEVER':
            const updatedAchiever = action.achiever
            return [
                ...state.achievers, updatedAchiever
            ];

        default:
            return state;
    }
}

export default achieversReducer;