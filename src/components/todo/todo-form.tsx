"use client"

import { useState, useEffect } from 'react'
import type { FormTodo, Todo } from '@/types/todo'

interface TodoFormProps {
  onSubmit: ({ description, priority }: FormTodo) => void
  initialData?: Todo
  submitLabel?: string
}

export default function TodoForm ({ onSubmit, initialData, submitLabel = "Agregar Tarea" }: TodoFormProps) {
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(1)

  useEffect(() => {
    if (initialData) {
      setDescription(initialData.description)
      setPriority(initialData.priority)
    }
  }, [initialData])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (description.trim()) {
      onSubmit({ description, priority })
      if (!initialData) {
        setDescription('')
        setPriority(1)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-gray-800 p-4 rounded-xl shadow-lg">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Nueva tarea..."
        className="w-full p-2 mb-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
      />

      <div className="flex items-center mb-3">
        <span className="mr-3 text-sm text-gray-300">Prioridad:</span>
        <input
          type="range"
          min="1"
          max="5"
          value={priority}
          onChange={(e) => setPriority(Number(e.target.value))}
          className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
        />
        <span className="ml-3 text-sm text-gray-300">{priority}</span>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition duration-300 shadow-md hover:shadow-lg"
      >
        {submitLabel}
      </button>
    </form>
  )
}