import { combineReducers } from "redux";
import TodoReducer from './todosReducer';

const rootReducers = combineReducers({
    todos: TodoReducer,
});

export default rootReducers;