export const addTodo = todo => ({
  type: 'ADD_TODO',
  payload: todo
});

export const clearForm = todo => ({
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
