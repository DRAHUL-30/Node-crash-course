import { createHooks } from "@css-hooks/react";

export const { styleSheet, css } = createHooks({
  hooks: {
    "&:active": "&:active",
  },
  debug: import.meta.env.DEV,
});

