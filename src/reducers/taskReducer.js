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
    dateEdited: 'never',
  },
  currentlyEditing: false,
  editedTaskID: '',
  taskList: [],
};

function taskReducer(state = initialState, action) {
  const { type, payload } = action;
  let timestamp, formattedDate
  switch (type) {
    case actions.CREATE_TASK_TITLE:
      return {
        ...state,
        taskItem: {
          ...state.taskItem,
          task: payload,
        },
      };
    case actions.CREATE_TASK_DETAILS:
      return {
        ...state,
        taskItem: {
          ...state.taskItem,
          details: payload,
        },
      };
    case actions.CREATE_TASK:
      timestamp = new Date();
      formattedDate = moment(timestamp).format('MMMM Do - h:mm:ss');
      return {
        ...state,
        taskItem: {
          ...state.taskItem,
          id: uuidv4(),
          date: formattedDate,
          task: payload.task,
          details: payload.details,
          completed: false,
        },
      };
    case actions.EDIT_TITLE_DETAILS:
      const includeEdit = [];
      timestamp = new Date();
      formattedDate = moment(timestamp).format('MMMM Do - h:mm:ss');
      let withTaskEdited = state.taskList;

      withTaskEdited.forEach(taskItem => {
        if (taskItem.id === action.payload.id) {
          taskItem.dateEdited = formattedDate;
          taskItem.task = payload.text.title;
          taskItem.details = payload.text.details;
        }
        includeEdit.push(taskItem);
      });

      return {
        ...state,
        currentlyEditing: !state.currentlyEditing,
        taskList: withTaskEdited,
      };

    case actions.EDIT_TASK:
      return {
        ...state,
        currentlyEditing: !state.currentlyEditing,
        editedTaskID: payload.id,
      };

    case actions.FINISHED_TASK:
      const withCompletedTask = [];
      state.taskList.forEach(taskItem => {
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
        taskList: withCompletedTask,
      };
    case actions.DELETE_TASK:
      const withTaskRemoved = [];
      state.taskList.forEach(taskItem => {
        if (taskItem.id !== action.payload.id) {
          withTaskRemoved.push(taskItem);
        }
      });
      return {
        ...state,
        taskList: withTaskRemoved,
      };

    case actions.ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, state.taskItem],
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
