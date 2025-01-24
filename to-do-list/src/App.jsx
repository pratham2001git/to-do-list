import React, { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList"
import ThemeToggle from "./components/ThemeToggle"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos")
    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  })

  const [theme, setTheme] = useState("light")

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = (id, newText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const clearAllTodos = () => {
    setTodos([])
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-900 dark:to-black animate-gradient-x transition-colors duration-500">
      <div className="container mx-auto p-4 max-w-md">
        <div className="bg-white dark:bg-gray-800 bg-opacity-20 dark:bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 animate-fade-in transition-colors duration-500">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-white dark:text-gray-200 animate-bounce">Todo App</h1>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
          <AddTodoForm addTodo={addTodo} />
          <Tabs defaultValue="all" className="mt-6">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="all" className="text-white dark:text-gray-200">
                All
              </TabsTrigger>
              <TabsTrigger value="active" className="text-white dark:text-gray-200">
                Active
              </TabsTrigger>
              <TabsTrigger value="completed" className="text-white dark:text-gray-200">
                Completed
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} toggleTodo={toggleTodo} />
            </TabsContent>
            <TabsContent value="active">
              <TodoList
                todos={todos.filter((todo) => !todo.completed)}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                toggleTodo={toggleTodo}
              />
            </TabsContent>
            <TabsContent value="completed">
              <TodoList
                todos={todos.filter((todo) => todo.completed)}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                toggleTodo={toggleTodo}
              />
            </TabsContent>
          </Tabs>
          <Button
            onClick={clearAllTodos}
            className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white transition-colors duration-300"
          >
            Clear All
          </Button>
        </div>
      </div>
    </div>
  )
}

