import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import * as actionCreators from '../../../actions/taskActions';
import TaskList from './TaskList';

const useStyles = makeStyles(theme => ({
  drawerSpacer: {
    marginLeft: '600px'
  }
}))

function TaskListPage({ taskState, finishedTask, deleteTask, editTask }) {
  const classes = useStyles();
  return (
    <div className={classes.drawerSpacer}>
      <TaskList
        taskState={taskState}
        finishedTask={finishedTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

const mapStateToProps = store => {
  return {
    taskState: store.taskState,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      finishedTask: actionCreators.finishedTask,
      deleteTask: actionCreators.deleteTask,
      editTask: actionCreators.editTask,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TaskListPage);
