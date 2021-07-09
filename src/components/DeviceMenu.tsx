import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

type Props = {
  deviceID: string;
};

export const DeviceMenu = ({ deviceID }: Props) => {
  return (
    <Menu mode="horizontal" className="device_menu">
      <Menu.Item key="1">
        {' '}
        <Link to={'/device/' + deviceID + '/'}>About</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={'/device/' + deviceID + '/manage'}>Manage Devices</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={'/device/' + deviceID + '/overview'}>Overview</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to={'/device/' + deviceID + '/comandi'}>Comandi</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to={'/device/' + deviceID + '/rawdata'}>Dati non elaborati</Link>
      </Menu.Item>
    </Menu>
  );
};
