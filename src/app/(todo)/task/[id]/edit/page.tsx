import { TodoEditView } from '@/sections/todo'

interface TaskEditPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function TaskEditPage ({ params }: TaskEditPageProps) {
  const { id } = await params

  return (
    <TodoEditView taskId={id} />
  )
}