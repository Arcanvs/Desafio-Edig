import React from 'react';
import { Tooltip, Typography, List, Button, Popconfirm, Switch } from 'antd';
import { ExclamationCircleOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Todo } from '../todos/domain';

interface ITodoItemProps {
    todo: Todo;
    onTodoToggle: (todo: Todo) => void;
    onTodoRemoval: (todo: Todo) => void;
    onTodoUpdate: (todo: Todo) => void;
}

const { Text } = Typography;

const TodoItem: React.FC<ITodoItemProps> = ({todo, onTodoRemoval, onTodoToggle, onTodoUpdate}) => {
  return (
    <List.Item
        actions={[
            <Switch
                onChange={() => onTodoToggle(todo)}
                unCheckedChildren="completar"
                checkedChildren="pendiente"
                defaultChecked={todo.completed}
            />,
            <Popconfirm
                title="Atención"
                description="¿Estás seguro de editar esta tarea?"
                cancelText="Cancelar"
                okText="Editar"
                icon={<ExclamationCircleOutlined style={{ color: 'green' }} />}
                onConfirm={() => {
                    onTodoUpdate(todo);
                }}
            >
                <Tooltip title="Editar tarea">
                    <Button type="primary" shape="circle" icon={<EditOutlined />} />
                </Tooltip>
            </Popconfirm>,
            <Popconfirm
                title="Cuidado"
                description="¿Estás seguro de eliminar esta tarea?"
                cancelText="Cancelar"
                okText="Eliminar"
                icon={<ExclamationCircleOutlined style={{ color: 'red' }} />}
                onConfirm={() => {
                    onTodoRemoval(todo);
                }}
            >
                <Tooltip title="Eliminar tarea">
                    <Button type="primary" shape="circle" danger icon={<DeleteOutlined />} />
                </Tooltip>
            </Popconfirm>,
        ]}
        key={todo.id}
    >
        <div>
            <Text>{ todo.completed ? '👌' : '👋' } {todo.name}</Text>
        </div>
    </List.Item>
  )
}

export default TodoItem