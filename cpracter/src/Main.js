import React, {Component} from 'react';
import { Affix, Layout, Menu, Breadcrumb, Button, Icon} from 'antd';

import Feed from './Feed';

const {Header, Content, Footer} = Layout;
const SubMenu = Menu.SubMenu;

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      collapsed: false
    };
  }

  toggleCollapse() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className="main-wrapper">
      <Layout className="layout">
        {(this.state.collapsed) ?
          (
            <Affix className="top-button">
              <Button type="primary">Affix top</Button>
            </Affix>
        ) : (<div></div>)

        }

        <Header>
          <div className="logo"/>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{
              lineHeight: '64px'
            }}>
            <Menu.Item>
              <Button type="primary" onClick={this.toggleCollapse.bind(this)} style={{
                  marginBottom: 16
                }}>
                <Icon type={this.state.collapsed
                    ? 'menu-unfold'
                    : 'menu-fold'}/>
              </Button>
            </Menu.Item>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Contact Us</Menu.Item>
          </Menu>
        </Header>
        <Content style={{
            padding: '0 50px'
          }}>
          <div className="content-box">
            <Feed/>
          </div>
        </Content>
        <Footer style={{
            textAlign: 'center'
          }}>
          ©2018 | Created by Andrew Eskenazi
        </Footer>
      </Layout>
    </div>);
  }
}
