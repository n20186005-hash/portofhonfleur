import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Photos() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("photos.title")} | Port of Honfleur</title>
        <meta name="description" content={t("photos.desc")} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground grain">
        <div className="mx-auto w-full max-w-4xl px-5 py-10 md:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t("nav.overview")}
              </Button>
            </Link>
          </div>

          <div className="mt-10">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {t("photos.title")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("photos.desc")}
            </p>
            
            <div className="mt-8">
              {/* Photos content will go here */}
              <p className="text-muted-foreground">
                {t("photos.placeholder")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}