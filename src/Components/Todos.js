import React, { Component } from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
	// markComplete = () =>{
	// 	console.log('Hello')
	// }

// markComplete = ()=>{
// 	console.log('From app.js')
// }

  render(){
    return this.props.todos.map((todo) =>(
        	<TodoItem key= {todo.id} todo = {todo}
        	markComplete= {this.props.markComplete}
        	delTodo={this.props.delTodo}/>
       ));
  }
}

// PRopTypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired
}

export default Todos;
