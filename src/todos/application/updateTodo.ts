import { TodoRepository, Todo } from "../domain";

export async function updateTodo( todoRepository: TodoRepository, todo: Todo ): Promise<Todo> {
    return todoRepository.update(todo);
}