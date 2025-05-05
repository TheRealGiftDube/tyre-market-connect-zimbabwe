
import React from 'react';

// Mock tyre brands
const brands = [
  { id: 1, name: 'Michelin', logo: 'https://placehold.co/150x80?text=Michelin' },
  { id: 2, name: 'Bridgestone', logo: 'https://placehold.co/150x80?text=Bridgestone' },
  { id: 3, name: 'Pirelli', logo: 'https://placehold.co/150x80?text=Pirelli' },
  { id: 4, name: 'Continental', logo: 'https://placehold.co/150x80?text=Continental' },
  { id: 5, name: 'Goodyear', logo: 'https://placehold.co/150x80?text=Goodyear' },
  { id: 6, name: 'Dunlop', logo: 'https://placehold.co/150x80?text=Dunlop' },
  { id: 7, name: 'Yokohama', logo: 'https://placehold.co/150x80?text=Yokohama' },
  { id: 8, name: 'Hankook', logo: 'https://placehold.co/150x80?text=Hankook' },
];

const PartnerBrands = () => {
  return (
    <section className="py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Find Tyres from Popular Brands</h2>
          <p className="text-gray-500">
            Our sellers offer tyres from these leading brands and more
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {brands.map((brand) => (
            <div key={brand.id} className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-h-12 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;
