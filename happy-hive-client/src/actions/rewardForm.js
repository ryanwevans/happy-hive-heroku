//  ** Action Creators **

export const updateRewardFormData = rewardFormData => {
    return {
        type: 'UPDATED_REWARD_FORM_DATA',
        rewardFormData
    }
}

export const resetRewardFormData = () => {
    return {
        type: 'RESET_REWARD_FORM_DATA'
    }
}