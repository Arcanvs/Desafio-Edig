import React from 'react';
import { Form, Row, Col, Button, Input } from 'antd';
import { PlusCircleFilled, EditOutlined, StopOutlined } from '@ant-design/icons';
import { TodoFormData, Todo } from '../todos/domain';

interface ITodoFormProps {
    onFormSubmit: (todo: TodoFormData) => void;
    onFormSubmitUpdate: (todo: Todo) => void;
    onFormSubmitCancel: () => void;
    todoUpdate?: Todo | null;
}

const TodoForm: React.FC<ITodoFormProps> = ({ onFormSubmit, onFormSubmitUpdate, onFormSubmitCancel, todoUpdate }) => {
    const [form] = Form.useForm();

    const onFinish = () => {
        if(todoUpdate){
            onFormSubmitUpdate({
                id: todoUpdate.id,
                name: form.getFieldsValue().name,
                completed: todoUpdate.completed
            });
            todoUpdate = null;
        }else{
            onFormSubmit({
                name: form.getFieldsValue().name,
                completed: false
            });
        }
        form.resetFields();
    };

    const onCancelUpdate = () => {
        onFormSubmitCancel();
    }
    
    if (todoUpdate) {
        form.setFieldsValue({ name: todoUpdate.name });
    }else{
        form.resetFields();
    }

    return (
        <Form
            form={form}
            onFinish={onFinish}
            layout="horizontal"
            className="todo-form"
        >
            <Row gutter={20}>
                <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                    <Form.Item
                        name={'name'}
                        rules={[{ required: true, message: 'Debes agregar una tarea' }]}
                    >
                        <Input placeholder={ todoUpdate ? 'Editar tarea' : 'Agregar tarea' } />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={todoUpdate ? 4 : 8} lg={todoUpdate ? 4 : 8} xl={todoUpdate ? 4 : 8}>
                    <Button type="primary" htmlType="submit" block>
                        { todoUpdate ? <EditOutlined /> : <PlusCircleFilled /> }
                        Tarea
                    </Button>
                </Col>
                { todoUpdate && (
                    <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                        <Button type="primary" onClick={onCancelUpdate} block danger>
                            <StopOutlined />
                            Cancelar
                        </Button>
                    </Col>  
                )}
            </Row>
        </Form>
    )
}

export default TodoForm