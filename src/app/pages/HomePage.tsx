import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  TrendingDown, 
  ShieldCheck, 
  BarChart3, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  DollarSign,
  Search,
  Filter,
  Target
} from 'lucide-react';
import { ThemeProvider } from 'next-themes';
import { Header } from '../components/Header';

function HomePageContent() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-Time Price Analytics',
      description: 'Track price trends across multiple marketplaces with live updates and 30-day historical data.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Genuineness Score',
      description: 'AI-powered authenticity verification analyzing seller reputation, pricing, and listing quality.',
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: 'Deal Finder',
      description: 'Instantly identify underpriced listings and get alerts when prices drop below market average.',
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: 'Advanced Filters',
      description: 'Customize your search with price ranges, conditions, marketplaces, and authenticity thresholds.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Value Meter',
      description: 'Know exactly if a deal is overpriced, fair, or a great bargain at a glance.',
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Multi-Marketplace Search',
      description: 'Compare listings from eBay, Mercari, Swappa, OfferUp, and more in one place.',
    },
  ];

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: '100K+', label: 'Active Users' },
    { icon: <DollarSign className="w-5 h-5" />, value: '$50M+', label: 'Saved by Users' },
    { icon: <Star className="w-5 h-5" />, value: '4.9/5', label: 'User Rating' },
  ];

  const benefits = [
    'Never overpay for second-hand products again',
    'Avoid scams with AI-powered authenticity checks',
    'Save hours comparing prices across platforms',
    'Get instant alerts on price drops',
    'Make confident purchasing decisions',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-6 bg-[#0066FF]/10 text-[#0066FF] hover:bg-[#0066FF]/20 border-[#0066FF]/20">
            <Zap className="w-3 h-3 mr-1" />
            Smart Second-Hand Shopping
          </Badge>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Find{' '}
            <span className="text-[#0066FF]">Fair Prices</span>
            <br />
            for Second-Hand Items
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            FairValue uses AI-powered analytics to help you discover genuine deals across 
            multiple marketplaces. Never overpay or get scammed again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-[#0066FF] hover:bg-[#0052CC] text-white text-lg px-8 py-6 gap-2"
              onClick={() => navigate('/dashboard')}
            >
              Start Exploring
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6"
              onClick={() => navigate('/dashboard')}
            >
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="text-[#0066FF]">{stat.icon}</div>
                <div className="text-3xl">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Everything You Need to Shop Smarter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you find the best deals and avoid scams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              How FairValue Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps to smarter second-hand shopping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0066FF] text-white flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl mb-3">Search Your Product</h3>
              <p className="text-muted-foreground">
                Enter the product you're looking for. We'll scan thousands of listings instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#10B981] text-white flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl mb-3">Analyze the Market</h3>
              <p className="text-muted-foreground">
                Our AI analyzes prices, seller reputation, and product authenticity in real-time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0066FF] text-white flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl mb-3">Make Your Purchase</h3>
              <p className="text-muted-foreground">
                Buy with confidence knowing you found a genuine deal at the right price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">
                Why Choose FairValue?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <Button 
                size="lg" 
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white mt-8 gap-2"
                onClick={() => navigate('/dashboard')}
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-[#0066FF]/10 to-[#10B981]/10 border-2 border-[#0066FF]/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-background rounded-lg shadow-sm">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Average Market Price</div>
                      <div className="text-2xl">$850</div>
                    </div>
                    <BarChart3 className="w-8 h-8 text-[#0066FF]" />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-background rounded-lg shadow-sm">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Your Best Deal</div>
                      <div className="text-2xl text-[#10B981]">$795</div>
                    </div>
                    <TrendingDown className="w-8 h-8 text-[#10B981]" />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-background rounded-lg shadow-sm">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Genuineness Score</div>
                      <div className="text-2xl">99%</div>
                    </div>
                    <ShieldCheck className="w-8 h-8 text-[#0066FF]" />
                  </div>

                  <div className="p-4 bg-[#10B981]/10 border border-[#10B981]/30 rounded-lg text-center">
                    <div className="text-2xl text-[#10B981] mb-1">Save $55</div>
                    <div className="text-sm text-muted-foreground">6.5% below market average</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-gradient-to-br from-[#0066FF] to-[#0052CC] text-white border-none">
            <h2 className="text-4xl md:text-5xl mb-4">
              Ready to Shop Smarter?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of smart shoppers who save money and avoid scams every day.
            </p>
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-[#0066FF] text-lg px-8 py-6 gap-2"
              onClick={() => navigate('/dashboard')}
            >
              Start Finding Deals Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl mb-3 text-[#0066FF]">FairValue</h3>
              <p className="text-muted-foreground mb-4">
                Your trusted companion for smart second-hand shopping. Find genuine deals, avoid scams, and save money.
              </p>
            </div>
            
            <div>
              <h4 className="mb-3">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">How it Works</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-3">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2026 FairValue. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function HomePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <HomePageContent />
    </ThemeProvider>
  );
}
