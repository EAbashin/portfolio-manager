import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss";

const NotFoundPage: FC = () => {
  const { t } = useTranslation("notFoundPage");

  return (
    <div className={classNames(cls["not-found-page"])}>
      {t("Страница на найдена")}
    </div>
  );
};

export default NotFoundPage;
