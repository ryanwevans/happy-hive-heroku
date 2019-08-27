const API_URL = process.env.REACT_APP_API_URL

//  ** Action Creators **
const fetchAchievers = (achievers) => {
    return {
        type: 'FETCH_ACHIEVERS',
        achievers
    }
}

const addAchiever = achiever => {
    return {
        type: 'ADD_ACHIEVER',
        achiever
    }
}

const updateAchiever = (achiever) => {
    return {
        type: 'UPDATE_ACHIEVER',
        achiever
    }
}

export const setCurrentAchiever = (achiever) => {
    sessionStorage.setItem('current_user_name', achiever.name)
    sessionStorage.setItem('current_user_id', achiever.id)
    sessionStorage.setItem('current_user_points', achiever.points_earned)
}

export const clearCurrentAchiever = () => {
    return {
        type: 'CLEAR_CURRENT_ACHIEVER'
    }
}


//  ** Async Actions **
export const getAchievers = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${API_URL}/achievers`);
            const achievers = await response.json();
            return dispatch(fetchAchievers(achievers));
        }
        catch (error) {
            return console.log(error);
        }
    }
}

export const createAchiever = (achiever) => {
    return async dispatch => {
        try {
            const response = await fetch(`${API_URL}/achievers`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ achiever })
            });
            const achiever = await response.json();
            dispatch(addAchiever(achiever));
            setCurrentAchiever(achiever);
        }
        catch (error) {
            return console.log(error);
        }
    }
}

export const editAchiever = (achiever) => {
    return async dispatch => {
        try {
            const response = await fetch(`${API_URL}/achievers/${achiever.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ achiever })
            });
            const achiever = await response.json();
            return dispatch(updateAchiever(achiever));
        }
        catch (error) {
            return console.log(error);
        }
    }
}