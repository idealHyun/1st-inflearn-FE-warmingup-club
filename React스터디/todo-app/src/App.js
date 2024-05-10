import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	return (
		<div className="container">
			<div className="todoBlock">
				<div className="title">
					<h1>할 일 목록</h1>
					<Form newTodo={newTodo} setNewTodo={setNewTodo} setTodos={setTodos}></Form>
					<List todos={todos} setTodos={setTodos} ></List>
				</div>
			</div>
		</div>
	);
}
