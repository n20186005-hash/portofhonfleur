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
      {/* Prominent Independent Third-Party Disclaimer */}
      <div className="mb-8 rounded-lg border-2 border-amber-200 bg-amber-50/50 p-6 dark:border-amber-900/30 dark:bg-amber-900/10">
        <h2 className="mb-3 text-xl font-semibold text-amber-900 dark:text-amber-100">
          ⚠️ {t("terms.disclaimer_title")}
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-amber-800 dark:text-amber-200">
          {t("terms.disclaimer_desc")}
        </p>
        <div className="mt-4 rounded border border-amber-300 bg-amber-100/50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
          <p className="mb-2 text-sm font-medium text-amber-900 dark:text-amber-100">
            🎫 {t("terms.disclaimer_official")}
          </p>
          <p className="text-sm text-amber-800 dark:text-amber-200">
            {t("terms.disclaimer_official_link")}
          </p>
        </div>
      </div>

      <h2>{t("terms.use_terms")}</h2>
      <p>{t("terms.use_terms_desc")}</p>

      <h2>{t("terms.content")}</h2>
      <p>{t("terms.content_desc")}</p>

      <h2>{t("terms.disclaimer")}</h2>
      <p>{t("terms.disclaimer_data")}</p>

      <h2>{t("terms.links")}</h2>
      <p>{t("terms.links_desc")}</p>

      <h2>{t("privacy.contact")}</h2>
      <p>{t("privacy.contact_desc")}</p>
    </LegalPageLayout>
  );
}
