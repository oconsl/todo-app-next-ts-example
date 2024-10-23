'use client'

import { useLocalStorage } from 'usehooks-ts'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { TodoForm } from '@/components/todo'
import type { Todo, FormTodo } from '@/types/todo'

interface TodoEditViewProps {
  taskId: string
}

export default function TodoEditView ({ taskId }: TodoEditViewProps) {
  const [tasks, setTasks] = useLocalStorage<Todo[]>('tasks', [])
  const router = useRouter()

  const task = tasks?.find((task) => task.id === taskId)

  if (!task) {
    return <div>Tarea no encontrada</div>
  }

  const handleUpdate = (formData: FormTodo) => {
    const updatedTasks = tasks.map(t =>
      t.id === taskId
        ? { ...t, description: formData.description, priority: formData.priority }
        : t
    )
    setTasks(updatedTasks)
    router.push('/task')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-400">Editar Tarea</h1>

        <TodoForm
          onSubmit={handleUpdate}
          initialData={task}
          submitLabel="Guardar Cambios"
        />

        <Link href="/task">
          <button className="w-full mt-4 py-2 px-4 bg-gray-600 hover:bg-gray-700 rounded-lg text-white font-semibold transition duration-300 shadow-md hover:shadow-lg">
            Cancelar
          </button>
        </Link>
      </div>
    </div>
  )
}