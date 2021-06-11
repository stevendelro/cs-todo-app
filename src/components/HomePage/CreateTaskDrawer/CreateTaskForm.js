import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function CreateTaskForm(props) {
  const classes = useStyles();
  const handleTitleChange = event => props.createTaskTitle(event.target.value);
  const handleTextChange = event => props.createTaskDetails(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    props.createTask(props.taskItemState);
    props.addTask();
    props.clearForm();
  };
  return (
    <div>
      <form className={classes.inputContainer} onSubmit={handleSubmit}>
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
