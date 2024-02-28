import {  useState } from "react";
import type {FC} from "react";

import cls from "./Sidebar.module.scss";

import { AppButton } from "shared/ui/AppButton/AppButton";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const mods = { [cls.collapsed]: collapsed };

  const toggleIsCollapsed = (): void => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, [className ?? ""], mods)}
    >
      <AppButton
        data-testid="sidebar-toggle"
        size="s"
        onClick={toggleIsCollapsed}
      >
        {t("Toggle")}
      </AppButton>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
