const initialState = {
  todoItem: {
    date: '',
    title: '',
    text: '',
    completed: false,
  },
  todos: [],
};

function todoReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_TITLE':
      return {
        ...state,
        todoItem: {
          ...state.todoItem,
          title: payload,
        },
      };
    case 'UPDATE_TEXT':
      return {
        ...state,
        todoItem: {
          ...state.todoItem,
          text: payload,
        },
      };
    case 'CREATE_TODO':
      return {
        ...state,
        todoItem: {
          date: new Date().toISOString(),
          title: payload.title,
          text: payload.text,
          completed: payload.completed,
        },
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, state.todoItem]
      };

    case 'CLEAR_FORM':
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
