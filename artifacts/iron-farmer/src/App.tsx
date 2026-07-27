import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Layout } from '@/components/layout/Layout';

// Import Pages
import Home from '@/pages/Home';
import Mission from '@/pages/Mission';
import SystemsOverview from '@/pages/SystemsOverview';
import PassiveCalorieSystem from '@/pages/PassiveCalorieSystem';
import PlantGuilds from '@/pages/PlantGuilds';
import SitePreparation from '@/pages/SitePreparation';
import RiskAssessment from '@/pages/RiskAssessment';
import HomesteadDefense from '@/pages/HomesteadDefense';
import Principles from '@/pages/Principles';
import Mercantile from '@/pages/Mercantile';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/mission" component={Mission} />
        <Route path="/systems" component={SystemsOverview} />
        <Route path="/systems/passive-calorie-system" component={PassiveCalorieSystem} />
        <Route path="/systems/plant-guilds" component={PlantGuilds} />
        <Route path="/systems/site-preparation" component={SitePreparation} />
        <Route path="/systems/risk-assessment" component={RiskAssessment} />
        <Route path="/systems/homestead-defense" component={HomesteadDefense} />
        <Route path="/principles" component={Principles} />
        <Route path="/mercantile" component={Mercantile} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
