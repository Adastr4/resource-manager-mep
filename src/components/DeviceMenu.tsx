import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

type Props = {
  deviceID: string;
};

export const DeviceMenu = ({ deviceID }: Props) => {
  return (
    <Menu mode="horizontal" className="device_menu">
      <Menu.Item>
        {' '}
        <Link to={'/device/' + deviceID + '/'}>About</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={'/device/' + deviceID + '/manage'}>Manage Devices</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={'/device/' + deviceID + '/overview'}>Overview</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={'/device/' + deviceID + '/comandi'}>Comandi</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={'/device/' + deviceID + '/rawdata'}>Dati non elaborati</Link>
      </Menu.Item>
    </Menu>
  );
};
