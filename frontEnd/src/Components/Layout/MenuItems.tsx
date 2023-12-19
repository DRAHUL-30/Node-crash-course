import {
  SettingOutlined,
//   DashboardOutlined,
  UserSwitchOutlined,
  ProfileOutlined,
  PoweroffOutlined,
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  UploadOutlined
} from "@ant-design/icons";

type MenuItemType = {
  label: string;
  key: string;
  icon: React.ReactNode;
};

type DividerType = {
  type: "divider";
  style?: React.CSSProperties;
};

const dividerItem: DividerType = {
  type: "divider",
  style: {
    margin: "16px 0",
    border: "1px solid #d9d9d9",
  },
};

export const items: (MenuItemType | DividerType)[] = [
    {
        label: "Dashboard",
        key: "/dashboard",
        icon: <AppstoreOutlined />,
    },
    {
        label: "Inventory",
        key: "/inventory",
        icon: <ShopOutlined />,
    },
    {
        label: "Orders",
        key: "/orders",
        icon: <ShoppingCartOutlined />,
    },
    {
        label: "Customers",
        key: "/customers",
        icon: <UserOutlined />,
    },
    {
        label: "Users List",
        key: "/userslist",
        icon: <UserSwitchOutlined />,
    },
    {
        label: "Uploads",
        key: "/uploads",
        icon: <UploadOutlined />,
    },
    {
        label: "Settings",
        key: "/settings",
        icon: <SettingOutlined />,
        // children: [
        //   {
        //     type: "group",
        //     label: "Item 1",
        //     children: [
        //       {
        //         label: "Option 1",
        //         key: "setting:1",
        //       },
        //       {
        //         label: "Option 2",
        //         key: "setting:2",
        //       },
        //     ],
        //   },
        //   {
        //     type: "group",
        //     label: "Item 2",
        //     children: [
        //       {
        //         label: "Option 3",
        //         key: "setting:3",
        //       },
        //       {
        //         label: "Option 4",
        //         key: "setting:4",
        //       },
        //     ],
        //   },
        // ],
    },
    {
        label: "profile",
        key: "/profile",
        icon: <ProfileOutlined />,
    },
    dividerItem,
    {
        label: "SignOut",
        key: "/signout",
        icon: <PoweroffOutlined />,
        style: {
        color: "red", // Customize the color as needed
        },
    },
];
