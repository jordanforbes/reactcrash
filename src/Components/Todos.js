import React, { Component } from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
	markComplete = () =>{
		
	}

  render(){
    return this.props.todos.map((todo) =>(
        	<TodoItem key= {todo.id} todo = {todo}
        	markComplete={this.markComplete}/>
       ));
  }
}

// PRopTypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired
}

export default Todos;
