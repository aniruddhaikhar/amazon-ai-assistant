import { useState, useRef } from 'react';
import { Search, ShoppingCart, MapPin, ChevronDown, Mic, Sparkles, TrendingUp } from 'lucide-react';
import { suggestedSearches, trendingSearches } from '../data/products';

function AmazonLogo() {
  return (
    <div className="flex flex-col items-start cursor-pointer hover:ring-1 hover:ring-white rounded px-1 py-0.5 flex-shrink-0">
      {/* "amazon" wordmark */}
      <span
        className="text-white leading-none tracking-tight"
        style={{ fontSize: '22px', fontFamily: 'Arial Black, sans-serif', fontWeight: 900, letterSpacing: '-0.5px' }}
      >
        amazon
      </span>
      {/* Orange arrow swoosh */}
      <svg viewBox="0 0 120 16" width="72" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 8 Q60 18 114 6"
          fill="none"
          stroke="#FF9900"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <polygon points="108,2 116,6 108,10" fill="#FF9900" />
      </svg>
    </div>
  );
}

export default function Header({ cartCount, onVoiceOpen, searchQuery, setSearchQuery }) {
  const [focused, setFocused] = useState(false);
  const [category, setCategory] = useState('All');
  const inputRef = useRef(null);

  const filteredSuggestions = searchQuery.length > 0
    ? suggestedSearches.filter(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Main nav bar */}
      <div className="bg-amazon-navy px-4 py-2 flex items-center gap-3">
        {/* Logo */}
        <AmazonLogo />

        {/* Delivery location */}
        <div className="hidden md:flex items-center text-white hover:ring-1 hover:ring-white rounded px-1 py-0.5 cursor-pointer flex-shrink-0">
          <MapPin size={14} className="mr-1 text-gray-300" />
          <div>
            <p className="text-xs text-gray-300">Delivering to</p>
            <p className="text-sm font-bold">Mumbai 400001</p>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex-1 flex relative">
          {/* Category select */}
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="hidden md:block bg-gray-200 text-gray-800 text-sm px-2 py-2 rounded-l-lg border-r border-gray-400 cursor-pointer hover:bg-gray-300 focus:outline-none"
          >
            <option>All</option>
            <option>Electronics</option>
            <option>Appliances</option>
            <option>Gaming</option>
            <option>Fitness</option>
            <option>Office</option>
          </select>

          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 200)}
              placeholder="Search for products, brands, AI recommendations..."
              className="w-full py-2 px-4 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-amazon-orange"
            />
            {/* AI search suggestions dropdown */}
            {focused && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-lg z-50 border border-gray-200 overflow-hidden">
                {searchQuery.length === 0 ? (
                  <div>
                    <div className="px-3 pt-3 pb-1">
                      <p className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
                        <TrendingUp size={10} /> Trending
                      </p>
                    </div>
                    {trendingSearches.map((t, i) => (
                      <button
                        key={i}
                        onMouseDown={() => setSearchQuery(t)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 flex items-center gap-2"
                      >
                        <TrendingUp size={12} className="text-amazon-orange" />
                        {t}
                      </button>
                    ))}
                    <div className="px-3 pt-3 pb-1 border-t">
                      <p className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
                        <Sparkles size={10} className="text-ai-blue" /> AI Suggestions
                      </p>
                    </div>
                    {suggestedSearches.slice(0, 4).map((s, i) => (
                      <button
                        key={i}
                        onMouseDown={() => setSearchQuery(s)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 flex items-center gap-2"
                      >
                        <Sparkles size={12} className="text-ai-blue" />
                        {s}
                      </button>
                    ))}
                  </div>
                ) : (
                  <>
                    {filteredSuggestions.length > 0 && filteredSuggestions.map((s, i) => (
                      <button
                        key={i}
                        onMouseDown={() => setSearchQuery(s)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 flex items-center gap-2"
                      >
                        <Search size={12} className="text-gray-400" />
                        {s}
                      </button>
                    ))}
                    <div className="px-4 py-2 text-xs text-ai-blue font-medium border-t flex items-center gap-1">
                      <Sparkles size={10} /> AI: Showing best matches for "{searchQuery}"
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          <button className="bg-amazon-orange hover:bg-amazon-orange-dark px-4 py-2 rounded-r-lg flex-shrink-0">
            <Search size={18} className="text-amazon-navy" />
          </button>
        </div>

        {/* Right nav items */}
        <div className="hidden md:flex items-center gap-4 text-white">
          <button className="hover:ring-1 hover:ring-white rounded px-1 py-0.5 text-left">
            <p className="text-xs text-gray-300">Hello, User</p>
            <p className="text-sm font-bold flex items-center gap-1">Account <ChevronDown size={12} /></p>
          </button>
          <button className="hover:ring-1 hover:ring-white rounded px-1 py-0.5">
            <p className="text-xs text-gray-300">Returns</p>
            <p className="text-sm font-bold">& Orders</p>
          </button>
          <button className="relative hover:ring-1 hover:ring-white rounded px-1 py-0.5">
            <ShoppingCart size={28} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amazon-orange text-amazon-navy text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
            <span className="text-xs font-bold">Cart</span>
          </button>
        </div>

        {/* Mobile: cart & mic */}
        <div className="flex md:hidden items-center gap-2 text-white">
          <button onClick={onVoiceOpen} className="p-2 rounded-full bg-ai-blue/20 hover:bg-ai-blue/30">
            <Mic size={20} className="text-ai-blue" />
          </button>
          <button className="relative">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amazon-orange text-amazon-navy text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Secondary nav bar */}
      <div className="bg-amazon-nav-blue px-4 py-1.5 flex items-center gap-6 text-white text-sm overflow-x-auto scrollbar-hide">
        {['All Departments', 'Today\'s Deals', 'Customer Service', 'Electronics', 'Gaming', 'Home & Kitchen', 'Fitness', 'Fashion', 'Books'].map(item => (
          <button key={item} className="hover:ring-1 hover:ring-white rounded px-1 py-0.5 whitespace-nowrap text-sm">
            {item}
          </button>
        ))}
      </div>
    </header>
  );
}
