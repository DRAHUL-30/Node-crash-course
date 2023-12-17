import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { ConfigProvider } from "antd";
import { RouterPage } from "./Components/Features/Routes/RouterPage";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Poppins",
        },
      }}
    >
      <RouterPage />
    </ConfigProvider>
  );
};

export default App;
