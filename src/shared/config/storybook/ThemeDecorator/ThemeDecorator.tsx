import type { StoryFn } from "@storybook/react";

import type { Theme } from "app/providers/ThemeProvider";
import { ThemeProvider } from "../../../../app/providers/ThemeProvider";

import "app/styles/index.scss";

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <ThemeProvider>
    <div
      className={`app ${theme}`}
      style={{ minHeight: "auto", padding: "40px" }}
    >
      <StoryComponent />
    </div>
  </ThemeProvider>
);
