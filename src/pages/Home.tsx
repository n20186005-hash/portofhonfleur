import React from "react";
import { Link } from "wouter";
import {
  Anchor,
  MapPin,
  Phone,
  Clock,
  Navigation,
  Image as ImageIcon,
  ArrowUpRight,
  NotebookPen,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroImg from "@/assets/photos/maps-cover.jpg";
import aerialImg from "@/assets/photos/vieux-bassin-aerial.webp";
import sailboatsImg from "@/assets/photos/vieux-bassin-sailboats.webp";
import quayImg from "@/assets/photos/carousel-quay.webp";
import locksImg from "@/assets/photos/locks-aerial.webp";

const gallery = [heroImg, sailboatsImg, quayImg, aerialImg, locksImg];

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";


const GOOGLE_MAPS_PLACE_URL =
  "https://www.google.com/maps/place/Port+of+Honfleur/@49.4200932,0.2302941,17z/data=!4m6!3m5!1s0x47e033bbbc1fa09f:0xb3180f46d65c5a9a!8m2!3d49.4200897!4d0.2328744!16s%2Fg%2F1q5bw1t4q";

const FOOTER_SUPPORT_TEXT =
  "For technical support of this website, please contact: claritleonelmnicol@gmail.com";

function SectionTitle({ kicker, title, desc }: { kicker: string; title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-xs tracking-[0.24em] text-muted-foreground">
        <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
        <span>{kicker}</span>
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{desc}</p>
    </div>
  );
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language);
  const normalizedLanguage = language.toLowerCase();
  const isFrench = normalizedLanguage.startsWith("fr");
  const heroTitle = t("hero.title");
  const heroDescription = t("hero.description");
  const homeTitle = isFrench
    ? "Port de Honfleur : Vieux Bassin, accès, plan & conseils"
    : `Port of Honfleur | ${heroTitle}`;
  const featuredGuide = {
    kicker: "GUIDE FRANCE",
    title: "Que faire à Honfleur ?",
    description:
      "Découvrez un itinéraire clair pour visiter le Vieux Bassin, l'église Sainte-Catherine, les ruelles de la vieille ville et les meilleurs points de vue en une journée.",
    cta: "Voir le guide",
  };

  // Force re-render when language changes
  React.useEffect(() => {
    const handleLanguageChanged = () => {
      setLanguage(i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChanged);
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);


  return (
    <div className="min-h-screen bg-background text-foreground grain">
      <Helmet>
        <title>{homeTitle}</title>
        <meta name="description" content={heroDescription} />
        <meta property="og:title" content={homeTitle} />
        <meta property="og:description" content={heroDescription} />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {/* Top Nav */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-3 md:px-8">
          <div className="flex min-w-0 max-w-full items-center gap-3">
            <div className="grid shrink-0 h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground paper-shadow">
              <Anchor className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold tracking-tight">Port of Honfleur</div>
              <div className="truncate text-xs text-muted-foreground">Quai de la Quarantaine · Honfleur</div>
            </div>
          </div>

          <nav className="order-last flex w-full flex-wrap items-center gap-x-4 gap-y-2 md:order-none md:w-auto">
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#overview">
              {t("nav.overview")}
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#photos">
              {t("nav.photos")}
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#reviews">
              {t("nav.reviews")}
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#map">
              {t("nav.map")}
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#blog">
              {t("nav.blog")}
            </a>
          </nav>

          <div className="w-full sm:w-auto">
            <a className="block" href={GOOGLE_MAPS_PLACE_URL} target="_blank" rel="noreferrer">
              <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Navigation className="h-4 w-4" />
                {t("hero.google_maps")}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="overview" className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/15 via-background/55 to-background" />

        <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2">

                <Badge variant="secondary" className="border border-border/70 bg-secondary/70">
                  Marina
                </Badge>
              </div>

              <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-6xl">
                {heroTitle}
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">
                {heroDescription}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link href="/map">
                  <Button variant="outline" className="gap-2 bg-background/65">
                    <MapPin className="h-4 w-4" />
                    {t("hero.cta_map")}
                  </Button>
                </Link>
                <Link href="/photos">
                  <Button variant="outline" className="gap-2 bg-background/65">
                    <ImageIcon className="h-4 w-4" />
                    {t("hero.cta_photos")}
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline" className="gap-2 bg-background/65">
                    <NotebookPen className="h-4 w-4" />
                    {t("hero.cta_blog")}
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="paper-shadow overflow-hidden border-border/70 bg-card/75">
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2 text-xs tracking-[0.22em] text-muted-foreground">
                  <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                  {t("facts.title")}
                </div>

                <Separator className="my-4" />

                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold">{t("facts.address")}</div>
                      <div className="text-sm text-muted-foreground">
                        Quai de la Quarantaine, 14600 Honfleur, France
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 text-accent" />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold">{t("facts.hours")}</div>
                      <div className="text-sm text-muted-foreground">{t("facts.hours_value")}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-accent" />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold">{t("facts.phone")}</div>
                      <a
                        className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                        href="tel:+33231491917"
                      >
                        +33 2 31 49 19 17
                      </a>
                      <p><a className="text-xs underline" href="https://www.portsducalvados.fr/en/ports/honfleur/">Ports du Calvados</a></p>
                    </div>
                  </div>


                </div>

                <Separator className="my-5" />

                <a href={GOOGLE_MAPS_PLACE_URL} target="_blank" rel="noreferrer">
                  <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                    {t("facts.view_more")}
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {isFrench && (
        <section className="mx-auto w-full max-w-6xl px-5 py-6 md:px-8 md:py-8">
          <Card className="paper-shadow border-border/70 bg-card/80 p-5 md:p-6">
            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex items-center gap-2 text-xs tracking-[0.24em] text-muted-foreground">
                  <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
                  <span>{featuredGuide.kicker}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  {featuredGuide.title}
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {featuredGuide.description}
                </p>
              </div>

              <Link href="/que-faire-honfleur">
                <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  {featuredGuide.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        </section>
      )}

      {/* Photos */}
      <section id="photos" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <SectionTitle
          kicker={t("photos.kicker")}
          title={t("photos.title")}
          desc={t("photos.desc")}
        />

        <a href={GOOGLE_MAPS_PLACE_URL} target="_blank" rel="noreferrer" className="underline">{t("hero.google_maps")}</a>
        <div className="mt-8">
          <Card className="paper-shadow border-border/70 bg-card/75 p-5 md:p-6">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {gallery.map((src, index) => (
                  <CarouselItem key={src} className="md:basis-1/2">
                    <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background">
                      <img
                        src={src}
                        alt={`${t("photos.title")} ${index + 1}`}
                        className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-end justify-between gap-3">
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold">{`${t("photos.title")} ${index + 1}`}</div>
                          <div className="mt-1 text-xs text-muted-foreground">

                          </div>
                        </div>
                        <Badge className="bg-primary text-primary-foreground">PHOTO</Badge>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </Card>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-5 pb-12 md:px-8">
        <a href={GOOGLE_MAPS_PLACE_URL} target="_blank" rel="noreferrer" className="underline">{t("reviews.cta_button")}</a>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <h2 className="text-3xl font-semibold">{isFrench ? "Guides pratiques" : "Practical guides"}</h2>
        <ul className="mt-5 grid gap-4 md:grid-cols-2">
          <li><a className="underline" href="/fr/parking-honfleur" lang="fr">Parking à Honfleur (FR)</a></li>
          <li><a className="underline" href="/fr/honfleur-sans-voiture" lang="fr">Honfleur sans voiture (FR)</a></li>
          <li><a className="underline" href="/en/honfleur-marina" lang="en">Honfleur marina: visiting boat arrivals (EN)</a></li>
          <li><a className="underline" href="/en/honfleur-cruise-port" lang="en">Honfleur cruise port: transfers and time ashore (EN)</a></li>
        </ul>
      </section>

      {/* Map */}
      <section id="map" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <SectionTitle
          kicker={t("map.kicker")}
          title={t("map.title")}
          desc={t("map.desc")}
        />

        <div className="mt-8 grid gap-5 md:grid-cols-[1fr_0.9fr]">
          <Card className="paper-shadow overflow-hidden border-border/70 bg-card/75">
            <div className="p-4 md:p-5">
              <div className="rounded-2xl overflow-hidden border border-border/70 bg-background">
                <iframe
                  title="Google Map - Port of Honfleur"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.4083649605805!2d0.2302941134835633!3d49.42009316089278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e033bbbc1fa09f%3A0xb3180f46d65c5a9a!2sPort%20of%20Honfleur!5e0!3m2!1sen!2sus!4v1773977078572!5m2!1sen!2sus"
                  width="100%"
                  height="460"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Card>

          <Card className="paper-shadow border-border/70 bg-card/75 p-5 md:p-6">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-primary p-3 text-primary-foreground">
                <Navigation className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">{t("map.tips_title")}</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("map.tips_desc")}
                </p>
              </div>
            </div>
            <Separator className="my-5" />
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <div>
                  <div className="font-semibold">{t("map.golden_hour")}</div>
                  <div className="text-muted-foreground">{t("map.golden_hour_desc")}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <div>
                  <div className="font-semibold">{t("map.photo_spot")}</div>
                  <div className="text-muted-foreground">{t("map.photo_spot_desc")}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <div>
                  <div className="font-semibold">{t("map.route_plan")}</div>
                  <div className="text-muted-foreground">{t("map.route_plan_desc")}</div>
                </div>
              </div>
            </div>
            <a className="mt-6 inline-block w-full" href={GOOGLE_MAPS_PLACE_URL} target="_blank" rel="noreferrer">
              <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                {t("map.cta_button")}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
          </Card>
        </div>
      </section>

      {/* Blog Placeholder */}
      <section id="blog" className="bg-secondary/55 py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <SectionTitle
            kicker={t("blog.kicker")}
            title={t("blog.title")}
            desc={t("blog.desc")}
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["post1", "post2", "post3"].map((id) => {
              const blog = t(`blogs_content.${id}`, { returnObjects: true }) as {
                title: string;
                description: string;
              };
              return (
                <Card key={id} className="paper-shadow border-border/70 bg-card/80 p-5">
                  <div className="flex items-start justify-between">
                    <Badge className="bg-primary text-primary-foreground">
                      {id === "post1" ? "Guide" : id === "post2" ? "Photo" : "Budget"}
                    </Badge>
                    <NotebookPen className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="mt-4 text-lg font-semibold line-clamp-2 min-h-[3.5rem]">
                    {blog.title}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3 min-h-[3.75rem]">
                    {blog.description}
                  </p>
                  <Link href={`/blog/${id}`}>
                    <Button className="mt-4 w-full" variant="outline">
                      {t("blog.read_button")}
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/70 bg-background/80">
        <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
          {/* Prominent Disclaimer */}
          <div className="mb-8 rounded-lg border-2 border-amber-200 bg-amber-50/50 p-6 dark:border-amber-900/30 dark:bg-amber-900/10">
            <h3 className="mb-2 text-lg font-semibold text-amber-900 dark:text-amber-100">
              ⚠️ {t("footer.disclaimer_title")}
            </h3>
            <p className="text-sm leading-relaxed text-amber-800 dark:text-amber-200">
              {t("footer.disclaimer_content")}
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 text-center">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                Cookie Settings
              </Link>
            </div>

            <div className="max-w-3xl text-sm text-muted-foreground">{FOOTER_SUPPORT_TEXT}</div>
            <div className="max-w-3xl text-xs text-muted-foreground">
              {t("footer.data_source")}
            </div>
            <div className="text-xs text-muted-foreground">
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
