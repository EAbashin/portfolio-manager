import { memo } from "react";
import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

import cls from "./AppButton.module.scss";

import { classNames } from "shared/lib/classNames/classNames";
import type { Mods } from "shared/lib/classNames/classNames";
import type { Color, Size } from "shared/ui/types/uiTypes";

export type AppButtonVariant = "outlined" | "contained";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
   */
  variant?: AppButtonVariant;
  /**
   * Размер кнопки в соответствии с дизайн системой
   */
  size?: Size;
  /**
   * Цвет кнопки
   */
  color?: Color;
  /**
   * Увеличивает кнопку на всю свободную ширину
   */
  block?: boolean;
  /**
   * Флаг, отвечающий за работу кнопки
   */
  disabled?: boolean;
  /**
   * Содержимое кнопки
   */
  children?: ReactNode;
  /**
   * Вншние стили
   */
  className?: string;
}

const AppButton: FC<AppButtonProps> = memo((props) => {
  const {
    variant,
    size,
    color,
    disabled,
    block,
    children,
    className = "",
    ...otherProps
  } = props;

  const variantClass = variant !== undefined ? cls[variant] : "";
  const sizeClass = size !== undefined ? cls[size] : "";
  const colorClass = color !== undefined ? cls[color] : "";

  const additional = [variantClass, sizeClass, colorClass, className];

  const mods: Mods = {
    [cls.block]: block,
    [cls.disabled]: disabled,
  };

  return (
    <button
      className={classNames(cls["app-button"], additional, mods)}
      {...otherProps}
    >
      {children}
    </button>
  );
});

AppButton.displayName = "AppButton";

export { AppButton };
