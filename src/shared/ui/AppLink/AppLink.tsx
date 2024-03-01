import { memo } from "react";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

import cls from "./AppLink.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import type { Mods } from "shared/lib/classNames/classNames";
import type { Color, Size } from "shared/ui/types/uiTypes";

interface AppLinkProps extends LinkProps {
  color?: Color;
  size?: Size;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

const AppLink: FC<AppLinkProps> = memo((props) => {
  const {
    to,
    color,
    size,
    disabled,
    children,
    className = "",
    ...otherProps
  } = props;

  const sizeClass = size !== undefined ? cls[size] : "";
  const colorClass = color !== undefined ? cls[color] : "";

  const additional = [sizeClass, colorClass, className];

  const mods: Mods = {
    [cls.disabled]: disabled,
  };

  return (
    <Link
      to={to}
      className={classNames(cls["app-link"], additional, mods)}
      {...otherProps}
    >
      {children}
    </Link>
  );
});

AppLink.displayName = "AppLink";

export { AppLink };
