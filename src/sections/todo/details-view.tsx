'use client'

import Link from 'next/link'
import { useLocalStorage } from 'usehooks-ts'
import type { Todo } from '@/types/todo'

interface TodoDetailsViewProps {
  taskId: string
}

export default function TodoDetailsView ({ taskId }: TodoDetailsViewProps) {
  const [tasks] = useLocalStorage<Todo[]>('tasks', [])

  const task = tasks?.find((task) => task.id === taskId)

  if (!task) {
    return <div>Tarea no encontrada</div>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-400">Detalles de la Tarea</h1>

        <div className="bg-gray-700 rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">{task.description}</h2>
          <p className="text-gray-300">Prioridad: {task.priority}</p>
        </div>

        <Link href="/task">
          <button className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition duration-300 shadow-md hover:shadow-lg">
            Volver a la lista
          </button>
        </Link>
      </div>
    </div>
  )
}