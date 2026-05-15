import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles, SlidersHorizontal, X } from 'lucide-react';

import Header from './components/Header';
import ProductCard from './components/ProductCard';
import AIProductPanel from './components/AIProductPanel';
import VoiceAssistant, { FloatingMicButton } from './components/VoiceAssistant';
import ComparePanel from './components/ComparePanel';
import Sidebar, { FilterContent } from './components/Sidebar';

import { products, categories } from './data/products';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Avg. Customer Review' },
  { value: 'discount', label: 'Best Discount' },
  { value: 'ai-score', label: 'AI Score' },
];

function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amazon-navy via-blue-900 to-slate-900 p-6 mb-6 text-white">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles size={18} className="text-ai-blue" />
          <span className="text-xs font-bold text-ai-blue uppercase tracking-widest">AI-Powered Shopping</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
          Shop Smarter with Your<br />
          <span className="text-amazon-orange">AI Shopping Copilot</span>
        </h1>
        <p className="text-sm text-gray-300 mb-4 max-w-md">
          AI-generated insights, review intelligence, voice shopping, and smart recommendations — all in one place.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Voice AI', 'Review Intel', 'Price Analysis', 'Smart Compare'].map(tag => (
            <span key={tag} className="text-xs bg-white/10 border border-white/20 px-2.5 py-1 rounded-full text-gray-200">
              ✦ {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-ai-blue/20 rounded-full blur-3xl" />
      <div className="absolute -right-5 -bottom-10 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />
      <div className="absolute right-20 top-5 w-3 h-3 bg-ai-blue rounded-full animate-pulse" />
      <div className="absolute right-32 bottom-8 w-2 h-2 bg-amazon-orange rounded-full animate-bounce" />
    </div>
  );
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [voiceContext, setVoiceContext] = useState(null);
  const [compareList, setCompareList] = useState([]);
  const [cartCount] = useState(0);
  const [filters, setFilters] = useState({
    brands: [],
    priceMin: 0,
    priceMax: Infinity,
    prime: false,
    minRating: 0,
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (filters.brands.length > 0) {
      result = result.filter(p => filters.brands.includes(p.brand));
    }
    if (filters.prime) {
      result = result.filter(p => p.prime);
    }
    if (filters.minRating > 0) {
      result = result.filter(p => p.rating >= filters.minRating);
    }
    result = result.filter(p => p.price >= filters.priceMin && p.price <= filters.priceMax);

    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'discount': result.sort((a, b) => b.discount - a.discount); break;
      case 'ai-score': result.sort((a, b) => b.aiSummary.recommendation.buyingScore - a.aiSummary.recommendation.buyingScore); break;
      default: break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy, filters]);

  const handleCompare = (id) => {
    setCompareList(prev => {
      if (prev.includes(id)) return prev.filter(i => i !== id);
      if (prev.length >= 4) return prev;
      return [...prev, id];
    });
  };

  const handleVoiceOpen = (product = null) => {
    setVoiceContext(product);
    setVoiceOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        cartCount={cartCount}
        onVoiceOpen={() => handleVoiceOpen()}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="max-w-screen-xl mx-auto px-3 md:px-6 py-4">
        <HeroBanner />

        {/* Categories bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
                selectedCategory === cat.name
                  ? 'bg-amazon-navy text-white border-amazon-navy'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-amazon-orange hover:text-amazon-orange'
              }`}
            >
              {cat.name}
              <span className="ml-1.5 text-xs opacity-60">({cat.count})</span>
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <Sidebar filters={filters} setFilters={setFilters} />

          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-4 bg-white rounded-xl px-4 py-2.5 shadow-sm">
              <div className="flex items-center gap-3">
                <button
                  className="lg:hidden flex items-center gap-1.5 text-sm text-gray-700 hover:text-amazon-orange"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <SlidersHorizontal size={14} /> Filters
                </button>
                <span className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">{filteredProducts.length}</span> results
                  {searchQuery && <span className="font-medium"> for "{searchQuery}"</span>}
                </span>
                {compareList.length > 0 && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                    {compareList.length} selected to compare
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 hidden sm:block">Sort:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="text-sm border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:border-amazon-orange bg-white cursor-pointer"
                >
                  {SORT_OPTIONS.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onGetInfo={setSelectedProduct}
                    onVoiceOpen={handleVoiceOpen}
                    onCompare={handleCompare}
                    compareList={compareList}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl shadow-sm">
                <Sparkles size={40} className="text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">No products found</p>
                <p className="text-sm text-gray-400 mt-1">Try adjusting your filters or search query</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setFilters({ brands: [], priceMin: 0, priceMax: Infinity, prime: false, minRating: 0 });
                  }}
                  className="mt-3 text-sm text-blue-600 hover:text-amazon-orange underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* AI Product Panel */}
      <AnimatePresence>
        {selectedProduct && (
          <AIProductPanel
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>

      {/* Voice Assistant */}
      <VoiceAssistant
        isOpen={voiceOpen}
        onClose={() => { setVoiceOpen(false); setVoiceContext(null); }}
        contextProduct={voiceContext}
      />

      {/* Compare Panel */}
      <AnimatePresence>
        {compareList.length > 0 && (
          <ComparePanel
            compareIds={compareList}
            onRemove={id => setCompareList(prev => prev.filter(i => i !== id))}
            onClearAll={() => setCompareList([])}
          />
        )}
      </AnimatePresence>

      {/* Floating Voice Button */}
      <FloatingMicButton onClick={() => handleVoiceOpen()} />

      {/* Bottom padding so compare panel doesn't overlap content */}
      {compareList.length > 0 && <div className="h-40" />}

      {/* Mobile Filters Drawer */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute left-0 top-0 bottom-0 w-72 bg-white overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="font-bold text-gray-900">Filters</h2>
                <button onClick={() => setMobileFiltersOpen(false)}>
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
              <div className="p-4">
                <FilterContent filters={filters} setFilters={setFilters} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
