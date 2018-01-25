import {combineReducers} from 'redux';
import {productsJson, usersJson, data} from './searchReducer';
// import authors from './authorReducer';

const rootReducer = combineReducers({
    productsJson,
    usersJson,
    data,
});

export default rootReducer;