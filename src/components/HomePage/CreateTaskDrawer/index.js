import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import {
  addTask,
  createTask,
  clearForm,
  updateTask,
  updateDetails,
} from '../../../actions/taskActions';
import CreateTaskForm from './CreateTaskForm';

const drawerWidth = 600;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function CreateTaskDrawer(props) {
  const classes = useStyles();
  const {
    addTask,
    createTask,
    clearForm,
    updateTask,
    updateDetails,
    taskItemState,
  } = props;

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}>
      <Toolbar />
      <div className={classes.drawerContainer}>
        <CreateTaskForm
          addTask={addTask}
          createTask={createTask}
          clearForm={clearForm}
          updateTask={updateTask}
          updateDetails={updateDetails}
          taskItemState={taskItemState}
        />
      </div>
    </Drawer>
  );
}

const mapStateToProps = store => {
  return {
    taskItemState: store.taskState.taskItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: bindActionCreators(addTask, dispatch),
    createTask: bindActionCreators(createTask, dispatch),
    clearForm: bindActionCreators(clearForm, dispatch),
    updateTask: bindActionCreators(updateTask, dispatch),
    updateDetails: bindActionCreators(updateDetails, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskDrawer);
