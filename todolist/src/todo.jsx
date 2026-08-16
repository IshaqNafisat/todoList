import React, { useState } from 'react';
import './todo.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [entry, setEntry] = useState('');

    const addEntry = (e) => { e.preventDefault();
        if (!entry.trim()) 
        return;

        const newTodo = {
            id: Date.now(),
            text: entry,
        };

        setTodos([...todos, newTodo]);
        setEntry('');
    };

    const deleteEntry = (idToDel) => {
        setTodos(todos.filter((todo) => todo.id !== idToDel));
    };

    return (
        <div className="todo-body">
            <h2>To-Do List</h2>

            <form className="todo-form" onSubmit={addEntry}>
                <input
                    type="text"
                    className="todo-input"
                    placeholder="Enter a schedule..."
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}/>
                <button type="submit" className="add-btn">
                    Add Todo
                </button>
            </form>

            <ul className="todo-list">
                {todos.length === 0 ? (<p className="empty-message">No tasks added yet.</p> ) : 
                ( todos.map((todo) => (
                        <li key={todo.id} className="todo-item">
                            <span>{todo.text}</span>
                            <button
                                className="delete-btn"
                                onClick={() => deleteEntry(todo.id)}>
                                Delete
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default TodoList;