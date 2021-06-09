import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import * as actions from '../actions/actions';

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
    case actions.CREATE_TASK:
      const timestamp = new Date();
      const formattedDate = moment(timestamp).format('MMMM Do YYYY');
      const formattedTime = moment(timestamp).format('h:mm:ss a');
      return {
        ...state,
        todoItem: {
          ...state.todoItem,
          id: uuidv4(),
          date: formattedDate,
          time: formattedTime,
          task: payload.task,
          details: payload.details,
          completed: false,
        },
      };
    case actions.FINISHED_TODO:
      const withCompletedTodo = [];
      state.todos.forEach(todoItem => {
        if (todoItem.id === action.payload.id) {
          todoItem.completed
            ? todoItem.completed = false
            : todoItem.completed = true
          withCompletedTodo.push(todoItem);
        } else {
          withCompletedTodo.push(todoItem);
        }
      });
      return {
        ...state,
        todos: withCompletedTodo,
      };
    case actions.DELETE_TODO:
      const withTodoRemoved = [];
      state.todos.forEach(todoItem => {
        if (todoItem.id !== action.payload.id) {
          withTodoRemoved.push(todoItem);
        }
      });
      return {
        ...state,
        todos: withTodoRemoved,
      };

    case actions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, state.todoItem],
      };

    case actions.CLEAR_FORM:
      return {
        ...state,
        todoItem: initialState.todoItem,
      };

    default:
      return state;
  }
}

export default todoReducer;
