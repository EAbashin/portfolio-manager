import type { Decorator, StoryFn } from "@storybook/react";

import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator: Decorator = (StoryComponent: StoryFn) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
