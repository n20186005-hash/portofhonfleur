import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "wouter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Helmet } from "react-helmet-async";
import BlogPageLayout from "@/components/BlogPageLayout";
import NotFound from "@/pages/NotFound";

export default function BlogDetail() {
  const { id } = useParams();
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

  // Valid post IDs
  const validIds = ["post1", "post2", "post3"];

  if (!id || !validIds.includes(id)) {
    return <NotFound />;
  }

  const blog = t(`blogs_content.${id}`, { returnObjects: true }) as {
    title: string;
    description: string;
    content: string;
  };

  if (!blog || !blog.title) {
    return <NotFound />;
  }

  // Metadata for different blogs (mocked as they are not in translations yet)
  const meta: Record<string, { date: string; author: string; category: string }> = {
    post1: { date: "2026-03-20", author: "Travel Guide", category: "Travel" },
    post2: { date: "2026-03-19", author: "Photography Pro", category: "Photography" },
    post3: { date: "2026-03-18", author: "Budget Explorer", category: "Budget" },
  };

  const blogMeta = meta[id] || { date: "2026-03-20", author: "Guide", category: "General" };

  return (
    <>
      <Helmet>
        <title>{blog.title} | Port of Honfleur</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={`${blog.title} | Port of Honfleur`} />
        <meta property="og:description" content={blog.description} />
      </Helmet>

      <BlogPageLayout
        title={blog.title}
        description={blog.description}
        date={blogMeta.date}
        author={blogMeta.author}
        category={blogMeta.category}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {blog.content}
        </ReactMarkdown>
      </BlogPageLayout>
    </>
  );
}
