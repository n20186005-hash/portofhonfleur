import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
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

  // Get all blog posts from translations
  const blogPosts = ["post1", "post2", "post3"].map(id => ({
    id,
    title: t(`blogs_content.${id}.title`),
    description: t(`blogs_content.${id}.description`),
    category: id === "post1" ? "Guide" : id === "post2" ? "Photo" : "Budget"
  }));

  return (
    <>
      <Helmet>
        <title>{t("blog.title")} | Port of Honfleur</title>
        <meta name="description" content={t("blog.desc")} />
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
            <div className="mb-8 flex flex-col gap-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {t("blog.title")}
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                {t("blog.desc")}
              </p>
            </div>

            <div className="grid gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="paper-shadow border-border/70 bg-card/80 p-6 transition-all hover:bg-card/90">
                  <div className="flex items-start justify-between">
                    <Badge className="bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                    <NotebookPen className="h-5 w-5 text-muted-foreground" />
                  </div>
                  
                  <div className="mt-4">
                    <h2 className="text-xl font-semibold text-foreground">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      {post.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    <Link href={`/blog/${post.id}`}>
                      <Button className="w-full" variant="outline">
                        {t("blog.read_button")}
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <footer className="mt-16 border-t border-border/70 pt-10 text-center">
            <div className="text-sm text-muted-foreground">
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}