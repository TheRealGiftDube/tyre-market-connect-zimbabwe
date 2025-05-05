
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Seller {
  id: number;
  name: string;
  logo: string;
  rating: number;
  location: string;
  brands: string[];
  phone: string;
  verified: boolean;
  premium: boolean;
  description?: string;
}

interface SellerCardProps {
  seller: Seller;
}

const SellerCard: React.FC<SellerCardProps> = ({ seller }) => {
  return (
    <Card 
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
            {seller.description && (
              <p className="text-sm text-gray-600 mt-2">{seller.description}</p>
            )}
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
  );
};

export default SellerCard;
