
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Sellers from "./pages/Sellers";
import RFQ from "./pages/RFQ";
import PageRoute from "./pages/PageRoute";
import Auth from "./pages/Auth";

// Admin Dashboard Pages
import AdminDashboard from "./pages/admin/Dashboard";
import Pages from "./pages/admin/Pages";
import PageEditor from "./pages/admin/PageEditor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sellers" element={<Sellers />} />
            <Route path="/rfq" element={<RFQ />} />
            <Route path="/auth" element={<Auth />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/pages" element={<Pages />} />
            <Route path="/admin/pages/new" element={<PageEditor />} />
            <Route path="/admin/pages/edit/:id" element={<PageEditor />} />

            {/* Dynamic content pages */}
            <Route path="/about" element={<PageRoute />} />
            <Route path="/faq" element={<PageRoute />} />
            <Route path="/how-it-works" element={<PageRoute />} />
            <Route path="/contact" element={<PageRoute />} />
            <Route path="/plans" element={<PageRoute />} />
            <Route path="/privacy" element={<PageRoute />} />
            <Route path="/terms" element={<PageRoute />} />
            <Route path="/seller-faq" element={<PageRoute />} />
            <Route path="/:slug" element={<PageRoute />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
