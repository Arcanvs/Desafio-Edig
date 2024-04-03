import { TodoRepository } from "../domain";

export async function deleteTodo( todoRepository: TodoRepository, id: number ): Promise<void> {
    return todoRepository.remove(id);
}