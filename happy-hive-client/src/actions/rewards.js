import { resetRewardFormData } from './rewardForm'

const API_URL = process.env.REACT_APP_API_URL

//  ** Action Creators **
const fetchRewards = rewards => {
    return {
        type: 'FETCH_REWARDS', 
        rewards
    }
}

const addReward = reward => {
    return {
        type: 'ADD_REWARD',
        reward
    }
}

const updateReward = reward => {
    return {
        type: 'UPDATE_REWARD',
        reward
    }
}

// ** Async Actions
export const getRewards = () => {
    return async dispatch => {
        try {
            const resp = await fetch(`${API_URL}/rewards`);
            const rewards = await resp.json();
            return dispatch(fetchRewards(rewards));
        }
        catch (error) {
            return console.log(error);
        }
    }
}

export const createReward = reward => {
    return async dispatch => {
        try {
            const response = await fetch(`${API_URL}/rewards`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ reward })
            });
            const reward = await response.json();
            dispatch(addReward(reward));
            dispatch(resetRewardFormData());
        }
        catch (error) {
            return console.log(error);
        }
    }
}

export const editReward = reward => {
    return async dispatch => {
        try {
            const response = await fetch(`${API_URL}/rewards/${reward.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ reward })
            });
            const reward = await response.json();
            dispatch(updateReward(reward));
        }
        catch (error) {
            return console.log(error);
        }
    }
}