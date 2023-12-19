import React from 'react';
import { Space, Menu } from 'antd';
import { items } from './MenuItems';
import { useNavigate } from 'react-router-dom';
import { WrapperComponent } from '../Sections/WrapperComponent/WrapperComponent';

interface LayoutProps{
    children:React.ReactElement
}

export const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
    return (
      <WrapperComponent>
        <div className="h-[86%] flex">
          <Menu
            onClick={({ key }) => {
              if (key !== "/signout") navigate(key);
            }}
            defaultSelectedKeys={[window.location.pathname]}
            items={items}
            style={{ width: "15%", padding: "2px 0", fontSize: "17px" }}
          ></Menu>
          <div className="p-2 w-[85%] scroll-smooth overflow-y-scroll scrollbar-hide">{children}</div>
        </div>
      </WrapperComponent>
    );
};