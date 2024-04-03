import { Todo, TodoFormData, TodoRepository } from "../domain";

export function createApiTodoRepository(): TodoRepository {
    return {
        create: saveTodo,
        update: updateTodo,
        remove: deleteTodo,
        listAll: listAllTodos
    }
}

async function saveTodo(todo: TodoFormData){
    // Save todo
    const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: todo.name,
            completed: todo.completed
        })
    });

    const saveTodo = await response.json() as Todo;
    return saveTodo;
}

async function updateTodo(todo: Todo){
    // Update todo
    const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: todo.name,
            completed: todo.completed
        })
    });
    const updatedTodo = await response.json() as Todo;
    return updatedTodo;
}

async function deleteTodo(id: number){
    // Delete todo
    await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE'
    });
}

async function listAllTodos(){
    // List all todos
    const response = await fetch('http://localhost:3000/todos').then(res => res.json() as Promise<Todo[]>);
    return response;
}