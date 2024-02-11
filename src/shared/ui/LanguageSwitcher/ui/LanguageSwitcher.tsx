import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { AppButton } from "shared/ui/AppButton/AppButton";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const { className } = props;

  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    i18n.changeLanguage(currentLanguage === "ru" ? "en" : "ru");
  };

  return (
    <AppButton
      variant="clear"
      size="l"
      className={classNames("", [className])}
      onClick={toggleLanguage}
    >
      {i18n.language}
    </AppButton>
  );
};
