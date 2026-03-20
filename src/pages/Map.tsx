import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Map() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("map.title")} | Port of Honfleur</title>
        <meta name="description" content={t("map.desc")} />
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
              {t("map.title")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("map.desc")}
            </p>
            
            <div className="mt-8">
              {/* Map content will go here */}
              <p className="text-muted-foreground">
                {t("map.placeholder")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}