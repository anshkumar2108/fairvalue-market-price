import React, { useState } from 'react';
import { Search, X, Star, MapPin, Package } from 'lucide-react';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface FilterTag {
  id: string;
  type: 'condition' | 'region' | 'rating';
  label: string;
  value: string;
}

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  const [filterTags, setFilterTags] = useState<FilterTag[]>([
    { id: '1', type: 'condition', label: 'Condition', value: 'Excellent' },
    { id: '2', type: 'rating', label: 'Seller Rating', value: '4.5+' },
  ]);

  const removeTag = (id: string) => {
    setFilterTags(filterTags.filter(tag => tag.id !== id));
  };

  const addConditionFilter = (value: string) => {
    const existingTag = filterTags.find(t => t.type === 'condition');
    if (existingTag) {
      setFilterTags(filterTags.map(t => 
        t.type === 'condition' ? { ...t, value } : t
      ));
    } else {
      setFilterTags([...filterTags, {
        id: Date.now().toString(),
        type: 'condition',
        label: 'Condition',
        value,
      }]);
    }
  };

  const addRegionFilter = (value: string) => {
    const existingTag = filterTags.find(t => t.type === 'region');
    if (existingTag) {
      setFilterTags(filterTags.map(t => 
        t.type === 'region' ? { ...t, value } : t
      ));
    } else {
      setFilterTags([...filterTags, {
        id: Date.now().toString(),
        type: 'region',
        label: 'Region',
        value,
      }]);
    }
  };

  const getTagIcon = (type: string) => {
    switch (type) {
      case 'condition':
        return <Package className="w-3 h-3" />;
      case 'region':
        return <MapPin className="w-3 h-3" />;
      case 'rating':
        return <Star className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for products (e.g., iPhone 15 Pro, MacBook Air...)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12 pr-4 h-14 text-lg bg-card border-2 focus-visible:border-[#0066FF] focus-visible:ring-[#0066FF]/20"
        />
      </div>

      {/* Filter Tags and Advanced Filters */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Active Filter Tags */}
        {filterTags.map((tag) => (
          <Badge
            key={tag.id}
            variant="secondary"
            className="px-3 py-1.5 gap-2 bg-[#0066FF]/10 text-[#0066FF] hover:bg-[#0066FF]/20"
          >
            {getTagIcon(tag.type)}
            <span className="text-xs">
              {tag.label}: {tag.value}
            </span>
            <button
              onClick={() => removeTag(tag.id)}
              className="hover:text-[#0052CC]"
            >
              <X className="w-3 h-3" />
            </button>
          </Badge>
        ))}

        {/* Add Filter Dropdowns */}
        <Select onValueChange={addConditionFilter}>
          <SelectTrigger className="w-[140px] h-9 border-dashed">
            <SelectValue placeholder="+ Condition" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="New">New</SelectItem>
            <SelectItem value="Like New">Like New</SelectItem>
            <SelectItem value="Excellent">Excellent</SelectItem>
            <SelectItem value="Good">Good</SelectItem>
            <SelectItem value="Fair">Fair</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={addRegionFilter}>
          <SelectTrigger className="w-[140px] h-9 border-dashed">
            <SelectValue placeholder="+ Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Northeast">Northeast</SelectItem>
            <SelectItem value="Southeast">Southeast</SelectItem>
            <SelectItem value="Midwest">Midwest</SelectItem>
            <SelectItem value="Southwest">Southwest</SelectItem>
            <SelectItem value="West">West</SelectItem>
          </SelectContent>
        </Select>

        {filterTags.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setFilterTags([])}
            className="h-9 text-muted-foreground hover:text-foreground"
          >
            Clear All
          </Button>
        )}
      </div>
    </div>
  );
}
