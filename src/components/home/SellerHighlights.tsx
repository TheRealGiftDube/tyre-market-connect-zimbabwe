
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock seller data
const featuredSellers = [
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
  },
];

const SellerHighlights = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Featured Tyre Sellers</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover top-rated tyre sellers who offer quality products, competitive prices, and excellent service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSellers.map((seller) => (
            <Card 
              key={seller.id} 
              className={`border ${seller.premium ? 'border-brand-orange' : 'border-gray-200'} overflow-hidden hover:shadow-lg transition-shadow duration-300`}
            >
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <img 
                        src={seller.logo} 
                        alt={seller.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-lg font-bold">{seller.name}</h3>
                          {seller.verified && (
                            <Badge variant="outline" className="ml-2 bg-blue-50 text-brand-blue border-brand-blue">
                              Verified
                            </Badge>
                          )}
                          {seller.premium && (
                            <Badge className="ml-2 bg-amber-500">
                              Premium
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center text-amber-500 mt-1">
                          <Star className="w-4 h-4 fill-amber-500" />
                          <span className="ml-1 text-sm">{seller.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-start gap-1 text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>{seller.location}</span>
                    </div>
                    <div className="flex items-start gap-1 text-gray-600 mb-4">
                      <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>{seller.phone}</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">Brands:</p>
                      <div className="flex flex-wrap gap-1">
                        {seller.brands.map((brand, index) => (
                          <Badge variant="secondary" key={index} className="bg-gray-100">
                            {brand}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 p-4 flex justify-between items-center bg-gray-50">
                  <Link to={`/sellers/${seller.id}`}>
                    <Button variant="outline" className="text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white">
                      View Profile
                    </Button>
                  </Link>
                  <Link to={`/rfq?seller=${seller.id}`}>
                    <Button className="bg-brand-blue hover:bg-brand-blue/90">
                      Request Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/sellers">
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">
              View All Sellers
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SellerHighlights;
