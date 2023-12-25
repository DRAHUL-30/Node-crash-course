import {useState} from 'react';
import { Badge, Typography, Image, Space, Drawer } from 'antd';
import { MailOutlined, BellFilled } from '@ant-design/icons';
import logo from "../../../assets/logo.jpg";
import _ from 'lodash';

interface WrapperComponentProps {
  children: React.ReactElement;
}

export const WrapperComponent = ({ children }: WrapperComponentProps) => {
  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};


const Header = () => {
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    return (
      <div className="h-[8%] bg-[#b2f1e8] flex justify-between items-center pl-2 pr-8 border-blue-950 border-b-2">
        <Image
          width={60}
          height={60}
          src={logo}
          className="rounded-full"
        ></Image>
        <Typography.Text style={{ fontSize: "28px", color: "#111d2c" }}>
          Vite & React
        </Typography.Text>
        <Space size={14} wrap={true}>
          <Badge count={20}>
            <MailOutlined style={{ fontSize: "24px" }} onClick={()=>setCommentsOpen(true)} />
          </Badge>
          <Badge count={10}>
            <BellFilled style={{ fontSize: "24px" }} onClick={()=>setNotificationsOpen(true)} />
          </Badge>
        </Space>
        <Drawer title="Comments" open={commentsOpen} onClose={()=> setCommentsOpen(false)} maskClosable={true}></Drawer>
        <Drawer title="Notifications" open={notificationsOpen} onClose={()=> setNotificationsOpen(false)} maskClosable={true}></Drawer>
      </div>
    );
}

const Footer = () => {
    const footerData = [
        {
            link_name: '+91 9952368680',
            link: 'https://www.google.com/'
        },
        {
            link_name: 'Privacy Policy',
            link: 'https://www.google.com/'
        },
        {
            link_name: 'Terms of Use',
            link: 'https://www.google.com/'
        }
    ]

    const renderList = _.map(footerData, (item: any) => (
      // <Space key={item.id} wrap={true}>
      <Typography.Link
        key={item.id}
        target={"_blank"}
        href={item?.link}
        style={{ fontSize: "18px", color: "#112a45" }}
      >
        {item?.link_name}
      </Typography.Link>
      // </Space>
    ));

  return (
      <div className="py-5 bg-[#b7dcfa] flex item-center justify-evenly text-[22px]">
          {renderList}
      </div>
  );
};