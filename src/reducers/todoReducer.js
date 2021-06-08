import * as actions from '../actions/actions'

const initialState = {
  todoItem: {
    date: '',
    title: '',
    author: 'steven',
    text: '',
    completed: false,
  },
  todos: [],
};

function todoReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.UPDATE_TITLE:
      return {
        ...state,
        todoItem: {
          ...state.todoItem,
          title: payload,
        },
      };
    case actions.UPDATE_TEXT:
      return {
        ...state,
        todoItem: {
          ...state.todoItem,
          text: payload,
        },
      };
    case actions.CREATE_TODO:
      return {
        ...state,
        todoItem: {
          ...state.todoItem,
          date: new Date().toISOString(),
          title: payload.title,
          text: payload.text,
          completed: false,
        },
      };
    case actions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, state.todoItem]
      };

    case actions.CLEAR_FORM:
      return {
        ...state,
        todoItem: {
          date: '',
          title: '',
          text: '',
          completed: false,
        },
      };

    default:
      return state;
  }
}

export default todoReducer;
