export const createTodo = todo => ({
  type: 'CREATE_TODO',
  payload: todo
});
export const addTodo = () => ({
  type: 'ADD_TODO',
});

export const clearForm = () => ({
  type: 'CLEAR_FORM',
});

export const updateTitle = text => ({
  type: 'UPDATE_TITLE',
  payload: text
})
export const updateText = text => ({
  type: 'UPDATE_TEXT',
  payload: text
})
