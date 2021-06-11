import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textFields: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  container: {
    margin: theme.spacing(6, 0)
  },
  createTaskHeading: {
    marginBottom: theme.spacing(2)
  }
}));

function CreateTaskForm(props) {
  const classes = useStyles();
  const [value, setValue] = useState('low');

  const handleChange = event => {
    setValue(event.target.value);
  };
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
        <Container className={classes.container}>
        <Typography className={classes.createTaskHeading} variant='h3'>Create Task</Typography>
          <TextField
            className={classes.textFields}
            variant="outlined"
            type="text"
            label="Task"
            value={props.taskItemState.task}
            onChange={handleTitleChange}
          />
          <TextField
            className={classes.textFields}
            variant="outlined"
            type="text"
            label="Details (optional)"
            value={props.taskItemState.details}
            onChange={handleTextChange}
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Set Priority</FormLabel>
            <RadioGroup
              aria-label="priorities"
              name="prioritiesGroup"
              value={value}
              onChange={handleChange}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                <FormControlLabel
                  value="low"
                  control={<Radio />}
                  label="Low Priority"
                />
                <FormControlLabel
                  value="high"
                  control={<Radio />}
                  label="High Priority"
                />
                <FormControlLabel
                  value="urgent"
                  control={<Radio />}
                  label="Urgent Priority"
                />
              </Grid>
            </RadioGroup>
          </FormControl>
          <Button type="submit" color="primary">
            ADD TODO
          </Button>
        </Container>
      </form>
    </div>
  );
}

export default CreateTaskForm;
