import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface IThemeContext {
  theme: Theme;
  setTheme?: (theme: Theme) => void;
}

const defaultState: IThemeContext = {
  theme: Theme.LIGHT,
};

export const ThemeContext = createContext<IThemeContext>(defaultState);

export const LOCAL_STORAGE_THEME_KEY = "theme";
