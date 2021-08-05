import { Link } from 'react-router-dom';
import { Breadcrumb, Button, Input, Form } from 'antd';

export const RegisterUser = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>Administrator</Breadcrumb.Item>
        <Breadcrumb.Item>Register User</Breadcrumb.Item>
      </Breadcrumb>

      <Form
        name="basic"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelAlign="left"
        style={{ marginTop: 40 }}
      >
        <Form.Item
          label="Display Name"
          name="displayName"
          style={{ display: 'flex', alignItems: 'center' }}
          rules={[{ required: true, message: 'Please input Display Name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="User Principal Name"
          name="principalName"
          rules={[
            { required: true, message: 'Please input User Principal Name!' },
          ]}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mail Nick Name"
          name="nickName"
          rules={[{ required: true, message: 'Please input Mail Nick Name!' }]}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 3, span: 8 }}>
          <Button type="primary" htmlType="submit">
            Create User
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
