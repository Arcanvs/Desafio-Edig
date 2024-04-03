import { Todo, TodoFormData } from '../domain/Todo';

export interface TodoRepository {
    create(todo: TodoFormData): Promise<Todo>;
    update(todo: Todo): Promise<Todo>;
    remove(id: number): Promise<void>;
    listAll(): Promise<Todo[]>;
}