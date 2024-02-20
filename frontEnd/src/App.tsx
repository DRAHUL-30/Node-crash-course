import { useEffect, useState, Fragment } from "react";
import "./App.css";
import "./index.css";
import { ConfigProvider, notification } from "antd";
import { SignalFilled } from "@ant-design/icons";
import { RouterPage } from "./Components/Features/Routes/RouterPage";

//* useMemo, useContext, useReducer, Redux *//
//* Create More Common Hooks *//
//* Folder Structure *//

const App = () => {
  const [someCondition, setSomeCondition] = useState(false);

  useEffect(() => {
    if (someCondition && window.navigator.onLine) {
      notification.open({
        message: 'Welcome!',
        description: "Thanks for visiting our website.",
      });
    }
    setSomeCondition(true);
  }, [someCondition]);

  return (
    <Fragment>
      {window.navigator.onLine ? <ConfigProvider
        theme={{
          token: {
            fontFamily: "Poppins",
          },
        }}
      >
        <RouterPage />
      </ConfigProvider> : <p className="text-[20px] text-red-400 py-4"><span className="px-3"><SignalFilled /></span>Please Check Your Internet Connection ....</p>}
    </Fragment>
  );
};

export default App;
