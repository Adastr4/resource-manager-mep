import React from 'react';
import { Menu } from 'antd';

export const DeviceMenu = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item>About</Menu.Item>
      <Menu.Item>Manage Devices</Menu.Item>
      <Menu.Item>Overview</Menu.Item>
      <Menu.Item>Comandi</Menu.Item>
      <Menu.Item>Dati non elaborati</Menu.Item>
    </Menu>
  );
};
