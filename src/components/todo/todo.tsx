import Link from 'next/link'
import { Trash2, Edit2, Check } from 'lucide-react'
import type { Todo } from '@/types/todo'

interface TodoProps {
  task: Todo
  onDelete: (id: string) => void
  onToggle: (id: string) => void
}

export default function Todo ({ task, onDelete, onToggle }: TodoProps) {
  return (
    <li className={`p-3 bg-gray-800 rounded-lg flex justify-between items-center shadow-md hover:shadow-lg transition duration-300 
      ${task.done ? 'opacity-75 border border-green-500' : ''}`}>
      <div className="flex items-center gap-3 flex-1">
        <button
          onClick={(e) => {
            e.preventDefault()
            onToggle(task.id)
          }}
          className={`p-2 rounded-full transition-colors
            ${task.done ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-600 hover:bg-gray-700'}`}
        >
          <Check size={16} className="text-white" />
        </button>

        <span className={`text-white flex-1 ${task.done ? 'line-through text-gray-400' : ''}`}>
          {task.description}
        </span>
      </div>

      <div className="flex items-center gap-2 ml-4">
        <span className={`px-2 py-1 rounded-full text-xs font-medium text-white shadow
          ${task.done ? 'bg-green-600' : 'bg-purple-600'}`}>
          Prioridad: {task.priority}
        </span>

        <Link href={`/task/${task.id}/edit`}
          onClick={(e) => e.stopPropagation()}
          className="p-2 hover:bg-gray-700 rounded-full transition-colors">
          <Edit2 size={16} className="text-gray-300 hover:text-white" />
        </Link>

        <button
          onClick={(e) => {
            e.preventDefault()
            onDelete(task.id)
          }}
          className="p-2 hover:bg-gray-700 rounded-full transition-colors"
        >
          <Trash2 size={16} className="text-red-400 hover:text-red-500" />
        </button>
      </div>
    </li>
  )
}