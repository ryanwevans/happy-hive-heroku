const rewardsReducer = (state = [], action) => {
        
    switch(action.type) {

        case 'FETCH_REWARDS':
            return action.rewards;

        case 'ADD_REWARD':
            return state.concat(action.reward);
        
        case 'UPDATE_REWARD':
            const updatedReward = action.reward
            return [
                ...state.rewards, updatedReward
            ];

        default:
            return state;
            
    }
}

export default rewardsReducer;