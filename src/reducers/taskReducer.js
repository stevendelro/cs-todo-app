import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import * as actions from '../actions/actions';

const initialState = {
  taskItem: {
    id: '',
    date: '',
    task: '',
    author: 'steven',
    details: '',
    completed: false,
  },
  tasks: [],
};

function taskReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.UPDATE_TASK:
      return {
        ...state,
        taskItem: {
          ...state.taskItem,
          task: payload,
        },
      };
    case actions.UPDATE_DETAILS:
      return {
        ...state,
        taskItem: {
          ...state.taskItem,
          details: payload,
        },
      };
    case actions.CREATE_TASK:
      const timestamp = new Date();
      const formattedDate = moment(timestamp).format('MMMM Do YYYY');
      const formattedTime = moment(timestamp).format('h:mm:ss a');
      return {
        ...state,
        taskItem: {
          ...state.taskItem,
          id: uuidv4(),
          date: formattedDate,
          time: formattedTime,
          task: payload.task,
          details: payload.details,
          completed: false,
        },
      };
    case actions.FINISHED_TASK:
      const withCompletedTask = [];
      state.tasks.forEach(taskItem => {
        if (taskItem.id === action.payload.id) {
          taskItem.completed
            ? (taskItem.completed = false)
            : (taskItem.completed = true);
          withCompletedTask.push(taskItem);
        } else {
          withCompletedTask.push(taskItem);
        }
      });
      return {
        ...state,
        tasks: withCompletedTask,
      };
    case actions.DELETE_TASK:
      const withTaskRemoved = [];
      state.tasks.forEach(taskItem => {
        if (taskItem.id !== action.payload.id) {
          withTaskRemoved.push(taskItem);
        }
      });
      return {
        ...state,
        tasks: withTaskRemoved,
      };

    case actions.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, state.taskItem],
      };

    case actions.CLEAR_FORM:
      return {
        ...state,
        taskItem: initialState.taskItem,
      };

    default:
      return state;
  }
}

export default taskReducer;
