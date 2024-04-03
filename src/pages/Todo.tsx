import React from 'react';
import { Row, Col, Card } from 'antd';
import { TodoForm, TodoList } from '../components';

const Todo: React.FC = () => {
    return (
        <Row
            className="container"
            align="middle"
            justify="center"
            gutter={[0, 24]}
        >
            <Col span={20}>
                Lista de tareas
            </Col>

            <Col span={20} >
                <Card title="Agregar una nueva tarea">
                    <TodoForm />
                </Card>
            </Col>

            <Col span={20} >
                <Card title="Lista de tareas">
                    <TodoList />
                </Card>
            </Col>
        </Row>
    )
}

export default Todo 

