import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowUpRight,
  Camera,
  Clock3,
  Compass,
  MapPin,
  Navigation,
  ParkingCircle,
} from "lucide-react";

import heroImg from "@/assets/photos/vieux-bassin-aerial.webp";
import sailboatsImg from "@/assets/photos/vieux-bassin-sailboats.webp";
import quayImg from "@/assets/photos/carousel-quay.webp";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const GOOGLE_MAPS_PLACE_URL =
  "https://www.google.com/maps/place/Port+of+Honfleur/@49.4200932,0.2302941,17z/data=!4m6!3m5!1s0x47e033bbbc1fa09f:0xb3180f46d65c5a9a!8m2!3d49.4200897!4d0.2328744!16s%2Fg%2F1q5bw1t4q";

const highlights = [
  {
    title: "Vieux Bassin",
    description:
      "Le coeur de Honfleur. C'est ici que l'on profite des reflets, des terrasses, des maisons a colombages et de l'ambiance la plus photogenique du centre historique.",
  },
  {
    title: "Eglise Sainte-Catherine",
    description:
      "La celebre eglise en bois se rejoint en quelques minutes a pied depuis le port. C'est l'un des monuments les plus connus de la ville.",
  },
  {
    title: "Ruelles de la vieille ville",
    description:
      "Entre galeries, petites places et facades normandes, les rues autour du port valent autant la balade que les sites majeurs.",
  },
  {
    title: "Greniers a sel et quartier des galeries",
    description:
      "Une bonne halte pour voir un autre visage de Honfleur, plus calme, plus culturel et moins concentre sur les quais.",
  },
  {
    title: "Jardin des Personnalites",
    description:
      "Si vous avez plus de temps, prolongez la promenade vers ce parc en bord de mer pour respirer et voir Honfleur autrement.",
  },
  {
    title: "Pont de Normandie",
    description:
      "Le meilleur choix pour une vue plus large sur l'estuaire et pour completer une visite d'une demi-journee ou d'une journee.",
  },
];

const itinerary = [
  {
    time: "09:00",
    title: "Commencer par le Vieux Bassin",
    description:
      "Faites le tour des quais tant que la lumiere est douce et que les terrasses sont encore calmes.",
  },
  {
    time: "10:00",
    title: "Visiter Sainte-Catherine et les rues voisines",
    description:
      "Enchainez avec l'eglise, le clocher et les ruelles autour de la place pour garder une boucle de visite tres simple.",
  },
  {
    time: "11:30",
    title: "Explorer les galeries et les Greniers a sel",
    description:
      "C'est le bon moment pour sortir des quais les plus frequentes et ajouter une dimension culturelle a la visite.",
  },
  {
    time: "13:00",
    title: "Pause dejeuner dans la vieille ville",
    description:
      "Revenez vers le port pour dejeuner puis reprenez a pied en direction des points photo les plus tranquilles.",
  },
  {
    time: "15:00",
    title: "Finir par les points de vue et le bord de mer",
    description:
      "Selon votre rythme, poursuivez vers le Jardin des Personnalites ou vers un point de vue plus ouvert avant la fin de journee.",
  },
];

const practicalTips = [
  {
    icon: ParkingCircle,
    title: "Ou se garer",
    description:
      "En haute saison, visez plutot les parkings exterieurs puis rejoignez le centre a pied. C'est souvent plus simple que de tourner autour du port.",
  },
  {
    icon: Clock3,
    title: "Meilleur moment",
    description:
      "Le matin et l'heure bleue sont les meilleurs moments pour voir les reflets sur le bassin et profiter d'une circulation pietonne plus fluide.",
  },
  {
    icon: Camera,
    title: "Photos",
    description:
      "Les angles bas le long des quais et les vues legerement decalees depuis les rues laterales donnent souvent des images plus propres que la place centrale.",
  },
];

