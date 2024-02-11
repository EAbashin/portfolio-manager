import { FC, memo } from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";

import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { AppButton } from "shared/ui/AppButton/AppButton";
import { classNames } from "shared/lib/classNames/classNames";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      variant="clear"
      className={classNames("", [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </AppButton>
  );
});
