import { type FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoaderPage.module.scss";
import AppLoader from "shared/ui/AppLoader/ui/AppLoader";

const LoaderPage: FC = () => {
  return (
    <div className={classNames(cls["loader-page"])}>
      <AppLoader />
    </div>
  );
};

export default LoaderPage;
