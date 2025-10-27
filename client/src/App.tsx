import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Produtor from "./pages/Produtor";
import Intermediario from "./pages/Intermediario";
import Comercio from "./pages/Comercio";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import AppProdutorStarter from "./pages/app/AppProdutorStarter";
import AppIntermediarioBasico from "./pages/app/AppIntermediarioBasico";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/produtor"} component={Produtor} />
          <Route path={"/intermediario"} component={Intermediario} />
          <Route path={"/comercio"} component={Comercio} />
          <Route path={"/sobre"} component={Sobre} />
          <Route path={"/contato"} component={Contato} />
          <Route path={"/app/produtor-starter"} component={AppProdutorStarter} />
          <Route path={"/app/intermediario-basico"} component={AppIntermediarioBasico} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
