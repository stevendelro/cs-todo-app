import * as actions from './actions';

export const createTodo = todo => ({
  type: actions.CREATE_TODO,
  payload: todo,
});
export const addTodo = () => ({
  type: actions.ADD_TODO,
});
export const finishedTodo = id => ({
  type: actions.FINISHED_TODO,
  payload: { id },
});
export const deleteTodo = () => ({
  type: actions.DELETE_TODO,
});
export const editTodo = () => ({
  type: actions.EDIT_TODO,
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
