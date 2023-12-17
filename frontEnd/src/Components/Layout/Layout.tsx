import React from 'react';
import { Space, Menu } from 'antd';
import { items } from './MenuItems';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <div className="flex">
      <Menu
        onClick={({ key })=>{
            navigate(key);
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={items}
      ></Menu>
      <Content />
    </div>
  );
}

const Content = () => {
    return (
        <div>
            Content
        </div>
    )
}