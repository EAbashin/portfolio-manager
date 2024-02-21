import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.navbar, [className ?? ''])}>
      <div className={cls.links}>
        <AppLink to={'/'}>{t('Главная')}</AppLink>
        <AppLink to={'/about'}>{t('О приложении')}</AppLink>
      </div>
    </div>
  )
}
