import { combineReducers } from 'redux';
import choresReducer from './chores';
import choreFormDataReducer from './choreFormData'
import rewardsReducer from './rewards';
import rewardFormDataReducer from './rewardFormData';
import achieversReducer from './achievers';

const rootReducer = combineReducers({
    chores: choresReducer,
    choreFormData: choreFormDataReducer,
    rewards: rewardsReducer,
    rewardFormData: rewardFormDataReducer,
    achievers: achieversReducer
});

export default rootReducer;