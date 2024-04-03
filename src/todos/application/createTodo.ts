import { Todo, TodoFormData, TodoRepository } from '../domain';

export async function createTodo( todoRepository: TodoRepository, todo: TodoFormData ): Promise<Todo> {
    return todoRepository.create(todo);
}