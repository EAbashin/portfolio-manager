import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ErrorPage.module.scss";

export const ErrorPage: FC = () => {
  const { t } = useTranslation("error");

  const reloadPage = (): void => {
    location.reload();
  };

  return (
    <div className={classNames(cls["error-page"])}>
      <p>{t("Что-то пошло не так")}</p>
      <button onClick={reloadPage}>{t("Обновить страницу")}</button>
    </div>
  );
};
