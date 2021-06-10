import * as actions from './actions';

export const createTask = task => ({
  type: actions.CREATE_TASK,
  payload: task
});
export const addTask = () => ({
  type: actions.ADD_TASK,
});
export const finishedTask = id => ({
  type: actions.FINISHED_TASK,
  payload: { id },
});
export const deleteTask = id => ({
  type: actions.DELETE_TASK,
  payload: { id },
});
export const editTask = () => ({
  type: actions.EDIT_TASK,
});

export const clearForm = () => ({
  type: actions.CLEAR_FORM,
});

export const updateTask = text => ({
  type: actions.UPDATE_TASK,
  payload: text,
});
export const updateDetails = text => ({
  type: actions.UPDATE_DETAILS,
  payload: text,
});
