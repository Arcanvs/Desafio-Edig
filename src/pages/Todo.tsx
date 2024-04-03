import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import { TodoForm, TodoList } from '../components';
import { Todo, TodoFormData } from '../todos/domain';
import { createApiTodoRepository } from '../todos/infrastructure/ApiTodoRepository';

const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [todo, setTodo] = useState<Todo | null>();

    const fetchTodos = async () => {
        const response = await createApiTodoRepository().listAll();
        setTodos(response); 
    };
    
    const handleFormSubmit = async (todo: TodoFormData) => {
        const response = await createApiTodoRepository().create(todo);
        console.log("RESPONSE ",response);
        //message.success('Todo agregado!');
        fetchTodos();
    };

    const handleRemoveTodo = async (todo: Todo) => {
        const response = await createApiTodoRepository().remove(todo.id);
        console.log("RESPONSE ",response);
        fetchTodos();
        //message.warn('Todo eliminado!');
    };

    const handleToggleTodoStatus = async (todo: Todo) => {
        todo.completed = !todo.completed;
        const response = await createApiTodoRepository().update(todo);
        console.log("RESPONSE ",response);
        fetchTodos();
        //message.info('Todo actualizado!');
    };

    const handleToggleTodoUpdate = async (todo: Todo) => {
        console.log("TOGGLE TODO UPDATE ",todo);
        setTodo(todo);
    };

    const handleFormSubmitUpdate = async (todo: Todo) => {
        const response = await createApiTodoRepository().update(todo);
        console.log("RESPONSE EDIT",response);
        //message.success('Todo editado!');
        setTodo(null)
        fetchTodos();
    };

    const handleFormSubmitCancel = () => {
        setTodo(null)
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <Row
            className="container"
            align="middle"
            justify="center"
            gutter={[0, 24]}
        >
            <Col span={20}></Col>

            <Col span={20} >
                <Card title="Agregar una nueva tarea">
                    <TodoForm onFormSubmit={handleFormSubmit} onFormSubmitUpdate={handleFormSubmitUpdate} onFormSubmitCancel={handleFormSubmitCancel} todoUpdate={todo} />
                </Card>
            </Col>

            <Col span={20} >
                <Card title="Lista de tareas">
                    <TodoList todos={todos} fetchTodos={fetchTodos} onTodoRemoval={handleRemoveTodo} onTodoToggle={handleToggleTodoStatus} onTodoUpdate={handleToggleTodoUpdate} />
                </Card>
            </Col>
        </Row>
    )
}

export default TodoPage 

