import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowLeft, Anchor, Clock, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

interface BlogPageLayoutProps {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  children: ReactNode;
}

export default function BlogPageLayout({
  title,
  description,
  date,
  author,
  category,
  children,
}: BlogPageLayoutProps) {
  const { t } = useTranslation();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-background text-foreground grain">
      <div className="mx-auto w-full max-w-4xl px-5 py-10 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t("nav.overview")}
            </Button>
          </Link>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Anchor className="h-4 w-4" />
            Port of Honfleur
          </div>
        </div>

        <article className="mt-10">
          <div className="mb-8 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                {category}
              </Badge>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {date}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <User className="h-3.5 w-3.5" />
                {author}
              </div>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              {description}
            </p>

            <div className="flex items-center gap-4 border-y border-border/50 py-4">
              <Button variant="ghost" size="sm" className="gap-2" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          <Card className="paper-shadow overflow-hidden border-border/70 bg-card/85">
            <div className="p-6 md:p-10">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <div className="space-y-6 leading-relaxed text-base md:text-lg">
                  <div className="[&>h3]:mt-10 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-foreground [&>h3:first-child]:mt-0 
                                  [&>h4]:mt-8 [&>h4]:text-xl [&>h4]:font-semibold [&>h4]:text-foreground/90
                                  [&>p]:text-foreground/85 [&>p]:my-4
                                  [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:my-4 [&>li]:my-2
                                  [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:my-4
                                  [&_strong]:text-foreground [&_strong]:font-semibold
                                  [&_blockquote]:border-l-4 [&_blockquote]:border-primary/50 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </article>

        <footer className="mt-16 border-t border-border/70 pt-10 text-center">
          <div className="mb-2 text-xs text-muted-foreground">
            {t("footer.data_source")}
          </div>
          <div className="text-sm text-muted-foreground">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </div>
        </footer>
      </div>
    </div>
  );
}
