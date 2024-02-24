import { type FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLoader.module.scss";

const AppLoader: FC = () => {
  return (
    <div className={classNames(cls["lds-ellipsis"])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default AppLoader;
