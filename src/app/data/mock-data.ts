// Mock data for the FairValue dashboard

export interface PriceTrendData {
  date: string;
  average: number;
  lowest: number;
  genuine: number;
}

export interface ProductListing {
  id: string;
  title: string;
  price: number;
  condition: string;
  seller: string;
  sellerRating: number;
  genuinenessScore: number;
  verified: boolean;
  image: string;
  location: string;
  marketplace: string;
  listedDate: string;
}

// Generate price trend data for the last 30 days
export const generatePriceTrendData = (): PriceTrendData[] => {
  const data: PriceTrendData[] = [];
  const today = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Simulate price fluctuations
    const baseAverage = 850 + Math.sin(i / 5) * 50;
    const baseLowest = 720 + Math.sin(i / 4) * 40;
    const baseGenuine = 880 + Math.sin(i / 6) * 30;
    
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      average: Math.round(baseAverage),
      lowest: Math.round(baseLowest),
      genuine: Math.round(baseGenuine),
    });
  }
  
  return data;
};

// Mock product listings
export const mockProductListings: ProductListing[] = [
  {
    id: '1',
    title: 'iPhone 15 Pro 256GB Natural Titanium',
    price: 899,
    condition: 'Excellent',
    seller: 'TechDeals Pro',
    sellerRating: 4.8,
    genuinenessScore: 96,
    verified: true,
    image: 'iphone-15-pro-natural',
    location: 'New York, NY',
    marketplace: 'eBay',
    listedDate: '2 days ago',
  },
  {
    id: '2',
    title: 'Apple iPhone 15 Pro 256GB - Like New',
    price: 825,
    condition: 'Like New',
    seller: 'PhoneHub',
    sellerRating: 4.9,
    genuinenessScore: 98,
    verified: true,
    image: 'iphone-15-pro-box',
    location: 'Los Angeles, CA',
    marketplace: 'eBay',
    listedDate: '1 day ago',
  },
  {
    id: '3',
    title: 'iPhone 15 Pro 256GB Unlocked',
    price: 1050,
    condition: 'Good',
    seller: 'QuickSeller',
    sellerRating: 3.2,
    genuinenessScore: 62,
    verified: false,
    image: 'iphone-15-pro-side',
    location: 'Miami, FL',
    marketplace: 'eBay',
    listedDate: '5 hours ago',
  },
  {
    id: '4',
    title: 'iPhone 15 Pro 256GB Natural Titanium - Mint',
    price: 795,
    condition: 'Excellent',
    seller: 'CertifiedTech',
    sellerRating: 5.0,
    genuinenessScore: 99,
    verified: true,
    image: 'iphone-15-pro-screen',
    location: 'Chicago, IL',
    marketplace: 'eBay',
    listedDate: '3 days ago',
  },
  {
    id: '5',
    title: 'Apple iPhone 15 Pro 256GB with Box',
    price: 870,
    condition: 'Like New',
    seller: 'ElectronicsDepot',
    sellerRating: 4.7,
    genuinenessScore: 94,
    verified: true,
    image: 'iphone-15-pro-accessories',
    location: 'Houston, TX',
    marketplace: 'eBay',
    listedDate: '1 day ago',
  },
  {
    id: '6',
    title: 'iPhone 15 Pro 256GB - Great Deal!',
    price: 1200,
    condition: 'Fair',
    seller: 'BargainBin',
    sellerRating: 2.8,
    genuinenessScore: 45,
    verified: false,
    image: 'iphone-15-pro-closeup',
    location: 'Phoenix, AZ',
    marketplace: 'eBay',
    listedDate: '6 hours ago',
  },
  {
    id: '7',
    title: 'iPhone 15 Pro 256GB Natural Titanium Unlocked',
    price: 840,
    condition: 'Excellent',
    seller: 'MobileMasters',
    sellerRating: 4.6,
    genuinenessScore: 91,
    verified: true,
    image: 'iphone-15-pro-colors',
    location: 'Philadelphia, PA',
    marketplace: 'eBay',
    listedDate: '4 days ago',
  },
  {
    id: '8',
    title: 'Apple iPhone 15 Pro - Perfect Condition',
    price: 810,
    condition: 'Like New',
    seller: 'PremiumGadgets',
    sellerRating: 4.9,
    genuinenessScore: 97,
    verified: true,
    image: 'iphone-15-pro-display',
    location: 'San Antonio, TX',
    marketplace: 'eBay',
    listedDate: '2 days ago',
  },
  {
    id: '9',
    title: 'iPhone 15 Pro 256GB Blue Titanium',
    price: 880,
    condition: 'Excellent',
    seller: 'TechSavvy',
    sellerRating: 4.8,
    genuinenessScore: 95,
    verified: true,
    image: 'iphone-blue-titanium',
    location: 'Seattle, WA',
    marketplace: 'Mercari',
    listedDate: '1 day ago',
  },
  {
    id: '10',
    title: 'Apple iPhone 15 Pro 256GB White Titanium',
    price: 820,
    condition: 'Like New',
    seller: 'GadgetGuru',
    sellerRating: 4.9,
    genuinenessScore: 98,
    verified: true,
    image: 'iphone-white-titanium',
    location: 'Austin, TX',
    marketplace: 'Swappa',
    listedDate: '3 days ago',
  },
  {
    id: '11',
    title: 'iPhone 15 Pro 256GB Black Titanium Unlocked',
    price: 950,
    condition: 'New',
    seller: 'EliteElectronics',
    sellerRating: 5.0,
    genuinenessScore: 100,
    verified: true,
    image: 'iphone-black-titanium',
    location: 'Boston, MA',
    marketplace: 'eBay',
    listedDate: '12 hours ago',
  },
  {
    id: '12',
    title: 'iPhone 15 Pro 256GB with AppleCare+',
    price: 920,
    condition: 'Excellent',
    seller: 'AppleSpecialist',
    sellerRating: 4.9,
    genuinenessScore: 97,
    verified: true,
    image: 'iphone-applecare',
    location: 'San Francisco, CA',
    marketplace: 'Swappa',
    listedDate: '1 day ago',
  },
  {
    id: '13',
    title: 'iPhone 15 Pro 256GB - Cracked Screen',
    price: 550,
    condition: 'Fair',
    seller: 'RepairShop',
    sellerRating: 4.2,
    genuinenessScore: 78,
    verified: false,
    image: 'iphone-damaged',
    location: 'Denver, CO',
    marketplace: 'eBay',
    listedDate: '4 hours ago',
  },
  {
    id: '14',
    title: 'iPhone 15 Pro 256GB Natural Titanium Complete Set',
    price: 890,
    condition: 'Like New',
    seller: 'PremiumPhones',
    sellerRating: 4.8,
    genuinenessScore: 96,
    verified: true,
    image: 'iphone-complete-set',
    location: 'Portland, OR',
    marketplace: 'Mercari',
    listedDate: '2 days ago',
  },
  {
    id: '15',
    title: 'iPhone 15 Pro 256GB Factory Unlocked',
    price: 865,
    condition: 'Excellent',
    seller: 'UnlockZone',
    sellerRating: 4.7,
    genuinenessScore: 93,
    verified: true,
    image: 'iphone-unlocked',
    location: 'Las Vegas, NV',
    marketplace: 'OfferUp',
    listedDate: '3 days ago',
  },
  {
    id: '16',
    title: 'iPhone 15 Pro 256GB AT&T Locked',
    price: 750,
    condition: 'Good',
    seller: 'CarrierDeals',
    sellerRating: 4.3,
    genuinenessScore: 82,
    verified: false,
    image: 'iphone-att',
    location: 'Atlanta, GA',
    marketplace: 'eBay',
    listedDate: '5 days ago',
  },
  {
    id: '17',
    title: 'iPhone 15 Pro 256GB Verizon',
    price: 780,
    condition: 'Good',
    seller: 'WirelessHub',
    sellerRating: 4.4,
    genuinenessScore: 85,
    verified: true,
    image: 'iphone-verizon',
    location: 'Dallas, TX',
    marketplace: 'Mercari',
    listedDate: '2 days ago',
  },
  {
    id: '18',
    title: 'iPhone 15 Pro 256GB Blue Titanium International',
    price: 835,
    condition: 'Like New',
    seller: 'GlobalTech',
    sellerRating: 4.6,
    genuinenessScore: 89,
    verified: true,
    image: 'iphone-international',
    location: 'San Diego, CA',
    marketplace: 'Swappa',
    listedDate: '1 day ago',
  },
  {
    id: '19',
    title: 'iPhone 15 Pro 256GB Natural Titanium 98% Battery',
    price: 855,
    condition: 'Excellent',
    seller: 'BatteryPro',
    sellerRating: 4.8,
    genuinenessScore: 94,
    verified: true,
    image: 'iphone-battery',
    location: 'Minneapolis, MN',
    marketplace: 'eBay',
    listedDate: '1 day ago',
  },
  {
    id: '20',
    title: 'iPhone 15 Pro 256GB White Titanium Original Box',
    price: 875,
    condition: 'Like New',
    seller: 'OriginalBox',
    sellerRating: 4.9,
    genuinenessScore: 97,
    verified: true,
    image: 'iphone-original-box',
    location: 'Nashville, TN',
    marketplace: 'Swappa',
    listedDate: '2 days ago',
  },
];

export const marketplaces = ['eBay', 'Mercari', 'Swappa', 'OfferUp', 'Facebook Marketplace'];