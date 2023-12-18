import React from 'react';
import { Space, Menu } from 'antd';
import { items } from './MenuItems';
import { useNavigate } from 'react-router-dom';

interface LayoutProps{
    children:React.ReactElement
}

export const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <Menu
        onClick={({ key }) => {
          navigate(key);
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={items}
        style={{ width: "15%", padding: "10px 0" }}
      ></Menu>
      {children}
    </div>
  );
};