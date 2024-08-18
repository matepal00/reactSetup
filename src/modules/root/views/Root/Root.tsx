import { useModuleTranslation } from "../../utils";

const Root = () => {
  const { t } = useModuleTranslation({});
  return <div>{t("title")}</div>;
};

export default Root;
