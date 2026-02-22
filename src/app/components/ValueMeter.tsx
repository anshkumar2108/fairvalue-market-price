import React from 'react';
import { Card } from './ui/card';

interface ValueMeterProps {
  price: number;
  averagePrice: number;
}

export function ValueMeter({ price, averagePrice }: ValueMeterProps) {
  // Calculate the value rating
  const calculateValue = () => {
    const difference = ((price - averagePrice) / averagePrice) * 100;
    
    if (difference < -15) return { label: 'Great Deal', color: '#10B981', percentage: 85 };
    if (difference < -5) return { label: 'Good Value', color: '#34D399', percentage: 65 };
    if (difference < 10) return { label: 'Fair Price', color: '#F59E0B', percentage: 50 };
    if (difference < 20) return { label: 'Slightly High', color: '#FB923C', percentage: 35 };
    return { label: 'Overpriced', color: '#EF4444', percentage: 15 };
  };

  const value = calculateValue();
  const rotation = (value.percentage / 100) * 180 - 90; // -90 to 90 degrees

  return (
    <Card className="p-6">
      <h3 className="mb-6">Value Meter</h3>
      
      <div className="relative w-full max-w-sm mx-auto">
        {/* Gauge Background */}
        <div className="relative h-40">
          <svg viewBox="0 0 200 110" className="w-full">
            {/* Background arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="20"
              className="text-muted opacity-20"
            />
            
            {/* Colored segments */}
            <path
              d="M 20 100 A 80 80 0 0 1 56 35"
              fill="none"
              stroke="#EF4444"
              strokeWidth="20"
              opacity="0.7"
            />
            <path
              d="M 56 35 A 80 80 0 0 1 100 20"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="20"
              opacity="0.7"
            />
            <path
              d="M 100 20 A 80 80 0 0 1 144 35"
              fill="none"
              stroke="#34D399"
              strokeWidth="20"
              opacity="0.7"
            />
            <path
              d="M 144 35 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#10B981"
              strokeWidth="20"
              opacity="0.7"
            />
            
            {/* Center circle */}
            <circle cx="100" cy="100" r="8" fill="currentColor" className="text-foreground" />
            
            {/* Needle */}
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="35"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="text-foreground"
              style={{
                transformOrigin: '100px 100px',
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 0.5s ease-out',
              }}
            />
          </svg>
        </div>

        {/* Value Labels */}
        <div className="flex justify-between text-xs text-muted-foreground mt-2 px-2">
          <span>Overpriced</span>
          <span>Fair</span>
          <span>Great Deal</span>
        </div>

        {/* Current Value Display */}
        <div className="text-center mt-6">
          <div
            className="text-2xl inline-block px-4 py-2 rounded-lg"
            style={{ color: value.color, backgroundColor: `${value.color}15` }}
          >
            {value.label}
          </div>
          <div className="mt-3 text-sm text-muted-foreground">
            ${price} vs ${averagePrice} avg
          </div>
        </div>
      </div>
    </Card>
  );
}
