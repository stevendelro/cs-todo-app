import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    margin: theme.spacing(0, 0, 3, 0),
    boxShadow: theme.shadows[1],
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    flexShrink: 0,
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  detailsParagraph: {
    margin: 0,
    padding: theme.spacing(3, 0, 0),
    minHeight: '96px',
  },
  chip: {
    flexBasis: 0,
  },
  chipContainer: {
    width: '73px',
  },
  taskTitle: {
    flexGrow: 1,
  },
  summaryDate: {
    marginLeft: '30px',
  },
  buttonGroup: {
    height: '42px',
  },
  detailsFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing(6),
  },
}));

const StyledAccordianSummary = withStyles(theme => {
  const transition = {
    duration: theme.transitions.duration.shortest,
  };
  return {
    content: {
      display: 'flex',
      // flexDirection: 'row',
      // justifyContent: 'space-between',
      // flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '&$expanded': {
        margin: '20px 0',
      },
    },
  };
})(AccordionSummary);

function TaskListItem({
  finishedTask,
  deleteTask,
  editTask,
  id,
  editedTaskID,
  editTitleDetails,
  currentlyEditing,
  task,
  dateCreated,
  author,
  details,
  completed,
  priority,
}) {
  const classes = useStyles();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [newPriority, setNewPriority] = useState('low');

  const handleFinish = () => finishedTask(id);
  const handleDelete = () => deleteTask(id);
  const handleEdit = () => editTask(id);
  const handleSubmitCancel = () => editTask();
  const handlePriorityChange = e => setNewPriority(e.target.value);
  const handleSubmitEdit = () =>
    editTitleDetails(id, {
      title: taskTitle,
      details: taskDetails,
    });
  return (
    <Accordion className={classes.root}>
      <StyledAccordianSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        {task ? (
          <>
            <div className={classes.chipContainer}>
              <Chip
                className={classes.chip}
                size="small"
                label={priority}
                variant="outlined"
              />
            </div>
            <Typography className={classes.taskTitle}>{task}</Typography>
          </>
        ) : (
          <div></div>
        )}
        <Typography className={classes.summaryDate} variant="overline">
          {dateCreated}
        </Typography>
      </StyledAccordianSummary>

      <AccordionDetails className={classes.detailsContainer}>
        {currentlyEditing && id === editedTaskID ? (
          <Grid container direction="column" justify="center">
            <TextField
              id="standard-basic"
              label="Edit Task"
              onChange={e => setTaskTitle(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Edit Details"
              onChange={e => setTaskDetails(e.target.value)}
            />
          </Grid>
        ) : (
          <Typography variant="body1" className={classes.detailsParagraph}>
            {details}
          </Typography>
        )}
        <Box className={classes.detailsFooter}>
          {currentlyEditing ? (
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="priorities"
                name="prioritiesGroup"
                value={newPriority}
                onChange={handlePriorityChange}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center">
                  <FormControlLabel
                    value="low"
                    control={<Radio />}
                    label="Low"
                  />
                  <FormControlLabel
                    value="high"
                    control={<Radio />}
                    label="High"
                  />
                  <FormControlLabel
                    value="urgent"
                    control={<Radio />}
                    label="Urgent"
                  />
                </Grid>
              </RadioGroup>
            </FormControl>
          ) : (
            <Typography variant="overline">
              author: {author} — priority: {priority}
            </Typography>
          )}

          {currentlyEditing ? (
            <ButtonGroup
              className={classes.buttonGroup}
              variant="text"
              color="primary"
              aria-label="text primary button group">
              <Button
                variant="text"
                color="primary"
                onClick={handleSubmitCancel}>
                CANCEL
              </Button>
              <Button variant="text" color="primary" onClick={handleSubmitEdit}>
                SUBMIT
              </Button>
            </ButtonGroup>
          ) : (
            <ButtonGroup
              className={classes.buttonGroup}
              variant="text"
              color="primary"
              aria-label="text primary button group">
              <Button onClick={handleFinish}>
                {completed ? 'NOT DONE?' : 'MARK DONE'}
              </Button>
              <Button onClick={handleEdit}>EDIT</Button>
              <Button onClick={handleDelete}>DELETE</Button>
            </ButtonGroup>
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default TaskListItem;
