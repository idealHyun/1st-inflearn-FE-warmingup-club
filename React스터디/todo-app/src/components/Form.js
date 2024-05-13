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
    <form className='flex'>
						<input
							type="text"
							placeholder="할 일을 입력해주세요"
              className='w-full p-2 mr-2 text-gray-500 shadow border rounded'
							value={newTodo}
							onChange={(e) => inputChange(e)}
						/>
						<input type='submit' value="입력" className='p-2 border rounded text-blue-400 hover:bg-blue-400 hover:text-white cursor-pointer' onClick={(e) => handleClick(e)}/>
					</form>
  )
}
