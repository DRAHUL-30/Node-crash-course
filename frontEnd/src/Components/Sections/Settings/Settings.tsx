import React, {useState} from 'react';
import { css } from '../../../CSS HOOKS/css';

export const Settings = () => {
  const [value, setValue] = useState("");

  // Pseudo-classes
  // Selectors
  // Responsive design

  return (
    <div>
      {/* Settings */}
      <button
        onClick={() => setValue("John")}
        style={css({
          // transition: "transform 75ms",
          background: "#004982",
          color: "#eeeff0",
          padding: 10,
          on: ($) => [
            $("&:active", {
              background: "#9f3131",
              // color: "red"
            }),
          ],
        })}
      >
        Settings
      </button>
      {/* {value} */}
    </div>
  );
}
