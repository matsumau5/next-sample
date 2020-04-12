import React, { useState, useCallback } from 'react'
import AddTodo from '../../components/organisms/TodoList/AddTodo'
import TodoItems from '../../components/organisms/TodoList'
import Header from '../../components/organisms/header/Header'

type Todo = { id: string; title: string }

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleDelete = useCallback(
    (id: string) => {
      setTodos(todos.filter((todo) => todo.id !== id))
    },
    [todos]
  )
  const handleAdd = useCallback(
    ({ title }: { title: string }) => {
      const id = Date.now().toString() // TODO: uuid
      setTodos([...todos, { id, title }])
    },
    [todos]
  )

  return (
    <div>
      <Header />
      <h2>Todo ({todos.length})</h2>
      <AddTodo onAdd={handleAdd} />
      <TodoItems todos={todos} onDelete={handleDelete} />
    </div>
  )
}

export default Home