export default function QueFaireHonfleur() {
  return (
    <>
      <Helmet>
        <title>Que faire a Honfleur ? 15 lieux a voir + itineraire 1 jour</title>
        <meta
          name="description"
          content="Que faire a Honfleur ? Retrouvez les incontournables du Vieux Bassin, les lieux a voir, un itineraire simple sur 1 jour, les conseils de stationnement et les meilleurs points photo."
        />
        <meta
          property="og:title"
          content="Que faire a Honfleur ? 15 lieux a voir + itineraire 1 jour"
        />
        <meta
          property="og:description"
          content="Un guide pratique pour visiter Honfleur a pied autour du Vieux Bassin, de Sainte-Catherine et des meilleurs points de vue."
        />
        <meta property="og:image" content={heroImg} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground grain">
        <section className="relative overflow-hidden border-b border-border/70">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: `url(${heroImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/25 via-background/70 to-background" />

          <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-16">
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/">
                <Button variant="outline" className="gap-2 bg-background/70">
                  <ArrowLeft className="h-4 w-4" />
                  Retour au port
                </Button>
              </Link>
              <Badge className="border border-border/70 bg-secondary/80 text-foreground">
                Guide en francais
              </Badge>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
              <div>
                <div className="flex items-center gap-2 text-xs tracking-[0.24em] text-muted-foreground">
                  <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
                  <span>HONFLEUR A PIED</span>
                </div>
                <h1 className="mt-3 max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                  Que faire a Honfleur ? 15 lieux a voir + itineraire 1 jour
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/85 md:text-lg">
                  Si vous cherchez que faire a Honfleur, commencez par le Vieux Bassin, les ruelles
                  de la vieille ville et l'eglise Sainte-Catherine. Cette page rassemble les lieux a
                  voir, un itineraire simple et les conseils utiles pour visiter Honfleur sans perdre
                  de temps.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={GOOGLE_MAPS_PLACE_URL} target="_blank" rel="noreferrer">
                    <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                      <Navigation className="h-4 w-4" />
                      Ouvrir Google Maps
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </a>
                  <Link href="/map">
                    <Button variant="outline" className="gap-2 bg-background/70">
                      <MapPin className="h-4 w-4" />
                      Voir la carte
                    </Button>
                  </Link>
                </div>
              </div>

              <Card className="border-border/70 bg-card/80 p-5">
                <div className="text-xs tracking-[0.22em] text-muted-foreground">EN BREF</div>
                <div className="mt-4 grid gap-4 text-sm">
                  <div>
                    <div className="font-semibold">Duree ideale</div>
                    <div className="text-muted-foreground">Une demi-journee a une journee complete.</div>
                  </div>
                  <div>
                    <div className="font-semibold">Zone a privilegier</div>
                    <div className="text-muted-foreground">Vieux Bassin, vieille ville, Sainte-Catherine.</div>
                  </div>
                  <div>
                    <div className="font-semibold">Pour qui</div>
                    <div className="text-muted-foreground">Premiere visite, escapade depuis Paris, balade photo et week-end en Normandie.</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {practicalTips.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-border/70 bg-card/80 p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-primary p-3 text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-secondary/55 py-14 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <div className="flex items-center gap-2 text-xs tracking-[0.24em] text-muted-foreground">
              <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
              <span>INCONTOURNABLES</span>
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Les lieux a voir en priorite a Honfleur
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Pour une premiere visite, inutile de multiplier les detours. Ce sont surtout ces lieux
              qui donnent une vraie lecture de Honfleur et qui repondent a l'intention de recherche
              la plus frequente autour de que faire et que voir a Honfleur.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {highlights.map((item, index) => (
                <Card key={item.title} className="border-border/70 bg-card/80 p-5">
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="flex items-center gap-2 text-xs tracking-[0.24em] text-muted-foreground">
                <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
                <span>ITINERAIRE</span>
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Un itineraire simple sur 1 jour
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Cet ordre de visite evite les allers-retours inutiles et garde le Vieux Bassin comme
                fil conducteur. Il fonctionne bien pour une excursion d'une journee comme pour un
                debut de week-end.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-border/70">
                <img
                  src={sailboatsImg}
                  alt="Voiliers sur le Vieux Bassin a Honfleur"
                  className="h-72 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <Card className="border-border/70 bg-card/80 p-5 md:p-6">
              {itinerary.map((step, index) => (
                <div key={step.time}>
                  <div className="flex items-start gap-4">
                    <div className="min-w-16 text-sm font-semibold text-accent">{step.time}</div>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < itinerary.length - 1 && <Separator className="my-5" />}
                </div>
              ))}
            </Card>
          </div>
        </section>

        <section className="bg-secondary/55 py-14 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <div className="grid gap-8 md:grid-cols-[1fr_0.95fr] md:items-center">
              <Card className="order-2 border-border/70 bg-card/80 p-5 md:order-1">
                <div className="flex items-center gap-2 text-xs tracking-[0.24em] text-muted-foreground">
                  <Compass className="h-4 w-4" />
                  <span>CONSEILS PRATIQUES</span>
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Acces, stationnement et rythme de visite
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Le centre de Honfleur se parcourt tres bien a pied. Le plus efficace consiste a se
                  rapprocher du port sans chercher a tout faire en voiture, puis a garder la vieille
                  ville et le Vieux Bassin dans une meme boucle.
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-foreground/90">
                  <li>Arrivez plutot tot si vous voulez profiter du port dans une ambiance plus calme.</li>
                  <li>Gardez les points photo pour le matin ou la fin de journee.</li>
                  <li>Ajoutez le Jardin des Personnalites ou un point de vue sur l'estuaire seulement si vous avez plus de temps.</li>
                  <li>Pour une premiere visite, le coeur du voyage reste le Vieux Bassin et ses rues adjacentes.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/photos">
                    <Button variant="outline" className="gap-2">
                      <Camera className="h-4 w-4" />
                      Voir les photos
                    </Button>
                  </Link>
                  <Link href="/map">
                    <Button variant="outline" className="gap-2">
                      <MapPin className="h-4 w-4" />
                      Carte et itineraire
                    </Button>
                  </Link>
                </div>
              </Card>

              <div className="order-1 overflow-hidden rounded-2xl border border-border/70 md:order-2">
                <img
                  src={quayImg}
                  alt="Quai du vieux port a Honfleur"
                  className="h-full min-h-[320px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
