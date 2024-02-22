import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";

import "shared/config/i18n/i18n";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
