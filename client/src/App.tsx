import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Switch, Route, Redirect } from "wouter";
import { useUser } from "@/hooks/use-user";
import { Loader2 } from "lucide-react";
import Dashboard from "@/pages/dashboard";
import AuthPage from "@/pages/auth-page";
import NotFound from "@/pages/not-found";
import LandingPage from "./pages/landing";
import Overview from "./pages/overview";
import FoundationalTeachings from "./pages/foundational-teachings";
import BeginnersGuide from "./pages/beginners-guide";
import TermsOfServitude from "./pages/terms-of-servitude";
import PersonalityPurgeSurvey from "./pages/personality-purge-survey";
import PersonalityPurgeSurveyForm from "./pages/personality-purge-survey-form";
import Profile from "./pages/profile";
import EternalAxiom from "./pages/eternal-axiom";

function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Redirect to="/auth" />;
  }

  return <Component />;
}

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/dashboard">
        {() => <ProtectedRoute component={Dashboard} />}
      </Route>
      <Route path="/profile">
        {() => <ProtectedRoute component={Profile} />}
      </Route>
      <Route path="/overview">
        {() => <ProtectedRoute component={Overview} />}
      </Route>
      <Route path="/foundational-teachings">
        {() => <ProtectedRoute component={FoundationalTeachings} />}
      </Route>
      <Route path="/beginners-guide">
        {() => <ProtectedRoute component={BeginnersGuide} />}
      </Route>
      <Route path="/personality-purge-survey">
        {() => <ProtectedRoute component={PersonalityPurgeSurvey} />}
      </Route>
      <Route path="/personality-purge-survey/form">
        {() => <ProtectedRoute component={PersonalityPurgeSurveyForm} />}
      </Route>
      <Route path="/eternal-axiom">
        {() => <ProtectedRoute component={EternalAxiom} />}
      </Route>
      <Route path="/terms-of-servitude" component={TermsOfServitude} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
