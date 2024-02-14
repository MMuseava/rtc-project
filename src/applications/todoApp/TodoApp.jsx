import React, { useState } from "react";

import "./todoApp.style.css";

const TodoApp = () => {
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState([]);

	const onChangeHandler = (e) => {
		setTodo(e.target.value);
	};

	const addTodo = () => {
		if (todo !== "") {
			setTodoList([...todoList, { text: todo, completed: false }]);
			setTodo("");
		}
	};

	const toggleTodo = (index) => {
		const newTodoList = [...todoList];
		newTodoList[index].completed = !newTodoList[index].completed;
		setTodoList(newTodoList);
	};

	const deleteTodo = (index) => {
		const newTodoList = [...todoList];
		newTodoList.splice(index, 1);
		setTodoList(newTodoList);
	};

	return (
		<div className="todo-container">
			<h1> Todo App </h1>
			<div className="input-box">
				<input
					type="text"
					value={todo}
					onChange={onChangeHandler}
					placeholder="Add Todo"
				/>
				<button onClick={addTodo}>Add</button>
			</div>
			<ul>
				{todoList.map((item, index) => (
					<li key={index}>
						<label>
							<input
								type="checkbox"
								checked={item.completed}
								onChange={() => toggleTodo(index)}
							/>
							<span
								style={{
									textDecoration: item.completed ? "line-through" : "none",
									color: "red",
								}}
							>
								{item.text}
							</span>
						</label>
						<button className="delete-btn" onClick={() => deleteTodo(index)}>
							X
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
export default TodoApp;
