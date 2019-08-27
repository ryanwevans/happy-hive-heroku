const initialState = {
    name: '',
    description: '',
    points_value: null,
    assigned_to: '',
    complete: false
}

const choreFormDataReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case 'UPDATED_CHORE_FORM_DATA':
            return action.choreFormData;

        case 'RESET_CHORE_FORM_DATA':
            return initialState;

        default:
            return state;
    }
}

export default choreFormDataReducer;