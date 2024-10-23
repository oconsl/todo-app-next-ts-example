'use client'

import { useState, useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { Todo as TodoComponent, TodoForm } from '@/components/todo'
import type { Todo, FormTodo } from '@/types/todo'

export default function TodoListView () {
  const [storedTasks, setStoredTasks] = useLocalStorage<Todo[]>('tasks', [])
  const [tasks, setTasks] = useState<Todo[]>([])

  const addTask = (newTask: FormTodo) => {
    const newTaskId = Date.now().toString()
    const newTodo: Todo = {
      id: newTaskId,
      ...newTask,
      done: false,
    }

    setTasks([...tasks, newTodo])
    setStoredTasks([...storedTasks, newTodo])
  }

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
    setStoredTasks(updatedTasks)
  }

  const toggleTask = (taskId: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, done: !task.done } : task
    )
    setTasks(updatedTasks)
    setStoredTasks(updatedTasks)
  }

  useEffect(() => {
    setTasks(storedTasks)
  }, [storedTasks])

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-400">Lista de Tareas</h1>

        <TodoForm onSubmit={addTask} />

        <ul className="space-y-2">
          {tasks.map((task) => (
            <TodoComponent
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleTask}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}