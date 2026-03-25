import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowLeft, Anchor, Shield, FileText, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

interface LegalPageLayoutProps {
  title: string;
  icon: ReactNode;
  lastUpdated: string;
  children: ReactNode;
}

const FOOTER_SUPPORT_TEXT =
  "For technical support of this website, please contact: claritleonelmnicol@gmail.com";

export default function LegalPageLayout({
  title,
  icon,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground grain">
      <div className="mx-auto w-full max-w-5xl px-5 py-10 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              返回首页
            </Button>
          </Link>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Anchor className="h-4 w-4" />
            Port of Honfleur
          </div>
        </div>

        <Card className="paper-shadow mt-8 overflow-hidden border-border/70 bg-card/85">
          <div className="border-b border-border/70 bg-secondary/60 p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-xl bg-primary text-primary-foreground p-3">{icon}</div>
              <div className="min-w-0">
                <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  {title}
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">最后更新：{lastUpdated}</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="space-y-5 leading-relaxed text-sm md:text-base">
              <div className="[&>h2]:mt-8 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2:first-child]:mt-0 [&>p]:text-foreground/85 [&>ul]:list-disc [&>ul]:pl-6 [&>li]:my-1 [&_a]:text-accent [&_a:hover]:underline">
                {children}
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/privacy">
            <Button variant="ghost" className="gap-2">
              <Shield className="h-4 w-4" /> Privacy Policy
            </Button>
          </Link>
          <Link href="/terms">
            <Button variant="ghost" className="gap-2">
              <FileText className="h-4 w-4" /> Terms of Service
            </Button>
          </Link>
          <Link href="/cookies">
            <Button variant="ghost" className="gap-2">
              <Cookie className="h-4 w-4" /> Cookie Settings
            </Button>
          </Link>
        </div>

        <div className="mt-10 text-center text-sm text-muted-foreground">
          {FOOTER_SUPPORT_TEXT}
        </div>
        <div className="mt-2 text-center text-xs text-muted-foreground">
          {t("footer.data_source")}
        </div>
      </div>
    </div>
  );
}

export const LegalIcons = {
  privacy: <Shield className="h-5 w-5" />,
  terms: <FileText className="h-5 w-5" />,
  cookies: <Cookie className="h-5 w-5" />,
};
