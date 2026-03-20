import LegalPageLayout, { LegalIcons } from "@/components/LegalPageLayout";
import { useTranslation } from "react-i18next";

export default function CookieSettings() {
  const { t } = useTranslation();
  return (
    <LegalPageLayout
      title={t("cookies.title")}
      icon={LegalIcons.cookies}
      lastUpdated="2026-03-20"
    >
      <h2>{t("cookies.how")}</h2>
      <p>{t("cookies.how_desc")}</p>

      <h2>{t("cookies.manage")}</h2>
      <p>{t("cookies.manage_desc")}</p>

      <h2>{t("cookies.third_party")}</h2>
      <p>{t("cookies.third_party_desc")}</p>
    </LegalPageLayout>
  );
}
