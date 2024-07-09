import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const NavBar = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="services">Services</Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
