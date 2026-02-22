import React from 'react';
import { Card } from './ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PriceTrendData } from '../data/mock-data';

interface PriceTrendChartProps {
  data: PriceTrendData[];
}

export function PriceTrendChart({ data }: PriceTrendChartProps) {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3>Price Trend - Last 30 Days</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Track average, lowest, and genuine seller prices over time
        </p>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" opacity={0.3} />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            stroke="currentColor"
            className="text-muted-foreground"
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            stroke="currentColor"
            className="text-muted-foreground"
            domain={['dataMin - 50', 'dataMax + 50']}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              color: 'hsl(var(--card-foreground))',
            }}
            formatter={(value: number) => [`$${value}`, '']}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          <Line 
            type="monotone" 
            dataKey="average" 
            name="Average Price"
            stroke="#0066FF" 
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="lowest" 
            name="Lowest Price"
            stroke="#10B981" 
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="genuine" 
            name="Genuine Price"
            stroke="#F59E0B" 
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 6 }}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Price Markers */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
        <div>
          <div className="text-sm text-muted-foreground">Current Average</div>
          <div className="text-2xl text-[#0066FF] mt-1">
            ${data[data.length - 1]?.average || 0}
          </div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Current Lowest</div>
          <div className="text-2xl text-[#10B981] mt-1">
            ${data[data.length - 1]?.lowest || 0}
          </div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Genuine Avg</div>
          <div className="text-2xl text-[#F59E0B] mt-1">
            ${data[data.length - 1]?.genuine || 0}
          </div>
        </div>
      </div>
    </Card>
  );
}
