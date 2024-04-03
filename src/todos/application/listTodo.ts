import { Todo, TodoRepository } from "../domain";

export async function listTodo (todoRepository: TodoRepository): Promise<Todo[]> {
    return todoRepository.listAll();
}