import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function List({ todos, setTodos }) {
    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((data) => data.id !== id);
        setTodos(updatedTodos);
    };

    const handleCheckBoxChange = (id) => {
        const updateTodos = todos.map((data) => {
            if (data.id === id) {
                data.complete = !data.complete;
                console.log(data.id, data.complete);
            }
            return data;
        });
        setTodos(updateTodos);
    };

    return (
        <div>
            <DragDropContext>
                <Droppable droppableId="todo">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {todos.map((data, index) => (
                                <Draggable
                                    key={data.id}
                                    droppableId={data.id.toString()}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <div
										key={data.id}
                                            className="flex items-center p-2 my-2 justify-between border rounded bg-gray-100"
                                            {...provided.draggableProps}
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                        >
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    defaultChecked={data.complete}
                                                    onChange={() => handleCheckBoxChange(data.id)}
                                                />
                                                <span
                                                    className={`${data.complete ? "line-through " : ""}ml-2`}
                                                >
                                                    {data.title}
                                                </span>
                                            </div>
                                            <div>
                                                <button
                                                    className="p-1 float-right"
                                                    onClick={() => deleteTodo(data.id)}
                                                >
                                                    x
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}
