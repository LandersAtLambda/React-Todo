import { Component } from "react";
import moment from "moment";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./App.css";
import AppBar from "./components/AppBar";

interface Todo {
  task: string;
  id: number;
  completed: boolean;
  date: string;
}

interface AppState {
  todoList: Todo[];
  todoItem: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todoList: [],
      todoItem: "",
    };
  }

  handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ todoItem: e.target.value }, this.updateLocalStorage);
  };

  handleCheckbox = (index: number) => {
    this.setState(
      {
        todoList: this.state.todoList.map((todo) => {
          if (index !== todo.id) {
            return todo;
          } else {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
        }),
      },
      this.updateLocalStorage,
    );
  };

  handleClear = () => {
    this.setState(
      {
        todoList: this.state.todoList.filter((todo) => !todo.completed),
      },
      this.updateLocalStorage,
    );
  };

  addNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.state.todoItem === "") {
      alert("Please enter a Todo");
    } else {
      this.setState(
        {
          todoList: [
            ...this.state.todoList,
            {
              task: this.state.todoItem,
              id: Date.now(),
              completed: false,
              date: moment().format("MMM Do YYYY"),
            },
          ],
          todoItem: "",
        },
        this.updateLocalStorage,
      );
    }
  };

  updateLocalStorage = () => {
    localStorage.setItem("list", JSON.stringify(this.state.todoList));
  };

  loadStorage = () => {
    const value = localStorage.getItem("list");
    const todoList: Todo[] = value ? JSON.parse(value) : [];
    this.setState({ todoList });
  };

  componentDidMount = () => {
    this.loadStorage();
  };

  render() {
    return (
      <>
        <AppBar />
        <h1>Todo App</h1>
        <div className="todoApp">
          <TodoForm
            handleChanges={this.handleChanges}
            handleClear={this.handleClear}
            addNewTodo={this.addNewTodo}
            todoItem={this.state.todoItem}
          />
          <TodoList
            todoList={this.state.todoList}
            handleCheckbox={this.handleCheckbox}
          />
        </div>
      </>
    );
  }
}

export default App;
