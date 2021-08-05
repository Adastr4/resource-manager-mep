import React, { useState } from 'react';
import { Breadcrumb, Button, Input, Form } from 'antd';
import { registerDevice } from '../../services/administrator';

type registerDeviceType = {
  deviceId: string;
  status: string;
  lastActivityTime: string;
  connectionState: string;
};

export const RegisterDevice = () => {
  const [loading, setLoading] = useState(false);

  const registerDevicePromise = (
    deviceID: string,
  ): Promise<registerDeviceType> => {
    return new Promise((resolve, reject) => {
      registerDevice(deviceID, resolve, reject);
    });
  };

  const onFinish = async (values: { deviceID: string }) => {
    setLoading(true);
    const registeredDevice: any = await registerDevicePromise(values.deviceID);
    console.log(registeredDevice);
    setLoading(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>Administrator</Breadcrumb.Item>
        <Breadcrumb.Item>Register Device</Breadcrumb.Item>
      </Breadcrumb>

      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelAlign="left"
        layout="inline"
        style={{ marginTop: 40, display: 'flex', alignItems: 'flex-start' }}
      >
        <Form.Item
          name="deviceID"
          rules={[{ required: true, message: 'Please enter the Device ID!' }]}
        >
          <Input placeholder="Device ID" style={{ width: '300px' }} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ height: '50px' }}>
            Register Device
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
