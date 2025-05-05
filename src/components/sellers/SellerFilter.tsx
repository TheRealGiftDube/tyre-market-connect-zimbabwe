
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';

interface SellerFilterProps {
  onFilterChange: (filters: any) => void;
}

const SellerFilter: React.FC<SellerFilterProps> = ({ onFilterChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-lg font-bold mb-4">Filter Sellers</h3>
      
      <div className="space-y-5">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search by name or brand..." 
            className="pl-10" 
            onChange={(e) => onFilterChange({ search: e.target.value })}
          />
        </div>

        {/* Location Filter */}
        <div>
          <Label htmlFor="location" className="block mb-2">Location</Label>
          <Select onValueChange={(value) => onFilterChange({ location: value })}>
            <SelectTrigger>
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="harare">Harare</SelectItem>
              <SelectItem value="bulawayo">Bulawayo</SelectItem>
              <SelectItem value="mutare">Mutare</SelectItem>
              <SelectItem value="gweru">Gweru</SelectItem>
              <SelectItem value="kwekwe">Kwekwe</SelectItem>
              <SelectItem value="other">Other Cities</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Brand Filter */}
        <div>
          <Label htmlFor="brand" className="block mb-2">Tyre Brand</Label>
          <Select onValueChange={(value) => onFilterChange({ brand: value })}>
            <SelectTrigger>
              <SelectValue placeholder="All Brands" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              <SelectItem value="bridgestone">Bridgestone</SelectItem>
              <SelectItem value="michelin">Michelin</SelectItem>
              <SelectItem value="pirelli">Pirelli</SelectItem>
              <SelectItem value="goodyear">Goodyear</SelectItem>
              <SelectItem value="continental">Continental</SelectItem>
              <SelectItem value="dunlop">Dunlop</SelectItem>
              <SelectItem value="yokohama">Yokohama</SelectItem>
              <SelectItem value="hankook">Hankook</SelectItem>
              <SelectItem value="other">Other Brands</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Seller Type Filters */}
        <div>
          <Label className="block mb-2">Seller Type</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="verified" onCheckedChange={(checked) => onFilterChange({ verified: checked })} />
              <Label htmlFor="verified" className="text-sm">Verified Sellers</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="premium" onCheckedChange={(checked) => onFilterChange({ premium: checked })} />
              <Label htmlFor="premium" className="text-sm">Premium Sellers</Label>
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <Label htmlFor="rating" className="block mb-2">Minimum Rating</Label>
          <Select onValueChange={(value) => onFilterChange({ minRating: parseFloat(value) })}>
            <SelectTrigger>
              <SelectValue placeholder="Any Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Any Rating</SelectItem>
              <SelectItem value="3">3+ Stars</SelectItem>
              <SelectItem value="3.5">3.5+ Stars</SelectItem>
              <SelectItem value="4">4+ Stars</SelectItem>
              <SelectItem value="4.5">4.5+ Stars</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Reset Filter Button */}
        <Button 
          variant="outline" 
          className="w-full border-gray-300"
          onClick={() => onFilterChange({ reset: true })}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default SellerFilter;
