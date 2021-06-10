import React from 'react';

function CreateTaskForm(props) {
  const handleTitleChange = event => props.updateTask(event.target.value);
  const handleTextChange = event => props.updateDetails(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    props.createTask(props.taskItem);
    props.addTask();
    props.clearForm();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task"
          value={props.taskItemState.task}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Details"
          value={props.taskItemState.details}
          onChange={handleTextChange}
        />
        <button type="submit">ADD TODO</button>
      </form>
    </div>
  );
}

export default CreateTaskForm;
