import LegalPageLayout, { LegalIcons } from "@/components/LegalPageLayout";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <LegalPageLayout
      title={t("privacy.title")}
      icon={LegalIcons.privacy}
      lastUpdated="2026-03-20"
    >
      <h2>{t("privacy.overview")}</h2>
      <p>{t("privacy.overview_desc")}</p>

      <h2>{t("privacy.collect")}</h2>
      <ul>
        <li>
          <strong>{t("privacy.collect_stats")}</strong>
        </li>
        <li>
          <strong>{t("privacy.collect_embed")}</strong>
        </li>
      </ul>

      <h2>{t("privacy.use")}</h2>
      <p>{t("privacy.use_desc")}</p>

      <h2>{t("privacy.third_party")}</h2>
      <p>{t("privacy.third_party_desc")}</p>

      <h2>{t("privacy.contact")}</h2>
      <p>{t("privacy.contact_desc")}</p>
    </LegalPageLayout>
  );
}
