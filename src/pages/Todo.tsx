import React, { useEffect, useState } from 'react';
import { Row, Col, Card, notification } from 'antd';
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
        openNotification('Tarea agregada!',`La tarea : ${response.name} - se ha agregado correctamente`);
        fetchTodos();
    };

    const handleRemoveTodo = async (todo: Todo) => {
        await createApiTodoRepository().remove(todo.id);
        openNotification('Tarea eliminada!',`La tarea : ${todo.name} - se ha eliminado correctamente`);
        fetchTodos();
    };

    const handleToggleTodoStatus = async (todo: Todo) => {
        todo.completed = !todo.completed;
        const response = await createApiTodoRepository().update(todo);
        openNotification('Tarea actualizada!',`La tarea : ${response.name} - esta ${response.completed ? 'completada' : 'pendiente'}`);
        fetchTodos();
    };

    const handleToggleTodoUpdate = async (todo: Todo) => {
        setTodo(todo);
    };

    const handleFormSubmitUpdate = async (todo: Todo) => {
        const response = await createApiTodoRepository().update(todo);
        openNotification('Tarea editada!',`La tarea : ${response.name} - se ha editado correctamente`);
        setTodo(null)
        fetchTodos();
    };

    const handleFormSubmitCancel = () => {
        setTodo(null)
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const openNotification = (message : string, description: string) => {
        notification.open({
            message: message,
            description: description,
            duration: 2
        });
    };

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

