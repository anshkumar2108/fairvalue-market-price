import React from 'react';
import { Moon, Sun, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';
import { useNavigate, useLocation } from 'react-router';

export function Header() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#0066FF] to-[#0052CC] rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl">FairValue</h1>
              <p className="text-xs text-muted-foreground">Market Analytics</p>
            </div>
          </div>

          {/* Navigation & Actions */}
          <div className="flex items-center gap-3">
            {location.pathname === '/' && (
              <Button
                variant="default"
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white"
                onClick={() => navigate('/dashboard')}
              >
                Go to Dashboard
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}