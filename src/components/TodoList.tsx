import React from 'react';
import { List } from 'antd';
import TodoItem from './TodoItem';

interface ITodoItem {
    id: number;
    name: string;
    completed: boolean;
}

interface ITodoListProps {
    todos: ITodoItem[];
    onTodoToggle: (todo: ITodoItem) => void;
    onTodoRemoval: (todo: ITodoItem) => void;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, onTodoToggle, onTodoRemoval}) => {
    const todos2 = [{ id: 1, name: 'Terminar el desafío', completed: true}];
    return (
        <List
            locale={{ emptyText: 'Sin Tareas' }}
            dataSource={todos2}
            renderItem={(todo) => (
                <TodoItem
                    todo={todo}
                    onTodoToggle={onTodoToggle}
                    onTodoRemoval={onTodoRemoval}
                />
            )}
            pagination={{
                pageSize: 10,
                position: 'bottom',
            }}
        />
    )
}

export default TodoList