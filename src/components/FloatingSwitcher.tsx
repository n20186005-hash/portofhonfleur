import * as React from "react";
import { useTranslation } from "react-i18next";
import { Moon, Sun, Languages, Laptop } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "de", name: "Deutsch" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
  { code: "zh-CN", name: "简体中文" },
  { code: "zh-TW", name: "繁體中文" },
];

export function FloatingSwitcher() {
  const { i18n } = useTranslation();
  const { setTheme } = useTheme();

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    
    // Update URL to match new language for SEO
    const path = window.location.pathname;
    const match = path.match(/^\/([a-z]{2}(-[a-zA-Z]{2})?)(\/|$)/i);
    const supportedLangs = languages.map(l => l.code.toLowerCase());
    
    let cleanPath = path;
    if (match && supportedLangs.includes(match[1].toLowerCase())) {
      cleanPath = '/' + path.substring(match[1].length + 2); // +2 for leading and trailing slash (or end)
    }
    if (cleanPath === '//') cleanPath = '/';
    if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
    
    const newPath = `/${code.toLowerCase()}${cleanPath === '/' ? '' : cleanPath}${window.location.search}${window.location.hash}`;
    window.location.href = newPath;
  };

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col gap-2 md:top-24 md:right-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-md paper-shadow border-border/70"
          >
            <Languages className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Switch Language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-md">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={i18n.language === lang.code ? "bg-accent" : ""}
            >
              {lang.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-md paper-shadow border-border/70"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-md">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            <Laptop className="mr-2 h-4 w-4" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
