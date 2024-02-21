import {
  type ButtonHTMLAttributes,
  type FC,
  type ReactNode,
  memo
} from 'react'

import cls from './AppButton.module.scss'

import { type Mods, classNames } from 'shared/lib/classNames/classNames'

export type AppButtonVariant = 'clear' | 'outline' | 'filled'
export type AppButtonColor = 'normal' | 'success' | 'error'

export type AppButtonSize = 's' | 'm' | 'l' | 'xl'

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  /**
   * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
   */
  variant?: AppButtonVariant
  /**
   * Флаг, делающий кнопку квадратной
   */
  square?: boolean
  /**
   * Размер кнопки в соответствии с дизайн системой
   */
  size?: AppButtonSize
  /**
   * Флаг, отвечающий за работу кнопки
   */
  disabled?: boolean
  /**
   * Содержимое кнопки
   */
  children?: ReactNode
  /**
   * Увеличивает кнопку на всю свободную ширину
   */
  fullWidth?: boolean

  color?: AppButtonColor

  addonLeft?: ReactNode
  addonRight?: ReactNode
}

const AppButton: FC<AppButtonProps> = memo((props) => {
  const {
    className,
    children,
    variant = 'outline',
    square,
    disabled,
    fullWidth,
    size = 'm',
    addonLeft,
    addonRight,
    color = 'normal',
    ...otherProps
  } = props

  const additional = [className ?? '', cls[variant], cls[size], cls[color]]

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
    [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight)
  }

  return (
    <button
      className={classNames(cls['app-button'], additional, mods)}
      {...otherProps}
    >
      {children}
    </button>
  )
})

AppButton.displayName = 'AppButton'

export { AppButton }
