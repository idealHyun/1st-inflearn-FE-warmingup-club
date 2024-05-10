import React, { useState } from "react";
import "./App.css";

export default function App() {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	const btnStyle = {
		color: "#fff",
		border: "none",
		padding: "5px 9px",
		borderRadius: "50%",
		cursor: "pointer",
		float: "right",
	};

	const getStyle = (data) => {
		return {
			padding: "10px",
			borderBottom: "1px #ccc dotted",
			textDecoration:  data.complete? "line-through" :"none",
		};
	};

	// 추가 버튼 클릭
	const handleClick = (e) => {
		e.preventDefault();

		const data = {
			id: Date.now(),
			title: newTodo,
			complete: false,
		};

		setTodos((prev) => [...prev, data]);
		setNewTodo("");
	};

	const handleCheckBoxChange = (id) => {
		const updateTodos=todos.map((data)=>{
			if(data.id===id){
				data.complete= !data.complete;
				console.log(data.id,data.complete);
				
			}
			return data;
		});
		setTodos(updateTodos);
	};

	const deleteTodo = (id) => {
		const updatedTodos = todos.filter((data) => data.id !== id);
		setTodos(updatedTodos);
	};

	const inputChange = (e) => {
		setNewTodo(e.target.value);
	};

	return (
		<div className="container">
			<div className="todoBlock">
				<div className="title">
					<h1>할 일 목록</h1>
					<form>
						<input
							type="text"
							placeholder="할 일을 입력해주세요"
							value={newTodo}
							onChange={(e) => inputChange(e)}
						/>
						<button onClick={(e) => handleClick(e)}>추가</button>
					</form>
					{todos.map((data) => {
						return (
							<div style={getStyle(data)} key={data.id}>
								<input
									type="checkbox"
									defaultChecked={data.complete}
									onChange={() =>
										handleCheckBoxChange(data.id)
									}
								/>
								{data.title}
								<button
									style={btnStyle}
									onClick={() => deleteTodo(data.id)}
								>
									x
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
