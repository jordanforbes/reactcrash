import React, { Component } from 'react';
import TodoItem from './Todoitem';

class Todos extends Component {
  render(){
    return this.props.todos.map((todo) =>(
        	<TodoItem />
       ));
  }
}

export default Todos;
