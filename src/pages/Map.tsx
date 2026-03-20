import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft, MapPin, Clock, Camera, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Map() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("map.title")} | Port of Honfleur</title>
        <meta name="description" content={t("map.desc")} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground grain">
        <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t("nav.overview")}
              </Button>
            </Link>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-2 text-xs tracking-[0.24em] text-muted-foreground">
              <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
              <span>{t("map.kicker")}</span>
            </div>
            
            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {t("map.title")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("map.desc")}
            </p>

            {/* Google Maps Embed */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d300.37837020835275!2d0.2327356724879831!3d49.420009907273084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e033bbbc1fa09f%3A0xb3180f46d65c5a9a!2sPort%20of%20Honfleur!5e0!3m2!1sen!2sus!4v1774000008561!5m2!1sen!2sus" 
                width="100%" 
                height="500" 
                className="w-full h-[500px] md:h-[600px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Port of Honfleur Map"
              />
            </div>

            {/* Visiting Tips Cards */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold tracking-tight mb-6">
                {t("map.tips_title")}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("map.tips_desc")}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Golden Hour Card */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold">{t("map.golden_hour")}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t("map.golden_hour_desc")}
                  </p>
                </Card>

                {/* Photo Spot Card */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-full">
                      <Camera className="h-5 w-5 text-amber-600" />
                    </div>
                    <h3 className="font-semibold">{t("map.photo_spot")}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t("map.photo_spot_desc")}
                  </p>
                </Card>

                {/* Route Planning Card */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-full">
                      <Navigation className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold">{t("map.route_plan")}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t("map.route_plan_desc")}
                  </p>
                </Card>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Port+of+Honfleur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-red-600 hover:bg-red-700 px-8 py-6 text-lg">
                  <MapPin className="h-5 w-5 mr-2" />
                  {t("map.cta_button")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}