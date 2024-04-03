import { Todo, TodoFormData, TodoRepository } from "../domain";

export function createApiTodoRepository(): TodoRepository {
    return {
        save: saveTodo,
        update: updateTodo,
        delete: deleteTodo,
        listAll: listAllTodos
    }
}

async function saveTodo(){
    // Save todo
}

async function updateTodo(){
    // Update todo
}

async function deleteTodo(){
    // Delete todo
}

async function listAllTodos(){
    // List all todos
}