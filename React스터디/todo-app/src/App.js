import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	return (
		<div className="flex items-center justify-center w-screen h-screen bg-blue-100">
			<div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4">
				<div className="flex justify-between mb-3">
					<h1>할 일 목록</h1>
				</div>
				<Form
						newTodo={newTodo}
						setNewTodo={setNewTodo}
						setTodos={setTodos}
					></Form>
					<List todos={todos} setTodos={setTodos}></List>
			</div>
		</div>
	);
}
