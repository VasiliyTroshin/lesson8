import { combineReducers, createStore } from 'redux';
import { postsReducer } from './reducers/postReducer';
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux';

const reducer=combineReducers({
    posts:postsReducer
})

export const store=createStore(reducer,applyMiddleware(thunk))