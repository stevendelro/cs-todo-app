import * as actions from './actions';

export const createTask = task => ({
  type: actions.CREATE_TASK,
  payload: task,
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
export const editTask = id => ({
  type: actions.EDIT_TASK,
  payload: { id },
});
export const clearForm = () => ({
  type: actions.CLEAR_FORM,
});
export const createTaskTitle = text => ({
  type: actions.CREATE_TASK_TITLE,
  payload: text,
});
export const createTaskDetails = text => ({
  type: actions.CREATE_TASK_DETAILS,
  payload: text,
});
export const editTitleDetails = (id, text) => ({
  type: actions.EDIT_TITLE_DETAILS,
  payload: { id, text },
});
export const createTaskPriority = priority => ({
  type: actions.CREATE_TASK_PRIORITY,
  payload: { priority }
})
