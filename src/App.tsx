
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { useEffect } from "react";
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
import SupplierImport from "./pages/admin/SupplierImport";
import InitializeDefaultPages from "./pages/admin/InitializeDefaultPages";

const queryClient = new QueryClient();

// ScrollToTop component to handle scrolling on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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
            <Route path="/admin/supplier-import" element={<SupplierImport />} />
            <Route path="/admin/initialize-pages" element={<InitializeDefaultPages />} />

            {/* Dynamic content pages - specific routes first */}
            <Route path="/about" element={<PageRoute />} />
            <Route path="/faq" element={<PageRoute />} />
            <Route path="/how-it-works" element={<PageRoute />} />
            <Route path="/contact" element={<PageRoute />} />
            <Route path="/plans" element={<PageRoute />} />
            <Route path="/privacy" element={<PageRoute />} />
            <Route path="/terms" element={<PageRoute />} />
            <Route path="/seller-faq" element={<PageRoute />} />
            
            {/* Dynamic catch-all for custom pages */}
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
