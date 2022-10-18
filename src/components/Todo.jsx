import React from "react";
import './Todo.css';
class Todo extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: "",
      editing: false,
      currentid: "",
      currentValue: "",
      submitTask:false,
    };
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
 
  
  onAddTask = (e) => {
    e.preventDefault();
    const isFound = this.state.todos.some(todo => {
      if (todo.name === this.state.value) {
        return true;
      }
    
      return false;
    });
    
    if (!isFound) {
      const obj = {      
        id: Date.now(),
        name: this.state.value,
        isDone:"False",
      };
  
      if (this.state.value !== "") {
        this.setState({ todos: this.state.todos.concat(obj) });
        this.setState({ value: "" });
      }
    }
    else alert("Task already Exits")
  }

  onDeleteTask = (itemId) => {
    this.setState({
      todos: [...this.state.todos].filter((id) => id.id !== itemId),
    });
  };

  onEditTodo = (id, newValue) => {
    this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.name = newValue;
      }
    });
  };

  onSubmitEditTodo = (e) => {
    e.preventDefault();

    this.onEditTodo(this.state.currentid, this.state.currentValue);
    this.setState({ editing: false });
  };
    TodoEdit = (todo) => {
    this.setState({ editing: true });
    this.setState({ currentid: todo.id });
    this.setState({ currentValue: todo.name });
  };

  onEditInputChange = (e) => {
    this.setState({ currentValue: e.target.value });
  };

 
  
  handleCheckbox = (todo) =>
  {  
    if(todo.isDone==="False")
    {      
      todo.isDone = "Done"      
    }
    else todo.isDone="False"  

    this.setState(({ todos }) => ({
      todos: todos.filter(todo => !todo.selected)
    }));
  }

  onDeleteDone = () => {
    this.setState({
      todos: [...this.state.todos].filter((isDone) => isDone.isDone !== "Done"),
    });
  };
  onDeleteAll = () => {
    this.setState({
      todos: [...this.state.todos].filter((id) => id.id === id
    ),
    });
  };

    

    moveUp = (todo) => {  
      let todoList = this.state.todos;
      const fromIndex = todoList.indexOf(todo);
      if (fromIndex===0)
      {
        this.setState({todos:todoList}) 
      }
      else {
      const toIndex = fromIndex-1;
      const temp = todoList.splice(fromIndex, 1)[0];
      todoList.splice(toIndex, 0, temp)      
      this.setState({todos:todoList})      
      }
    }
    moveDown = (todo) => {  
      let todoList = this.state.todos;
      const fromIndex = todoList.indexOf(todo);
      if (fromIndex===todoList.length-1)
      {
        this.setState({todos:todoList}) 
      }
      else {
      const toIndex = fromIndex+1;
      const temp = todoList.splice(fromIndex, 1)[0];
      todoList.splice(toIndex, 0, temp)      
      this.setState({todos:todoList})      
      }
    }
 
 
  

  render() {
    
    const mylist = this.state.todos.map((todo) => (
      <li  key={todo.id} className="todo_item">
        Task : {todo.name} isDone :  {todo.isDone} <br/>
        Mark As Complete : <input type ="checkbox" className="checkBox" onChange={()=>this.handleCheckbox(todo)}/>

       <br/>
       <button className="button" id="btnUp" onClick={() => this.moveUp(todo)}>Move Up</button>
       <button className="button button2" id="btnDown" onClick={() => this.moveDown(todo)}>Move Down</button>
        <button className="button buttonEdit" onClick={() => this.TodoEdit(todo)}>Edit</button>        
        <button className="button buttonRemove"  onClick={() => this.onDeleteTask(todo.id)}>Remove</button>
      </li>
    ));


    return (
      <>
        <div className="Todo">
        <button className="button buttonRemove" onClick={() => this.onDeleteAll()}>Delete All</button>
        <button className="button buttonRemove" onClick={() => this.onDeleteDone()}>Delete Done</button>

          {this.state.editing === false ? (
            <form onSubmit={this.onAddTask}>
              <input
                placeholder="add your task"
                value={this.state.value}
                onChange={this.onChange}
              />
              <button onClick={this.onAddTask}              
              disabled={!this.state.value}>Add Item</button>
            </form>
          ) : (
            <form onSubmit={this.onSubmitEditTodo}>
              <input
                placeholder="edit your task"
                value={this.state.currentValue}
                name={this.state.currentValue}
                onChange={this.onEditInputChange}
              />
              <button onClick={this.onSubmitEditTodo}>Update Item</button>
            </form>
          )}

          <ul className="todo_wrapper">{mylist}</ul>
        </div>
      </>
    );
  }
}
  
export default Todo
  