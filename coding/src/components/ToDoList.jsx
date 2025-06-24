import { useState } from "react";


const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, newTodo]);
            setNewTodo("");
        }
    };

    const removeTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    }

    const markAsDone = (index) => {
        const updatedTodos = todos.map((todo, i) => 
            i === index ? `${todo} (Done)` : todo
        );
        setTodos(updatedTodos);
    }

   


    return(
        <div>
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add a new task" />
            <button onClick={addTodo}>Add Task</button>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} >{todo}
                    <button onClick={() => removeTodo(index)}>Remove</button>
                    <button onClick={() => markAsDone(index)}>Done</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList

