import { Button, Form, Input } from 'antd';
import { Col, Row } from 'antd';
import React from 'react';
import axios from 'axios';

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const App = () => {
  const onFinish = (values) => {
    console.log(values);
    axios.post('http://localhost', values)
  };

  return (
    <Row justify='center'>
        <Col span={10}>
    <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} layout='vertical'>
      <Form.Item name={['user', 'name']} label="Name and Surname" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Your Message">
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" disabled htmlType="submit" style={{fontFamily:'Silkscreen'}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Col>
    </Row>
  );
};

export default App;