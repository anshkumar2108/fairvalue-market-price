import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Star, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Package, 
  TrendingDown,
  TrendingUp,
  AlertCircle,
  ExternalLink,
  Share2,
  Heart,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { ProductListing } from '../data/mock-data';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Separator } from './ui/separator';

interface ProductDetailModalProps {
  product: ProductListing | null;
  isOpen: boolean;
  onClose: () => void;
  averagePrice: number;
}

export function ProductDetailModal({ product, isOpen, onClose, averagePrice }: ProductDetailModalProps) {
  if (!product) return null;

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

  const priceDifference = product.price - averagePrice;
  const pricePercentage = ((priceDifference / averagePrice) * 100).toFixed(1);
  const isPriceGood = priceDifference < 0;

  const genuinenessFactors = [
    { label: 'Seller Reputation', score: product.sellerRating * 20, passed: product.sellerRating >= 4.5 },
    { label: 'Product Photos Quality', score: 92, passed: true },
    { label: 'Description Accuracy', score: product.genuinenessScore, passed: product.genuinenessScore >= 80 },
    { label: 'Price vs Market', score: isPriceGood ? 95 : 70, passed: isPriceGood },
    { label: 'Seller Verification', score: product.verified ? 100 : 50, passed: product.verified },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl pr-8">{product.title}</DialogTitle>
          <DialogDescription>
            Listed {product.listedDate} on {product.marketplace} · {product.location}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
              <ImageWithFallback
                src={`https://source.unsplash.com/800x800/?${product.image}`}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {product.verified && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#0066FF] hover:bg-[#0052CC] text-white gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    Verified Seller
                  </Badge>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="gap-2">
                <Heart className="w-4 h-4" />
                Save
              </Button>
              <Button variant="outline" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Price Section */}
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl text-[#0066FF]">${product.price}</span>
                <Badge variant="secondary" className="text-xs">
                  {product.condition}
                </Badge>
              </div>
              
              {/* Price Comparison */}
              <div className={`flex items-center gap-2 text-sm ${isPriceGood ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                {isPriceGood ? (
                  <TrendingDown className="w-4 h-4" />
                ) : (
                  <TrendingUp className="w-4 h-4" />
                )}
                <span>
                  {isPriceGood ? '' : '+'}{pricePercentage}% {isPriceGood ? 'below' : 'above'} market average (${averagePrice})
                </span>
              </div>
            </div>

            <Separator />

            {/* Genuineness Score */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4>Genuineness Score</h4>
                <div className={`px-4 py-2 rounded-lg ${getScoreBgColor(product.genuinenessScore)}`}>
                  <span className={`text-2xl ${getScoreColor(product.genuinenessScore)}`}>
                    {product.genuinenessScore}%
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                {genuinenessFactors.map((factor, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      {factor.passed ? (
                        <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                      ) : (
                        <XCircle className="w-4 h-4 text-[#EF4444]" />
                      )}
                      <span>{factor.label}</span>
                    </div>
                    <span className="text-muted-foreground">{factor.score}%</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Seller Information */}
            <div>
              <h4 className="mb-3">Seller Information</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Seller</span>
                  <span>{product.seller}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                    <span>{product.sellerRating.toFixed(1)}/5.0</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{product.location}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Listed</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{product.listedDate}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Marketplace</span>
                  <Badge variant="outline">{product.marketplace}</Badge>
                </div>
              </div>
            </div>

            <Separator />

            {/* Product Details */}
            <div>
              <h4 className="mb-3">Product Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Package className="w-4 h-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground mb-1">Condition Details:</p>
                    <p>
                      {product.condition === 'Excellent' && 'Device is in excellent condition with minimal signs of use. Screen is perfect with no scratches. All functions work perfectly.'}
                      {product.condition === 'Like New' && 'Device looks and functions like new. May have been used once or twice. Original packaging included.'}
                      {product.condition === 'Good' && 'Device shows normal signs of use but functions perfectly. Minor cosmetic imperfections may be present.'}
                      {product.condition === 'Fair' && 'Device has visible wear and tear. All major functions work but may have cosmetic damage.'}
                      {product.condition === 'New' && 'Brand new, never used. Sealed in original packaging with all accessories.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning for suspicious listings */}
            {product.genuinenessScore < 70 && (
              <div className="p-4 bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-lg">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-[#F59E0B] mb-1">Proceed with Caution</p>
                    <p className="text-muted-foreground">
                      This listing has a lower genuineness score. Please verify all details before purchasing.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* CTA Button */}
            <Button className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white gap-2" size="lg">
              View on {product.marketplace}
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}