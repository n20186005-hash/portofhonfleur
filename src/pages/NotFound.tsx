import { Link } from "wouter";
import { Anchor, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground grain">
      <div className="mx-auto w-full max-w-3xl px-5 py-14 md:px-8">
        <Card className="paper-shadow border-border/70 bg-card/80 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-primary p-3 text-primary-foreground">
              <Anchor className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">页面未找到</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                这个链接可能已被移动或暂未开放。你可以返回首页继续浏览。
              </p>
              <div className="mt-6">
                <Link href="/">
                  <Button className="gap-2" variant="outline">
                    <ArrowLeft className="h-4 w-4" /> 返回首页
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
