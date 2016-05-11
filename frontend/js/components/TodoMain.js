import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import TodoInput from './TodoInput'
import Todo from './Todo'

class TodoMain extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { todos, actions } = this.props
    return (
      <div className='container'>
        <h2>Todo test</h2>
        <TodoInput func={actions.addTodo} />
        {todos.map(todo =>
          <Todo key={todo.id} text={todo.text} todoid={todo.id} />
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoMain)
