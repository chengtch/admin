import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import { MoneyCollectOutlined, HomeOutlined } from '@ant-design/icons';
import HomePage from "./web_page/homepage";

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

function App() {
  return (
    <div className="App" title="test">
      <Layout>
        <Header>
          <div className="admin-title">
            <font color="white">
              Finance Management Platform
            </font>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<HomeOutlined />} title="Homepage">
                <Menu.Item key="1">HomePage</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<MoneyCollectOutlined />} title="Finance">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <br />
            <HomePage />
          </Layout>
        </Layout>
      </Layout>,
    </div>
  );
}

export default App;
