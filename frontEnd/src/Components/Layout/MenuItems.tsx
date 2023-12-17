import { MenuProps } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  HomeOutlined,
  DashboardOutlined,
  UserSwitchOutlined,
  ProfileOutlined,
  PoweroffOutlined
} from "@ant-design/icons";

export const items: MenuProps["items"] = [
  {
    label: "Dashboard",
    key: "/dashboard",
    icon: <DashboardOutlined />,
  },
  {
    label: "Users List",
    key: "/userlist",
    icon: <UserSwitchOutlined />,
  },
  {
    label: "Settings",
    key: "/settings",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "profile",
    key: "/profile",
    icon: <ProfileOutlined />,
  },
  {
    label: "SignOut",
    key: "/signout",
    icon: <PoweroffOutlined />,
  },
];
