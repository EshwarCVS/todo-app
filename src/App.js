import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Header from './Components/header';
import TodoInput from './Components/todoinput';
import TodoItem from './Components/todoItem';

function UniqueIdGenarator(){
}

UniqueIdGenarator.prototype.getNewId=function(){
  this.id = JSON.parse(localStorage.getItem('lastId'));
  if(!this.id){
    this.id = 0;
  }
  let newId = 1+this.id;
  localStorage.setItem('lastId',newId);
  return newId;
}

UniqueIdGenarator.prototype.getId=function(){
  let newd=JSON.parse(localStorage.getItem('lastId'));
  if(!newd)
  {
    newd =1;
  }
  return newd;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.uig = new UniqueIdGenarator();
    this.state = {
      todos: this.getTodos(),
      id: this.uig.getNewId()
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  getTodos(){
    let todos = JSON.parse(localStorage.getItem('todos'));
    if(!todos){
      todos = [
        {
          id: this.uig.getId(),
          text: 'add todo'
        }
      ]
      localStorage.setItem('todos',JSON.stringify(todos));
    }
    return todos;
  }

  addTodo(todoText) {
    console.log(this.state.todos);
    let todos = this.state.todos.slice();
    console.log(todos);
    todos.push({id: this.uig.getNewId(), text: todoText});
    localStorage.setItem('todos',JSON.stringify(todos));
    this.setState({
      todos: todos,
      id: this.id
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
          <sample category="" addcategory={this.addcategory} />
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
