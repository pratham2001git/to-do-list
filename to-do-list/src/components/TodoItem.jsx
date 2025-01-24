import React, { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function TodoItem({ todo, deleteTodo, editTodo, toggleTodo, animationDelay }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(todo.text)

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, editedText)
    }
    setIsEditing(!isEditing)
  }

  return (
    <li
      className={`flex items-center gap-2 p-3 bg-white dark:bg-gray-700 bg-opacity-50 dark:bg-opacity-50 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg animate-slide-in`}
      style={{ animationDelay: `${animationDelay * 0.1}s` }}
    >
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => toggleTodo(todo.id)}
        id={`todo-${todo.id}`}
        className="border-purple-500 dark:border-purple-400"
      />
      {isEditing ? (
        <Input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="flex-grow bg-white dark:bg-gray-600 bg-opacity-50 dark:bg-opacity-50 text-gray-800 dark:text-white transition-colors duration-300"
        />
      ) : (
        <label
          htmlFor={`todo-${todo.id}`}
          className={`flex-grow ${todo.completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-800 dark:text-white"} transition-colors duration-300`}
        >
          {todo.text}
        </label>
      )}
      <Button
        onClick={handleEdit}
        variant="outline"
        size="sm"
        className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
      >
        {isEditing ? "Save" : "Edit"}
      </Button>
      <Button
        onClick={() => deleteTodo(todo.id)}
        variant="destructive"
        size="sm"
        className="bg-red-500 hover:bg-red-600 transition-colors duration-300"
      >
        Delete
      </Button>
    </li>
  )
}

