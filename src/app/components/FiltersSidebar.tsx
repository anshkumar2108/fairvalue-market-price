import React from 'react';
import { Card } from './ui/card';
import { Slider } from './ui/slider';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { marketplaces } from '../data/mock-data';

interface FiltersSidebarProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedMarketplaces: string[];
  setSelectedMarketplaces: (marketplaces: string[]) => void;
  minGenuineness: number;
  setMinGenuineness: (value: number) => void;
}

export function FiltersSidebar({
  priceRange,
  setPriceRange,
  selectedMarketplaces,
  setSelectedMarketplaces,
  minGenuineness,
  setMinGenuineness,
}: FiltersSidebarProps) {
  const toggleMarketplace = (marketplace: string) => {
    if (selectedMarketplaces.includes(marketplace)) {
      setSelectedMarketplaces(selectedMarketplaces.filter(m => m !== marketplace));
    } else {
      setSelectedMarketplaces([...selectedMarketplaces, marketplace]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Price Range Filter */}
      <Card className="p-6">
        <h4 className="mb-4">Price Range</h4>
        <div className="space-y-4">
          <Slider
            min={0}
            max={2000}
            step={50}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm">
            <div className="px-3 py-1.5 bg-muted rounded">
              ${priceRange[0]}
            </div>
            <span className="text-muted-foreground">to</span>
            <div className="px-3 py-1.5 bg-muted rounded">
              ${priceRange[1]}
            </div>
          </div>
        </div>
      </Card>

      {/* Genuineness Score Filter */}
      <Card className="p-6">
        <h4 className="mb-4">Minimum Genuineness</h4>
        <div className="space-y-4">
          <Slider
            min={0}
            max={100}
            step={5}
            value={[minGenuineness]}
            onValueChange={(value) => setMinGenuineness(value[0])}
            className="w-full"
          />
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Score</span>
            <div className="text-lg px-3 py-1 bg-[#0066FF]/10 text-[#0066FF] rounded">
              {minGenuineness}%
            </div>
          </div>
        </div>
      </Card>

      {/* Marketplace Toggles */}
      <Card className="p-6">
        <h4 className="mb-4">Marketplaces</h4>
        <div className="space-y-3">
          {marketplaces.map((marketplace) => (
            <div key={marketplace} className="flex items-center justify-between">
              <Label htmlFor={marketplace} className="cursor-pointer font-normal">
                {marketplace}
              </Label>
              <Switch
                id={marketplace}
                checked={selectedMarketplaces.includes(marketplace)}
                onCheckedChange={() => toggleMarketplace(marketplace)}
              />
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Stats */}
      <Card className="p-6 bg-[#0066FF]/5 border-[#0066FF]/20">
        <h4 className="mb-3">Quick Stats</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Active Listings</span>
            <span>1,247</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Avg Response Time</span>
            <span>2.4 hrs</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Price Updated</span>
            <span>5 min ago</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
