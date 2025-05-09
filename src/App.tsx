
import React from "react";
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

// New dedicated pages
import About from "./pages/About";
import TyreGuide from "./pages/TyreGuide";
import Register from "./pages/Register";
import Testimonials from "./pages/Testimonials";
import Sitemap from "./pages/Sitemap";

// Admin Dashboard Pages
import AdminDashboard from "./pages/admin/Dashboard";
import Pages from "./pages/admin/Pages";
import PageEditor from "./pages/admin/PageEditor";
import SupplierImport from "./pages/admin/SupplierImport";
import InitializeDefaultPages from "./pages/admin/InitializeDefaultPages";

// Create a new QueryClient instance outside of the component
const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
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

              {/* New Dedicated Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/tyre-guide" element={<TyreGuide />} />
              <Route path="/register" element={<Register />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/sitemap" element={<Sitemap />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/pages" element={<Pages />} />
              <Route path="/admin/pages/new" element={<PageEditor />} />
              <Route path="/admin/pages/edit/:id" element={<PageEditor />} />
              <Route path="/admin/supplier-import" element={<SupplierImport />} />
              <Route path="/admin/initialize-pages" element={<InitializeDefaultPages />} />

              {/* Dynamic content pages for remaining routes */}
              <Route path="/faq" element={<PageRoute />} />
              <Route path="/seller-faq" element={<PageRoute />} />
              <Route path="/how-it-works" element={<PageRoute />} />
              <Route path="/contact" element={<PageRoute />} />
              <Route path="/plans" element={<PageRoute />} />
              <Route path="/privacy" element={<PageRoute />} />
              <Route path="/terms" element={<PageRoute />} />
              
              {/* Dynamic catch-all for custom pages */}
              <Route path="/:slug" element={<PageRoute />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
