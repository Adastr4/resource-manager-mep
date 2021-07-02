import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LaptopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const BasicLayout = ({ children }) => {
  const [collapsed, setcollapsed] = useState(false);

  const toggle = () => {
    return setcollapsed((v) => !v);
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="site-layout-background"
        theme="light"
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          className="menu-container"
        >
          <Menu.Item icon={<ContainerOutlined />} key="1">
            Dashboard
          </Menu.Item>

          <SubMenu key="sub1" icon={<LaptopOutlined />} title="Dispositivi">
            <Menu.Item key="2">
              <Link to="/alldevices">Tutti i dispositivi</Link>
            </Menu.Item>

            <Menu.Item key="3">Sensor Controller</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            },
          )}
        </Header>
        <Content className="site-layout-background c-content">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
