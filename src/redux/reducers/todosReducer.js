import { ADD_TODO } from '../ActionTypes';

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {

  const { payload } = action;

  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [state.todos, payload],
      };

    default:
      return state;
  }
};

export default todosReducer;