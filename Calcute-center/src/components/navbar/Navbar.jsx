import React, { useState } from 'react';
import { FireFilled, BarsOutlined, HomeOutlined, AreaChartOutlined,LeftOutlined, RightOutlined} from '@ant-design/icons';
import { Button, Menu, Layout, theme } from 'antd';
import "./Navbar.css"

const { Header, Sider } = Layout;

function Navbar() {
  const [collapsed, SetCollapsed] = useState(false);
  const {token:{colorBgContainer}} = theme.useToken();

  return (
    <Layout>
      <Sider collapsed={collapsed} className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <FireFilled />
        </div>
      </div>

      <Menu theme='dark'  className = 'menu-bar'>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.SubMenu key = 'subtasks' icon = {<BarsOutlined />} title="Features">
          <Menu.Item key="Scientific-Calculator">Simple Calculator</Menu.Item>
          <Menu.Item key="Currency-Converter">Currency Converter</Menu.Item>
          <Menu.Item key="Body-Calculator">Body Calculator</Menu.Item>
        </Menu.SubMenu>
		<Menu.Item key="About" icon={<AreaChartOutlined />}>
          About Us
        </Menu.Item>
      </Menu>

	  </Sider>
    <Layout>

      <Header style={{padding: 0, background: colorBgContainer}}>
        <Button type="text" className='toggle' onClick={() => SetCollapsed(!collapsed)} icon = {collapsed ? <RightOutlined /> : <LeftOutlined />} />
      </Header>

    </Layout>
    </Layout>
  );
}

export default Navbar;
