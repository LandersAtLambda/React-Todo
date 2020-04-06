import React from "react";
import moment from "moment";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./App.css";
import AppBar from "./components/AppBar";

const taskList = [];

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todoList: taskList,
			todoItem: "",
			id: "",
			date: "",
			completed: "",
		};
	}

	handleChanges = (e) => {
		this.setState({ [e.target.name]: e.target.value }, this.updateLocalStorage);
	};

	handleCheckbox = (index) => {
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
			this.updateLocalStorage
		);
	};

	handleClear = () => {
		this.setState(
			{
				todoList: this.state.todoList.filter((todo) => {
					if (todo.completed === false) {
						return todo;
					} else {
						return null;
					}
				}),
			},
			this.updateLocalStorage
		);
	};

	addNewTodo = (e) => {
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
				this.updateLocalStorage
			);
		}
	};

	updateLocalStorage = () => {
		localStorage.setItem("list", JSON.stringify(this.state.todoList));
	};

	loadStorage = () => {
		let value = localStorage.getItem("list");
		value = JSON.parse(value) || [];
		this.setState({ todoList: value });
	};

	componentDidMount = () => {
		this.loadStorage();
	};

	render() {
		return (
			<React.Fragment>
				<AppBar />
				<h1>Todo App</h1>
				<div className="todoApp">
					<TodoForm
						handleChanges={this.handleChanges}
						handleClear={this.handleClear}
						addNewTodo={this.addNewTodo}
						todoItem={this.state.todoItem}
						date={this.state.date}
						handleSearch={this.handleSearch}
					/>
					<TodoList todoList={this.state.todoList} handleCheckbox={this.handleCheckbox} />
				</div>
			</React.Fragment>
		);
	}
}

export default App;
