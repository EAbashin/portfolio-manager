import { memo, useState } from "react";
import type { FC } from "react";

import cls from "./Sidebar.module.scss";

import { AppButton } from "shared/ui/AppButton/AppButton";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { AppLink } from "shared/ui/AppLink/AppLink";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC = memo(({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const adds = [className ?? ""];
  const mods = { [cls.collapsed]: collapsed };

  const toggleIsCollapsed = (): void => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={classNames(cls.sidebar, adds, mods)}
    >
      <div className={cls["link-wrapper"]}>
        <AppLink to={"/"} size="s">
          {t("Главная")}
        </AppLink>
        <AppLink to={"/about"} size="s">
          {t("О приложении")}
        </AppLink>
      </div>
      <AppButton
        data-testid="sidebar-toggle"
        onClick={toggleIsCollapsed}
        className={cls["collapse-btn"]}
        size="s"
      >
        {collapsed ? ">" : "<"}
      </AppButton>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

export { Sidebar };
