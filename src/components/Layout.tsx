import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LaptopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const BasicLayout = () => {
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
      >
        <div className="logo" />
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item icon={<ContainerOutlined />} key="1">
            Dashboard
          </Menu.Item>

          <SubMenu key="sub1" icon={<LaptopOutlined />} title="Dispositivi">
            <Menu.Item key="2">Tutti i dispositivi</Menu.Item>
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
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
