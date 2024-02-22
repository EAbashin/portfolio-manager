import { useContext } from "react";
import { Theme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./themeContext";

interface UseThemeReturn {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeReturn {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    setTheme?.(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
