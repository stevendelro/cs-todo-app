import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addTodo,
  createTodo,
  clearForm,
  updateTask,
  updateDetails,
} from '../../actions/todoActions';

export class Form extends Component {
  handleTitleChange = event => this.props.updateTask(event.target.value);
  handleTextChange = event => this.props.updateDetails(event.target.value);
  handleSubmit = event => {
    event.preventDefault();
    this.props.createTodo(this.props.todoItem);
    this.props.addTodo();
    this.props.clearForm();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Task"
            value={this.props.todoItem.task}
            onChange={this.handleTitleChange}
          />
          <input
            type="text"
            placeholder="Details"
            value={this.props.todoItem.details}
            onChange={this.handleTextChange}
          />
          <button type="submit">ADD TODO</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    todoItem: store.todoState.todoItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: bindActionCreators(addTodo, dispatch),
    createTodo: bindActionCreators(createTodo, dispatch),
    clearForm: bindActionCreators(clearForm, dispatch),
    updateTask: bindActionCreators(updateTask, dispatch),
    updateDetails: bindActionCreators(updateDetails, dispatch),
  };
};

// connect passes the entire redux store to mapStateToProps
// and the dispatch method to mapDispatchToProps, then connects it to the component.
export default connect(mapStateToProps, mapDispatchToProps)(Form);
