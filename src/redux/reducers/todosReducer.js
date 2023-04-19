import { ADD_TODO, DELETE_TODO } from '../ActionTypes';

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {

  const { payload } = action;

  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case DELETE_TODO:
      const newTodos = state.todos.filter(todo => todo !== payload);
      return {
        ...state,
        todos: newTodos,
      };

    default:
      return state;
  }
};

export default todosReducer;