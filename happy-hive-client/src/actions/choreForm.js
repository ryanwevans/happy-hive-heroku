//  ** Action Creators **

export const updateChoreFormData = choreFormData => {
    return {
        type: 'UPDATED_CHORE_FORM_DATA',
        choreFormData
    }
}

export const resetChoreFormData = () => {
    return {
        type: 'RESET_CHORE_FORM_DATA'
    }
}