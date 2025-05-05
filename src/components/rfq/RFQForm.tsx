
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/components/ui/use-toast';

const RFQForm = () => {
  const [loading, setLoading] = useState(false);

  // Mock locations for the select dropdown
  const locations = [
    'Harare',
    'Bulawayo',
    'Chitungwiza',
    'Mutare',
    'Gweru',
    'Kwekwe',
    'Kadoma',
    'Masvingo',
    'Chinhoyi',
    'Victoria Falls',
    'All Zimbabwe'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "RFQ submitted successfully!",
        description: "Tyre sellers will contact you with quotes soon.",
      });
    }, 1500);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Request for Quotation</CardTitle>
        <CardDescription>
          Fill out the form below to receive quotes from verified tyre sellers in Zimbabwe.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" placeholder="+263 77 123 4567" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="vehicleDetails">Vehicle Details (Optional)</Label>
              <Input id="vehicleDetails" placeholder="Year, Make, Model (e.g., 2018 Toyota Hilux)" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tyreSize">Tyre Size</Label>
                <Input id="tyreSize" placeholder="e.g., 205/55R16" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Select defaultValue="4">
                  <SelectTrigger>
                    <SelectValue placeholder="Select quantity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 tyre</SelectItem>
                    <SelectItem value="2">2 tyres</SelectItem>
                    <SelectItem value="3">3 tyres</SelectItem>
                    <SelectItem value="4">4 tyres</SelectItem>
                    <SelectItem value="5+">5+ tyres</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range (Optional)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="mid-range">Mid-range</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="any">Any</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="preferredBrands">Preferred Brands (Optional)</Label>
              <Input id="preferredBrands" placeholder="e.g., Michelin, Bridgestone, Pirelli" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="additionalNotes">Additional Requirements or Questions</Label>
              <Textarea id="additionalNotes" placeholder="Any specific requirements or questions for the sellers..." />
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm">
                I agree to the Terms of Service and Privacy Policy. Sellers may contact me regarding this RFQ.
              </Label>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90" disabled={loading}>
            {loading ? "Submitting..." : "Submit RFQ"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default RFQForm;
