import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
