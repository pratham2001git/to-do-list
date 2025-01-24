import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AddTodoForm({ addTodo }) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addTodo(text)
    setText("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 animate-slide-in">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        className="flex-grow bg-white dark:bg-gray-700 bg-opacity-50 dark:bg-opacity-50 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
      />
      <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
        Add
      </Button>
    </form>
  )
}

