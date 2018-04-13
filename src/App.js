import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Header from './Components/header';
import TodoInput from './Components/todoinput';
import TodoItem from './Components/todoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.getTodos(),
      id: this.getNextId()
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  getTodos(){
    let todos = JSON.parse(localStorage.getItem('todos'));
    if(!todos){
      todos = [
        {
          text: 'add todo',
          id: 0
        }
      ]
      localStorage.setItem('todos',JSON.stringify(todos));
      this.getNextId();
    }
    return todos;
  }

  getNextId(){
    let id=localStorage.getItem('id')
    if(!id)
    {
      id :0
    }
    else
      {
          id=[
      {
        id:1+id
      }
    ]
    localStorage.setItem('id',JSON.stringify(id));
  }
  return id;
  }

  addTodo(todoText) {
    console.log(this.state.todos);
    let todos = this.state.todos.slice();
    console.log(todos);
    todos.push({id: this.state.nextId, text: todoText});
    localStorage.setItem('todos',JSON.stringify(todos));
    this.setState({
      todos: todos,
      id: 1+this.id
    });
  }

  removeTodo(id) {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
