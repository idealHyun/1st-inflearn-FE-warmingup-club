import React from 'react'

export default function Form({newTodo,setNewTodo,setTodos}) {
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

const inputChange = (e) => {
    setNewTodo(e.target.value);
};

  return (
    <form>
						<input
							type="text"
							placeholder="할 일을 입력해주세요"
							value={newTodo}
							onChange={(e) => inputChange(e)}
						/>
						<button onClick={(e) => handleClick(e)}>추가</button>
					</form>
  )
}
