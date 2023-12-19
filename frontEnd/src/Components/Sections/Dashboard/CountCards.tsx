import { ShoppingCartOutlined, ShoppingOutlined, UserOutlined, DollarCircleOutlined } from "@ant-design/icons";

export const counts = [
  {
    title: "Orders",
    value: "12,000",
    icon: (
      <ShoppingCartOutlined
        style={{
          color: "green",
          backgroundColor: "rgba(0, 255, 0, 0.5)",
          borderRadius: 20,
          fontSize: 24,
          padding: 8,
        }}
      />
    ),
  },
  {
    title: "Inventory",
    value: "7800",
    icon: (
      <ShoppingOutlined
        style={{
          color: "blue",
          backgroundColor: "rgba(0, 0, 255, 0.25)",
          borderRadius: 20,
          fontSize: 24,
          padding: 8,
        }}
      />
    ),
  },
  {
    title: "Customer",
    value: "1479",
    icon: (
      <UserOutlined
        style={{
          color: "purple",
          backgroundColor: "rgba(0, 255, 255, 0.25)",
          borderRadius: 20,
          fontSize: 24,
          padding: 8,
        }}
      />
    ),
  },
  {
    title: "Revenue",
    value: "16,300",
    icon: (
      <DollarCircleOutlined
        style={{
          color: "red",
          backgroundColor: "rgba(255, 0, 0, 0.5)",
          borderRadius: 20,
          fontSize: 24,
          padding: 8,
        }}
      />
    ),
  },
];