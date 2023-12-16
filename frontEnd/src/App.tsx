import React from "react";
import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from 'antd';
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
