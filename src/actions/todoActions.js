import * as actions from './actions'

export const createTodo = todo => ({
  type: actions.CREATE_TODO,
  payload: todo
});
export const addTodo = () => ({
  type: actions.ADD_TODO,
});
export const finishedTodo = () => ({
  type: actions.FINISHED_TODO,
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

export const updateTitle = text => ({
  type: actions.UPDATE_TITLE,
  payload: text
})
export const updateText = text => ({
  type: actions.UPDATE_TEXT,
  payload: text
})
