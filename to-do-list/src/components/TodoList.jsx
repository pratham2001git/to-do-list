import React from "react"
import TodoItem from "./TodoItem"

export default function TodoList({ todos, deleteTodo, editTodo, toggleTodo }) {
  return (
    <ul className="space-y-2 animate-fade-in">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleTodo={toggleTodo}
          animationDelay={index}
        />
      ))}
    </ul>
  )
}

