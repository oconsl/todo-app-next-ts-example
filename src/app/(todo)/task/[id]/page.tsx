import { TodoDetailsView } from '@/sections/todo'

interface TaskPageProps {
  params: {
    id: string
  }
}

export default async function TaskPage ({ params }: TaskPageProps) {
  const { id } = await params

  return (
    <TodoDetailsView taskId={id} />
  )
}
