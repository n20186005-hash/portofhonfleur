import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { FloatingSwitcher } from "@/components/FloatingSwitcher";
import { SEOHead } from "@/components/SEOHead";
import Home from "@/pages/Home";
import Map from "@/pages/Map";
import Photos from "@/pages/Photos";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookieSettings from "@/pages/CookieSettings";
import NotFound from "@/pages/NotFound";

function AppRouter() {
  // Extract language prefix for wouter base path
  const path = window.location.pathname;
  const match = path.match(/^\/([a-z]{2}(-[a-zA-Z]{2})?)(\/|$)/i);
  const supportedLangs = ["en", "fr", "es", "de", "ja", "ko", "zh-cn", "zh-tw"];
  
  let basePath = "";
  if (match && supportedLangs.includes(match[1].toLowerCase())) {
    basePath = `/${match[1]}`;
  }

  return (
    <Router base={basePath}>
      <SEOHead />
      <Switch>
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/terms" component={TermsOfService} />
        <Route path="/cookies" component={CookieSettings} />
        <Route path="/map" component={Map} />
        <Route path="/photos" component={Photos} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogDetail} />
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="system">
        <TooltipProvider>
          <Toaster />
          <FloatingSwitcher />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
