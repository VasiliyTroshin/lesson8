import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { authReducer } from './reducers/authReducer';

const logger=createLogger({
    collapsed:true,
    diff:true
})

export const store=createStore(authReducer,applyMiddleware(thunk,logger));