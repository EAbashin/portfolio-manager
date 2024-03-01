import type {FC} from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { AppButton } from "shared/ui/AppButton/AppButton";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const { className } = props;

  const { i18n } = useTranslation();

  const toggleLanguage = async (): Promise<void> => {
    const currentLanguage = i18n.language;
    await i18n.changeLanguage(currentLanguage === "ru" ? "en" : "ru");
  };

  return (
    <AppButton
      size="l"
      className={classNames("", [className ?? ""])}
      onClick={() => {
        void (async () => {
          await toggleLanguage();
        })();
      }}
    >
      {i18n.language}
    </AppButton>
  );
};
