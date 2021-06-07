import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addTodo,
  clearForm,
  updateTitle,
  updateText,
} from '../actions/todoActions';

export class Form extends Component {
  handleTitleChange = event => this.props.updateTitle(event.target.value);
  handleTextChange = event => this.props.updateText(event.target.value);
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.props.todoItem);
    this.props.clearForm()
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={this.props.todoItem.title}
            onChange={this.handleTitleChange}
          />
          <input
            type="text"
            placeholder="Text"
            value={this.props.todoItem.text}
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
    todoItem: store.todos.todoItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: bindActionCreators(addTodo, dispatch),
    clearForm: bindActionCreators(clearForm, dispatch),
    updateTitle: bindActionCreators(updateTitle, dispatch),
    updateText: bindActionCreators(updateText, dispatch),
  };
};

// connect passes the entire redux store to mapStateToProps
// and the dispatch method to mapDispatchToProps, then connects it to the component.
export default connect(mapStateToProps, mapDispatchToProps)(Form);
