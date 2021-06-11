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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

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
  summaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryDate: {
    marginLeft: '30px',
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
      flexDirection: 'column',
      flexGrow: 1,
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
}) {
  const classes = useStyles();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDetails, setTaskDetails] = useState('');

  const handleFinish = () => finishedTask(id);
  const handleDelete = () => deleteTask(id);
  const handleEdit = () => editTask(id);
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
        <Box className={classes.summaryContainer}>
          <Typography>{task}</Typography>
          <Typography className={classes.summaryDate} variant="overline">
            {dateCreated}
          </Typography>
        </Box>
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
          <p className={classes.detailsParagraph}>{details}</p>
        )}
        <Box className={classes.detailsFooter}>
          <Typography variant="overline">author: {author}</Typography>
          {currentlyEditing ? (
            <Button variant="text" color="primary" onClick={handleSubmitEdit}>
              SUBMIT
            </Button>
          ) : (
            <ButtonGroup
              className={classes.buttonGroup}
              variant="text"
              color="primary"
              aria-label="text primary button group">
              <Button onClick={handleFinish}>
                {completed ? 'UNDO' : 'MARK COMPLETE'}
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
