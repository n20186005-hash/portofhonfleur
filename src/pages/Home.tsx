import React, { useMemo } from "react";
import { Link } from "wouter";
import {
  Anchor,
  MapPin,
  Star,
  Phone,
  Clock,
  Navigation,
  Image as ImageIcon,
  Quote,
  ArrowUpRight,
  NotebookPen,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import heroImg from "@/assets/photos/maps-cover.jpg";
import aerialImg from "@/assets/photos/vieux-bassin-aerial.webp";
import sailboatsImg from "@/assets/photos/vieux-bassin-sailboats.webp";
import quayImg from "@/assets/photos/carousel-quay.webp";
import locksImg from "@/assets/photos/locks-aerial.webp";

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

function Stamp({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/70 px-3 py-1 text-xs text-foreground/90">
      {children}
    </div>
  );
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language);

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

  const gallery = useMemo(
    () => [
      { src: heroImg, alt: t("hero.title"), tag: "Google Maps" },
      { src: sailboatsImg, alt: t("photos.alt_sailboats"), tag: "公开来源" },
      { src: quayImg, alt: t("photos.alt_quay"), tag: "公开来源" },
      { src: aerialImg, alt: t("photos.alt_aerial"), tag: "公开来源" },
      { src: locksImg, alt: t("photos.alt_locks"), tag: "公开来源" },
    ],
    [t]
  );

  const reviewsListRaw = t("reviews.reviews_list", { returnObjects: true, defaultValue: [] as any }) as unknown;
  const reviewsList = Array.isArray(reviewsListRaw) ? reviewsListRaw : [];

  return (
    <div className="min-h-screen bg-background text-foreground grain">
      <Helmet>
        <title>Port of Honfleur | {t("hero.title")}</title>
        <meta name="description" content={t("hero.description")} />
        <meta property="og:title" content={`Port of Honfleur | ${t("hero.title")}`} />
        <meta property="og:description" content={t("hero.description")} />
        <meta property="og:image" content={heroImg} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.portofhonfleur.com/" />
      </Helmet>

      {/* Top Nav */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground paper-shadow">
              <Anchor className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold tracking-tight">Port of Honfleur</div>
              <div className="truncate text-xs text-muted-foreground">Quai de la Quarantaine · Honfleur</div>
            </div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
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

          <div className="flex items-center gap-2">
            <a href={GOOGLE_MAPS_PLACE_URL} target="_blank" rel="noreferrer">
              <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
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
                <Stamp>
                  <Star className="h-3.5 w-3.5 text-accent" />
                  <span className="font-semibold">4.6</span>
                  <span className="text-muted-foreground">/ 5</span>
                </Stamp>
                <Stamp>
                  <Quote className="h-3.5 w-3.5" />
                  <span className="font-semibold">25,011</span>
                  <span className="text-muted-foreground">{t("hero.reviews_count", { count: 25011, defaultValue: "{{count}} Google Reviews" })}</span>
                </Stamp>
                <Badge variant="secondary" className="border border-border/70 bg-secondary/70">
                  Marina
                </Badge>
              </div>

              <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-6xl">
                {t("hero.title")}
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">
                {t("hero.description")}
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
                        href="tel:+33650894051"
                      >
                        +33 6 50 89 40 51
                      </a>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border/70 bg-secondary/60 p-4">
                    <div className="text-xs text-muted-foreground">Plus Code</div>
                    <div className="mt-1 font-semibold">C6CM+24 Honfleur, France</div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {t("facts.plus_code_desc")}
                    </p>
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

      {/* Photos */}
      <section id="photos" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <SectionTitle
          kicker={t("photos.kicker")}
          title={t("photos.title")}
          desc={t("photos.desc")}
        />

        <div className="mt-8">
          <Card className="paper-shadow border-border/70 bg-card/75 p-5 md:p-6">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {gallery.map((img) => (
                  <CarouselItem key={img.alt} className="md:basis-1/2">
                    <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-end justify-between gap-3">
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold">{img.alt}</div>
                          <div className="mt-1 text-xs text-muted-foreground">
                            {t("photos.source", { tag: img.tag })}
                          </div>
                        </div>
                        <Badge className="bg-primary text-primary-foreground">PHOTO</Badge>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </Card>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="clip-wave bg-secondary/55 py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <SectionTitle
            kicker={t("reviews.kicker")}
            title={t("reviews.title")}
            desc={t("reviews.desc")}
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Card className="paper-shadow border-border/70 bg-card/80 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs text-muted-foreground">{t("reviews.rating_title")}</div>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="text-3xl font-semibold">4.6</div>
                    <Star className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <Badge className="bg-accent text-accent-foreground">STAMP</Badge>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {t("reviews.rating_desc")}
              </p>
            </Card>

            <Card className="paper-shadow border-border/70 bg-card/80 p-5">
              <div className="text-xs text-muted-foreground">{t("reviews.count_title")}</div>
              <div className="mt-1 text-3xl font-semibold">25,011</div>
              <p className="mt-3 text-sm text-muted-foreground">
                {t("reviews.count_desc")}
              </p>
            </Card>

            <Card className="paper-shadow border-border/70 bg-card/80 p-5">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-primary p-3 text-primary-foreground">
                  <Quote className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{t("reviews.cta_title")}</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t("reviews.cta_desc")}
                  </p>
                </div>
              </div>
              <a className="mt-4 inline-block" href={GOOGLE_MAPS_PLACE_URL} target="_blank" rel="noreferrer">
                <Button className="w-full gap-2" variant="outline">
                  {t("reviews.cta_button")}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>
            </Card>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {reviewsList.map((review: any, idx: number) => (
              <Card key={idx} className="paper-shadow border-border/70 bg-background/70 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-xl border border-border/70 bg-secondary/60 p-3">
                    <Quote className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-sm font-bold">{review.author}</div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-accent fill-accent" />
                        <span className="text-xs font-semibold">{review.rating}</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{review.role}</div>
                    <div className="text-[10px] text-muted-foreground">{review.date}</div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/90 italic">
                      "{review.content}"
                    </p>
                    <div className="mt-3 text-[10px] font-medium text-accent/80">
                      {review.visited}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
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
