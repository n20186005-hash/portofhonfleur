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
        <title>{`${t("photos.title")} | Port of Honfleur`}</title>
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

              <p className="text-muted-foreground">
                {t("blogs_content.post2.description")}
              </p>
              <ul className="mt-6 space-y-4">
                <li><Link href="/blog/post2" className="underline">{t("blogs_content.post2.title")}</Link></li>
                <li><a href="https://www.google.com/maps/place/Port+of+Honfleur/@49.4200932,0.2302941,17z/data=!4m6!3m5!1s0x47e033bbbc1fa09f:0xb3180f46d65c5a9a!8m2!3d49.4200897!4d0.2328744!16s%2Fg%2F1q5bw1t4q" target="_blank" rel="noreferrer" className="underline">{t("facts.view_more")}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}