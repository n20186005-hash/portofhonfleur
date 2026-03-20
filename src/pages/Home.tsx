import { useMemo } from "react";
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
  const gallery = useMemo(
    () => [
      { src: heroImg, alt: "港湾日落与倒影（来自 Google Maps 地点页）", tag: "Google Maps" },
      { src: sailboatsImg, alt: "Vieux Bassin 船只与沿岸建筑", tag: "公开来源" },
      { src: quayImg, alt: "码头与旋转木马（Hotel de Ville）", tag: "公开来源" },
      { src: aerialImg, alt: "Honfleur 老港航拍", tag: "公开来源" },
      { src: locksImg, alt: "港口闸门与航道航拍", tag: "公开来源" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-background text-foreground grain">
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
              概览
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#photos">
              照片
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#reviews">
              口碑
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#map">
              地图
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#blog">
              博客
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a href={GOOGLE_MAPS_PLACE_URL} target="_blank" rel="noreferrer">
              <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Navigation className="h-4 w-4" />
                打开 Google Maps
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
                  <span className="text-muted-foreground">条 Google 评价</span>
                </Stamp>
                <Badge variant="secondary" className="border border-border/70 bg-secondary/70">
                  Marina
                </Badge>
              </div>

              <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-6xl">
                一座会反光的港湾，
                <span className="text-accent">一眼就记住的 Honfleur</span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">
                Port of Honfleur（翁弗勒尔港）位于诺曼底海岸的老城边缘，步行几分钟即可抵达 Vieux Bassin
                老港、咖啡馆与木桁架建筑群。白天看帆船与码头，傍晚看倒影与灯火，是“随手一拍就像明信片”的地方。
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a href="#map">
                  <Button variant="outline" className="gap-2 bg-background/65">
                    <MapPin className="h-4 w-4" />
                    直接看位置
                  </Button>
                </a>
                <a href="#photos">
                  <Button variant="outline" className="gap-2 bg-background/65">
                    <ImageIcon className="h-4 w-4" />
                    浏览晒图
                  </Button>
                </a>
                <a href="#blog">
                  <Button variant="outline" className="gap-2 bg-background/65">
                    <NotebookPen className="h-4 w-4" />
                    博客（预留）
                  </Button>
                </a>
              </div>
            </div>

            <Card className="paper-shadow overflow-hidden border-border/70 bg-card/75">
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2 text-xs tracking-[0.22em] text-muted-foreground">
                  <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                  QUICK FACTS
                </div>

                <Separator className="my-4" />

                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold">地址</div>
                      <div className="text-sm text-muted-foreground">
                        Quai de la Quarantaine, 14600 Honfleur, France
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 text-accent" />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold">开放时间</div>
                      <div className="text-sm text-muted-foreground">24 小时营业</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-accent" />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold">电话</div>
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
                      用于定位的短坐标，适合在导航应用中快速检索。
                    </p>
                  </div>
                </div>

                <Separator className="my-5" />

                <a href={GOOGLE_MAPS_PLACE_URL} target="_blank" rel="noreferrer">
                  <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                    查看完整评价与更多照片
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
          kicker="PHOTO COLLAGE"
          title="晒图拼贴：把港口装进相册"
          desc="我们优先使用来自地点页与公开旅游信息页的真实照片，做成一套“海报式拼贴”画廊。"
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
                          <div className="mt-1 text-xs text-muted-foreground">素材来源：{img.tag}</div>
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
            kicker="VOICE & IMPRESSION"
            title="口碑与体验：评分背后的共同感受"
            desc="我们已获取到该地点在 Google Maps 上的评分与评价数量。但 Google Maps 对具体评论文字的自动抓取限制较多——为避免误引，我们在此提供“可验证的信息”与直达链接。"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Card className="paper-shadow border-border/70 bg-card/80 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs text-muted-foreground">评分</div>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="text-3xl font-semibold">4.6</div>
                    <Star className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <Badge className="bg-accent text-accent-foreground">STAMP</Badge>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                评分与评价数量来自 Google Maps 地点页（可点击下方按钮验证）。
              </p>
            </Card>

            <Card className="paper-shadow border-border/70 bg-card/80 p-5">
              <div className="text-xs text-muted-foreground">评价数量</div>
              <div className="mt-1 text-3xl font-semibold">25,011</div>
              <p className="mt-3 text-sm text-muted-foreground">
                高评价量意味着你可以看到大量“不同季节/不同时间段”的游客晒图与建议。
              </p>
            </Card>

            <Card className="paper-shadow border-border/70 bg-card/80 p-5">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-primary p-3 text-primary-foreground">
                  <Quote className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">想看具体评论？</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    我们提供直达链接，确保你看到的是最新且完整的真实评论内容。
                  </p>
                </div>
              </div>
              <a className="mt-4 inline-block" href={GOOGLE_MAPS_PLACE_URL} target="_blank" rel="noreferrer">
                <Button className="w-full gap-2" variant="outline">
                  打开 Google Maps 评价
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>
            </Card>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[0, 1].map((idx) => (
              <Card key={idx} className="paper-shadow border-border/70 bg-background/70 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-xl border border-border/70 bg-secondary/60 p-3">
                    <Quote className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold">评论摘录位（预留）</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      由于公开接口限制，我们暂未能在不登录/不人工操作的情况下稳定提取可引用的具体评论文本。
                      如果你希望展示固定几条评论，请把评论文字（或截图）粘贴给我，我可以保持原文排版上墙。
                    </p>
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
          kicker="LOCATION"
          title="地图与路线"
          desc="使用你提供的 Google Maps 嵌入代码。你也可以在新窗口打开地图，进行路线规划、收藏与分享。"
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
                <div className="text-sm font-semibold">到访小建议</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Honfleur 老城适合步行探索：建议把车停在外围停车场，再沿着港口慢慢走到 Vieux Bassin。
                </p>
              </div>
            </div>
            <Separator className="my-5" />
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <div>
                  <div className="font-semibold">黄金时间</div>
                  <div className="text-muted-foreground">傍晚与蓝调时刻：倒影、灯光与人流氛围最浓。</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <div>
                  <div className="font-semibold">拍照点</div>
                  <div className="text-muted-foreground">沿岸建筑一侧的低机位更容易拍到“水面镜像”。</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <div>
                  <div className="font-semibold">路线规划</div>
                  <div className="text-muted-foreground">点击按钮打开 Google Maps 获取实时导航与交通信息。</div>
                </div>
              </div>
            </div>
            <a className="mt-6 inline-block w-full" href={GOOGLE_MAPS_PLACE_URL} target="_blank" rel="noreferrer">
              <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                在 Google Maps 中规划路线
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
            kicker="BLOG SPACE"
            title="博客位置（预留）"
            desc="这里预留给你未来更新：旅行攻略、最佳机位、餐馆清单、季节推荐等。"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="paper-shadow border-border/70 bg-card/80 p-5">
                <div className="flex items-start justify-between">
                  <Badge className="bg-primary text-primary-foreground">Coming Soon</Badge>
                  <NotebookPen className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="mt-4 text-lg font-semibold">文章占位 #{i}</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  你可以在后续把博客内容接入静态 Markdown 或外部 CMS。本区域已预留布局与风格。
                </p>
                <Button
                  className="mt-4 w-full"
                  variant="outline"
                  onClick={() => {
                    // Lightweight placeholder interaction without toast dependency
                    toast.message("博客功能预留中：后续可接入内容系统。", { duration: 2500 });
                  }}
                >
                  阅读（预留）
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/70 bg-background/80">
        <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
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
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Port of Honfleur Guide · Built as a static scenic page.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
