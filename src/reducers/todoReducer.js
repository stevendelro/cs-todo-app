import { v5 as uuidv5 } from 'uuid';
import moment from 'moment';
import * as actions from '../actions/actions';

const UUID_CUSTOM_NAMESPACE = 'e664c366-fbcc-4461-a226-24f0fa011153';

const initialState = {
  todoItem: {
    id: '',
    date: '',
    task: '',
    author: 'steven',
    details: '',
    completed: false,
  },
  todos: [],
};

function todoReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.UPDATE_TASK:
      return {
        ...state,
        todoItem: {
          ...state.todoItem,
          task: payload,
        },
      };
    case actions.UPDATE_DETAILS:
      return {
        ...state,
        todoItem: {
          ...state.todoItem,
          details: payload,
        },
      };
    case actions.CREATE_TODO:
      const timestamp = new Date();
      const formattedDate = moment(timestamp).format('MMMM Do YYYY');
      const formattedTime = moment(timestamp).format('h:mm:ss a');
      return {
        ...state,
        todoItem: {
          ...state.todoItem,
          id: uuidv5('cs-todo-app', UUID_CUSTOM_NAMESPACE),
          date: formattedDate,
          time: formattedTime,
          task: payload.task,
          details: payload.details,
          completed: false,
        },
      };
    // case actions.FINISHED_TODO:
    //   state.todos.forEach(todoItem => {
    //     if (to)
    //   })
    //   return {
    //     ...state,
    //     todoItem: {
    //       ...state.todoItem,
    //       date: new Date().toISOString(),
    //       title: payload.title,
    //       details: payload.details,
    //       completed: false,
    //     },
    //   };
    case actions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, state.todoItem],
      };

    case actions.CLEAR_FORM:
      return {
        ...state,
        todoItem: {
          date: '',
          task: '',
          details: '',
          completed: false,
        },
      };

    default:
      return state;
  }
}

export default todoReducer;
