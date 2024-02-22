import { type FC, type ReactNode, useMemo, useState } from "react";

import {
  Theme,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from "../lib/themeContext";

interface Props {
  children: ReactNode;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
