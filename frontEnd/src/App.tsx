import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { ConfigProvider, notification } from "antd";
import { RouterPage } from "./Components/Features/Routes/RouterPage";

const App = () => {
  const [someCondition, setSomeCondition] = useState(false);

  useEffect(() => {
    if (someCondition) {
      notification.info({
        message: 'Welcome!',
        description: "Thanks for visiting our website.",
      });
    }
    setSomeCondition(true);
  }, [someCondition]);

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
