import { TodoEditView } from '@/sections/todo'

interface TaskEditPageProps {
  params: {
    id: string
  }
}

export default async function TaskEditPage ({ params }: TaskEditPageProps) {
  const { id } = await params

  return (
    <TodoEditView taskId={id} />
  )
}