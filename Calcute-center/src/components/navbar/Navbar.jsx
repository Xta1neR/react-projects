import React from 'react';
import { FireFilled, HomeOutlined, AppStoreOutlined, AreaChartOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import "./Navbar.css"

const { Header, Sider } = Layout;

function Navbar() {
  return (
    <Layout>
      <Sider className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <FireFilled />
        </div>
      </div>

      <Menu theme='dark'>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
		<Menu.Item key="home" icon={<AppStoreOutlined />}>
          Features
        </Menu.Item>
		<Menu.Item key="home" icon={<AreaChartOutlined />}>
          About Us
        </Menu.Item>
      </Menu>

	  </Sider>
    </Layout>
  );
}

export default Navbar;
