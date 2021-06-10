import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    // alignItems: 'center',
    marginTop: theme.spacing(2),
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

function TaskListItem(props) {
  const classes = useStyles();
  const handleFinish = () => props.finishedTask(props.id);
  const handleDelete = () => props.deleteTask(props.id);
  return (
    <Accordion className={classes.root}>
      <StyledAccordianSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Box className={classes.summaryContainer}>
          <Typography>{props.task}</Typography>
          <Typography className={classes.summaryDate} variant="overline">
            {props.dateCreated}
          </Typography>
        </Box>
      </StyledAccordianSummary>
      <AccordionDetails className={classes.detailsContainer}>
        <Box>
          <Typography>
            {props.details} - {String(props.completed)}
          </Typography>
        </Box>
        <Box className={classes.detailsFooter}>
          <Typography variant="overline">author: {props.author}</Typography>
          <ButtonGroup
            className={classes.buttonGroup}
            variant="text"
            color="primary"
            aria-label="text primary button group">
            <Button onClick={handleFinish}>
              {props.completed ? 'UNDO' : 'FINISHED'}
            </Button>
            <Button>EDIT</Button>
            <Button onClick={handleDelete}>DELETE</Button>
          </ButtonGroup>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default TaskListItem;
