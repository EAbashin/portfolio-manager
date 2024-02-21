import { type FC, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'

import { routConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter: FC = () => {
  const { t } = useTranslation()

  return (
    <Suspense fallback={<div className="page-wrapper">{t('Загрузка')}...</div>}>
      <Routes>
        {Object.values(routConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
