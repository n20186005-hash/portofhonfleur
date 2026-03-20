import LegalPageLayout, { LegalIcons } from "@/components/LegalPageLayout";
import { useTranslation } from "react-i18next";

export default function TermsOfService() {
  const { t } = useTranslation();
  return (
    <LegalPageLayout
      title={t("terms.title")}
      icon={LegalIcons.terms}
      lastUpdated="2026-03-20"
    >
      <h2>{t("terms.use_terms")}</h2>
      <p>{t("terms.use_terms_desc")}</p>

      <h2>{t("terms.content")}</h2>
      <p>{t("terms.content_desc")}</p>

      <h2>{t("terms.disclaimer")}</h2>
      <p>{t("terms.disclaimer_desc")}</p>

      <h2>{t("terms.links")}</h2>
      <p>{t("terms.links_desc")}</p>

      <h2>{t("privacy.contact")}</h2>
      <p>{t("privacy.contact_desc")}</p>
    </LegalPageLayout>
  );
}
