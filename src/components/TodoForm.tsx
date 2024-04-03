import React from 'react';
import { Form, Row, Col, Button, Input } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

const TodoForm: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = () => {
        console.log(form.getFieldsValue().actividad);
        form.resetFields();
    };

    return (
        <Form
            form={form}
            onFinish={onFinish}
            layout="horizontal"
            className="todo-form"
        >
            <Row gutter={20}>
                <Col xs={24} sm={24} md={16} lg={18} xl={20}>
                    <Form.Item
                        name={'actividad'}
                        rules={[{ required: true, message: 'Debes agregar una tarea' }]}
                    >
                        <Input placeholder="Terminar el desafío" />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8} lg={6} xl={4}>
                    <Button type="primary" htmlType="submit" block>
                        <PlusCircleFilled />
                        Tarea
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default TodoForm