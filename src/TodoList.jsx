import React from 'react';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="pt-6 space-y-2">
      {todos.map(todo => (
        <li key={todo.id} className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="h-5 w-5 text-cyan-500"
          />
          <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="px-2 py-1 text-red-500 hover:text-red-600 focus:outline-none"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
