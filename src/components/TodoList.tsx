import React, { useEffect } from 'react';
import { List } from 'antd';
import TodoItem from './TodoItem';
import { Todo } from '../todos/domain';



interface ITodoListProps {
    todos: Todo[];
    fetchTodos: () => void;
    onTodoToggle: (todo: Todo) => void;
    onTodoRemoval: (todo: Todo) => void;
    onTodoUpdate: (todo: Todo) => void;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, fetchTodos, onTodoToggle, onTodoRemoval, onTodoUpdate}) => {
    useEffect(() => {}, [todos, fetchTodos]);
    return (
        <List
            locale={{ emptyText: 'Sin Tareas' }}
            dataSource={todos}
            renderItem={(todo) => (
                <TodoItem
                    todo={todo}
                    onTodoToggle={onTodoToggle}
                    onTodoRemoval={onTodoRemoval}
                    onTodoUpdate={onTodoUpdate}
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