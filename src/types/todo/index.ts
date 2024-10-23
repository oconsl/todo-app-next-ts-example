export interface Todo {
  id: string;
  description: string;
  priority: number;
  done: boolean;
}

export type FormTodo = Pick<Todo, 'description' | 'priority'>;
