import { useState } from "react";

export default function TodoInput(props) {
    const {handleAddTodos, todoValue, setTodoValue} = props;

    return (
        <header>
            <input value={todoValue} onChange={(evt) => {
                setTodoValue(evt.target.value);
            }} placeholder="Enter todo..." />
            <button onClick={() => {
                handleAddTodos(todoValue);
                setTodoValue('');
            }}>Add</button>
        </header>
    )
}