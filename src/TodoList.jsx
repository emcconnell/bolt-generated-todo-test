import React from 'react';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <span className={`flex-grow ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
