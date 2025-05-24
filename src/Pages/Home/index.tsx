import { useTranslation } from "react-i18next";

interface IProps {}

const HomePage = ({}: IProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("Welcome")}</h1>
    </div>
  );
};

export default HomePage;
