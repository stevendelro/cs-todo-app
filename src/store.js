import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
  todoState: todoReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

export default store;
