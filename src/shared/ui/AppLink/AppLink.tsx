import { type FC, type ReactNode, memo } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

import cls from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  children: ReactNode
}

const AppLink: FC<AppLinkProps> = memo((props) => {
  const {
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls['app-link'], [className ?? '', cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
})

AppLink.displayName = 'AppLink'

export { AppLink }
