import { resetChoreFormData } from "./choreForm";

const API_URL = process.env.REACT_APP_API_URL

//  ** Action Creators **
const fetchChores = chores => {
    return {
        type: 'FETCH_CHORES', 
        chores
    }
}

const addChore = chore => {
    return {
        type: 'ADD_CHORE',
        chore
    }
}

const updateChore = chore => {
    return {
        type: 'UPDATE_CHORE',
        chore
    }
}

// ** Async Actions **
export const getChores = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${API_URL}/chores`);
            const chores = await response.json();
            return dispatch(fetchChores(chores));
        }
        catch (error) {
            return console.log(error);
        }
    }
}

export const createChore = chore => {
    return async dispatch => {
        try {
            const response = await fetch(`${API_URL}/chores`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ chore })
            });
            const chore = await response.json();
            dispatch(addChore(chore));
            dispatch(resetChoreFormData());
        }
        catch (error) {
            return console.log(error);
        }
    }
}

export const editChore = chore => {
    return async dispatch => {
        try {
            const response = await fetch(`${API_URL}/chores/${chore.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ chore })
            });
            const chore = await response.json();
            dispatch(updateChore(chore));
        }
        catch (error) {
            return console.log(error);
        }
    }
}
