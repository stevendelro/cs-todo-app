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
        todoItem: {
          ...state.todoItem,
          title: payload,
        },
      };
    case 'UPDATE_TEXT':
      return {
        todoItem: {
          ...state.todoItem,
          text: payload,
        },
      };
    case 'ADD_TODO':
      return {
        todoItem: {
          date: new Date(),
          title: payload.title,
          text: payload.text,
          completed: payload.completed,
        },
        todos: [state.todos, state.todoItem],
      };

    case 'CLEAR_FORM':
      return {
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
