
import React, { useState, useEffect } from 'react';
import SellerCard, { Seller } from './SellerCard';
import SellerFilter from './SellerFilter';

// Mock seller data
const initialSellers: Seller[] = [
  {
    id: 1,
    name: 'Tyre City Zimbabwe',
    logo: 'https://placehold.co/100x100?text=TC',
    rating: 4.8,
    location: 'Harare',
    brands: ['Bridgestone', 'Pirelli', 'Michelin'],
    phone: '+263 77 123 4567',
    verified: true,
    premium: true,
    description: 'Leading tyre distributor in Harare with a wide selection of premium brands.',
  },
  {
    id: 2,
    name: 'Zim Tyres & Wheels',
    logo: 'https://placehold.co/100x100?text=ZTW',
    rating: 4.5,
    location: 'Bulawayo',
    brands: ['Goodyear', 'Continental', 'Dunlop'],
    phone: '+263 77 987 6543',
    verified: true,
    premium: false,
    description: 'Family-owned tyre shop serving Bulawayo for over 15 years.',
  },
  {
    id: 3,
    name: 'Safari Tyre Centre',
    logo: 'https://placehold.co/100x100?text=STC',
    rating: 4.6,
    location: 'Mutare',
    brands: ['Yokohama', 'BF Goodrich', 'Hankook'],
    phone: '+263 77 456 7890',
    verified: true,
    premium: true,
    description: 'Specializing in off-road and all-terrain tyres for safari adventures.',
  },
  {
    id: 4,
    name: 'Kwekwe Tyre Services',
    logo: 'https://placehold.co/100x100?text=KTS',
    rating: 4.2,
    location: 'Kwekwe',
    brands: ['Dunlop', 'Kumho', 'Firestone'],
    phone: '+263 77 234 5678',
    verified: true,
    premium: false,
    description: 'Affordable tyre solutions for all vehicle types.',
  },
  {
    id: 5,
    name: 'Victoria Falls Tyres',
    logo: 'https://placehold.co/100x100?text=VFT',
    rating: 4.7,
    location: 'Victoria Falls',
    brands: ['Michelin', 'Continental', 'Goodyear'],
    phone: '+263 77 345 6789',
    verified: true,
    premium: true,
    description: 'Premium tyre shop serving Victoria Falls and surrounding areas.',
  },
  {
    id: 6,
    name: 'Masvingo Auto Tyres',
    logo: 'https://placehold.co/100x100?text=MAT',
    rating: 4.0,
    location: 'Masvingo',
    brands: ['Bridgestone', 'Yokohama', 'Falken'],
    phone: '+263 77 456 7891',
    verified: false,
    premium: false,
    description: 'Competitive prices on a wide range of tyre brands.',
  },
];

const SellersList = () => {
  const [sellers, setSellers] = useState<Seller[]>(initialSellers);
  const [filters, setFilters] = useState({
    search: '',
    location: 'all',
    brand: 'all',
    verified: false,
    premium: false,
    minRating: 0,
  });

  const handleFilterChange = (newFilters: any) => {
    if (newFilters.reset) {
      // Reset all filters
      setFilters({
        search: '',
        location: 'all',
        brand: 'all',
        verified: false,
        premium: false,
        minRating: 0,
      });
    } else {
      // Update specific filter
      setFilters({ ...filters, ...newFilters });
    }
  };

  useEffect(() => {
    // Apply filters to the seller list
    let filteredSellers = [...initialSellers];
    
    // Filter by search term
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredSellers = filteredSellers.filter(seller => 
        seller.name.toLowerCase().includes(searchLower) || 
        seller.brands.some(brand => brand.toLowerCase().includes(searchLower))
      );
    }
    
    // Filter by location
    if (filters.location && filters.location !== 'all') {
      filteredSellers = filteredSellers.filter(seller => 
        seller.location.toLowerCase() === filters.location.toLowerCase()
      );
    }
    
    // Filter by brand
    if (filters.brand && filters.brand !== 'all') {
      filteredSellers = filteredSellers.filter(seller => 
        seller.brands.some(brand => brand.toLowerCase() === filters.brand.toLowerCase())
      );
    }
    
    // Filter by verification status
    if (filters.verified) {
      filteredSellers = filteredSellers.filter(seller => seller.verified);
    }
    
    // Filter by premium status
    if (filters.premium) {
      filteredSellers = filteredSellers.filter(seller => seller.premium);
    }
    
    // Filter by minimum rating
    if (filters.minRating > 0) {
      filteredSellers = filteredSellers.filter(seller => 
        seller.rating >= filters.minRating
      );
    }
    
    setSellers(filteredSellers);
  }, [filters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1">
        <SellerFilter onFilterChange={handleFilterChange} />
      </div>
      <div className="md:col-span-3">
        {sellers.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sellers.map(seller => (
              <SellerCard key={seller.id} seller={seller} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No sellers found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellersList;
