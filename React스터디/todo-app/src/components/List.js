import React from 'react'

export default function List({todos,setTodos}) {
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

	const deleteTodo = (id) => {
		const updatedTodos = todos.filter((data) => data.id !== id);
		setTodos(updatedTodos);
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

  return (
    <div>
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
  )
}
