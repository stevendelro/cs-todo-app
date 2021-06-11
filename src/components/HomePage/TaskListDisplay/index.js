import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import * as actionCreators from '../../../actions/taskActions';
import TaskList from './TaskList';

const useStyles = makeStyles(theme => ({
  drawerSpacer: {
    marginLeft: '600px',
  },
}));

function TaskListPage({
  tasks,
  finishedTask,
  deleteTask,
  editTask,
  currentlyEditing,
  editedTaskID,
  editTitleDetails,
}) {
  const classes = useStyles();
  return (
    <div className={classes.drawerSpacer}>
      <TaskList
        tasks={tasks}
        finishedTask={finishedTask}
        deleteTask={deleteTask}
        editTask={editTask}
        editedTaskID={editedTaskID}
        editTitleDetails={editTitleDetails}
        currentlyEditing={currentlyEditing}
      />
    </div>
  );
}

const mapStateToProps = store => {
  return {
    tasks: store.tasks,
    currentlyEditing: store.tasks.currentlyEditing,
    editedTaskID: store.tasks.editedTaskID,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      finishedTask: actionCreators.finishedTask,
      deleteTask: actionCreators.deleteTask,
      editTask: actionCreators.editTask,
      editTitleDetails: actionCreators.editTitleDetails,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TaskListPage);
