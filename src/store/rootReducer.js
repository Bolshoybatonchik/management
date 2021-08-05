import { combineReducers } from 'redux';

import companies from './companies/reducer'
import apartment from './apartments/reduser'

const rootReducer = combineReducers({
    companies,
    apartment,
});

export default rootReducer;
