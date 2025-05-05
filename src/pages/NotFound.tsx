
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Common pages to suggest based on what the user might be looking for
  const suggestedLinks = [
    { name: "Home", path: "/" },
    { name: "Find Tyre Sellers", path: "/sellers" },
    { name: "Request for Quotation", path: "/rfq" },
    { name: "About Us", path: "/about" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Contact Us", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <h1 className="text-5xl font-bold mb-4 text-red-500">404</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! Page not found</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <div className="mb-8">
          <Link 
            to="/" 
            className="bg-brand-blue text-white px-6 py-3 rounded-md hover:bg-brand-blue/90 transition-colors"
          >
            Return to Home
          </Link>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-lg font-semibold mb-4">You might be looking for:</h2>
          <ul className="space-y-2">
            {suggestedLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-brand-blue hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
