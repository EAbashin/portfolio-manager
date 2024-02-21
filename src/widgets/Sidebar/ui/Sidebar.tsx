import { type FC, useState } from 'react'

import cls from './Sidebar.module.scss'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props

  const [collapsed, setCollapsed] = useState(false)

  const mods = { [cls.collapsed]: collapsed }

  const toggleIsCollapsed = (): void => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div className={classNames(cls.sidebar, [className ?? ''], mods)}>
      <AppButton size="s" onClick={toggleIsCollapsed}>
        Toggle
      </AppButton>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  )
}
