import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Star, ShieldCheck } from 'lucide-react';
import { ProductListing } from '../data/mock-data';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: ProductListing;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-[#10B981]';
    if (score >= 70) return 'text-[#34D399]';
    if (score >= 50) return 'text-[#F59E0B]';
    return 'text-[#EF4444]';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-[#10B981]/10';
    if (score >= 70) return 'bg-[#34D399]/10';
    if (score >= 50) return 'bg-[#F59E0B]/10';
    return 'bg-[#EF4444]/10';
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
      onClick={onClick}
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-muted overflow-hidden">
        <ImageWithFallback
          src={`https://source.unsplash.com/400x400/?${product.image}`}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.verified && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-[#0066FF] hover:bg-[#0052CC] text-white gap-1">
              <ShieldCheck className="w-3 h-3" />
              Verified
            </Badge>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {product.marketplace}
          </Badge>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h4 className="line-clamp-2 min-h-[3rem]">{product.title}</h4>

        {/* Price and Genuineness Score */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl text-[#0066FF]">${product.price}</div>
            <div className="text-xs text-muted-foreground">{product.condition}</div>
          </div>
          <div className={`text-center px-3 py-2 rounded-lg ${getScoreBgColor(product.genuinenessScore)}`}>
            <div className={`text-xl ${getScoreColor(product.genuinenessScore)}`}>
              {product.genuinenessScore}%
            </div>
            <div className="text-xs text-muted-foreground whitespace-nowrap">Genuine</div>
          </div>
        </div>

        {/* Seller Info */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
            <span>{product.sellerRating.toFixed(1)}</span>
            <span className="text-muted-foreground">· {product.seller}</span>
          </div>
        </div>

        {/* Location and Date */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {product.location}
          </div>
          <div>{product.listedDate}</div>
        </div>
      </div>
    </Card>
  );
}