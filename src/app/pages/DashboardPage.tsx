import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'next-themes';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { PriceTrendChart } from '../components/PriceTrendChart';
import { ValueMeter } from '../components/ValueMeter';
import { ProductCard } from '../components/ProductCard';
import { FiltersSidebar } from '../components/FiltersSidebar';
import { ProductDetailModal } from '../components/ProductDetailModal';
import { generatePriceTrendData, mockProductListings, ProductListing } from '../data/mock-data';

function DashboardContent() {
  const [searchTerm, setSearchTerm] = useState('iPhone 15 Pro');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedMarketplaces, setSelectedMarketplaces] = useState(['eBay']);
  const [minGenuineness, setMinGenuineness] = useState(50);
  const [selectedProduct, setSelectedProduct] = useState<ProductListing | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const priceTrendData = useMemo(() => generatePriceTrendData(), []);
  const currentAveragePrice = priceTrendData[priceTrendData.length - 1]?.average || 850;

  // Filter products based on current filters
  const filteredProducts = useMemo(() => {
    return mockProductListings.filter(product => {
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesMarketplace = selectedMarketplaces.includes(product.marketplace);
      const matchesGenuineness = product.genuinenessScore >= minGenuineness;
      return matchesPrice && matchesMarketplace && matchesGenuineness;
    });
  }, [priceRange, selectedMarketplaces, minGenuineness]);

  const handleProductClick = (product: ProductListing) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 200); // Delay clearing to allow modal close animation
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="mb-6">
            <div className="inline-block px-3 py-1 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-sm mb-3">
              Currently Analyzing
            </div>
            <h2 className="text-3xl mb-2">iPhone 15 Pro 256GB</h2>
            <p className="text-muted-foreground">
              Real-time market insights from 1,247 active listings
            </p>
          </div>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <FiltersSidebar
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedMarketplaces={selectedMarketplaces}
              setSelectedMarketplaces={setSelectedMarketplaces}
              minGenuineness={minGenuineness}
              setMinGenuineness={setMinGenuineness}
            />
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Price Chart and Value Meter Row */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <PriceTrendChart data={priceTrendData} />
              </div>
              <div className="xl:col-span-1">
                <ValueMeter price={795} averagePrice={currentAveragePrice} />
              </div>
            </div>

            {/* Products Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl">Available Listings</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {filteredProducts.length} products match your criteria
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select className="px-3 py-1.5 bg-card border border-border rounded-md text-sm">
                    <option>Best Match</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Genuineness Score</option>
                    <option>Newest First</option>
                  </select>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product}
                      onClick={() => handleProductClick(product)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-muted/30 rounded-lg border-2 border-dashed border-border">
                  <p className="text-lg text-muted-foreground mb-2">No products found</p>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your filters to see more results
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        averagePrice={currentAveragePrice}
      />
    </div>
  );
}

export function DashboardPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <DashboardContent />
    </ThemeProvider>
  );
}
