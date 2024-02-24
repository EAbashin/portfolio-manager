import { LoaderPage } from "pages/LoaderPage";
import { type FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div className="page-wrapper">{<LoaderPage />}</div>}>
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
  );
};

export default AppRouter;
