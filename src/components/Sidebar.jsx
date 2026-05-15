import { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Zap, Truck } from 'lucide-react';

function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200 pb-3 mb-3 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left mb-2"
      >
        <span className="text-sm font-bold text-gray-800">{title}</span>
        {open ? <ChevronUp size={14} className="text-gray-500" /> : <ChevronDown size={14} className="text-gray-500" />}
      </button>
      {open && children}
    </div>
  );
}

export function FilterContent({ filters, setFilters }) {
  const brands = ['Sony', 'Apple', 'Samsung', 'Logitech', 'Razer', 'boAt', 'Fitbit', 'Dyson', 'Instant Pot', 'Whirlpool', 'Amazon', 'PowerUp'];
  const priceRanges = [
    { label: 'Under ₹2,000', min: 0, max: 2000 },
    { label: '₹2,000 – ₹10,000', min: 2000, max: 10000 },
    { label: '₹10,000 – ₹30,000', min: 10000, max: 30000 },
    { label: '₹30,000 – ₹60,000', min: 30000, max: 60000 },
    { label: 'Above ₹60,000', min: 60000, max: Infinity },
  ];
  const deliveryOptions = ['Tomorrow', 'Day after tomorrow', 'In 3-4 days', 'In 5-7 days'];
  const ratingOptions = [4, 3, 2, 1];

  const toggleBrand = (brand) => {
    setFilters(prev => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand]
    }));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-gray-900">Filters</h2>
        {(filters.brands.length > 0 || filters.priceMax < Infinity || filters.prime || filters.minRating > 0) && (
          <button
            onClick={() => setFilters({ brands: [], priceMin: 0, priceMax: Infinity, prime: false, minRating: 0 })}
            className="text-xs text-blue-600 hover:text-orange-500"
          >
            Clear all
          </button>
        )}
      </div>

      <FilterSection title="Prime Eligible">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.prime}
            onChange={e => setFilters(prev => ({ ...prev, prime: e.target.checked }))}
            className="w-4 h-4 accent-orange-500"
          />
          <span className="bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
            <Zap size={9} /> prime
          </span>
        </label>
      </FilterSection>

      <FilterSection title="Customer Rating">
        <div className="space-y-1.5">
          {ratingOptions.map(rating => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={filters.minRating === rating}
                onChange={() => setFilters(prev => ({ ...prev, minRating: prev.minRating === rating ? 0 : rating }))}
                className="w-4 h-4 accent-orange-500"
              />
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} size={11} className={s <= rating ? 'text-orange-400 fill-orange-400' : 'text-gray-300 fill-gray-300'} />
                ))}
                <span className="text-xs text-gray-600 ml-1">& Up</span>
              </div>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Price Range">
        <div className="space-y-1.5">
          {priceRanges.map((range, i) => (
            <label key={i} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={filters.priceMax === range.max && filters.priceMin === range.min}
                onChange={() => setFilters(prev => ({
                  ...prev,
                  priceMin: prev.priceMax === range.max && prev.priceMin === range.min ? 0 : range.min,
                  priceMax: prev.priceMax === range.max && prev.priceMin === range.min ? Infinity : range.max,
                }))}
                className="w-4 h-4 accent-orange-500"
              />
              <span className="text-sm text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Brand">
        <div className="space-y-1.5 max-h-48 overflow-y-auto">
          {brands.map(brand => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="w-4 h-4 accent-orange-500"
              />
              <span className="text-sm text-gray-700 hover:text-orange-500">{brand}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Delivery Time" defaultOpen={false}>
        <div className="space-y-1.5">
          {deliveryOptions.map(opt => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-orange-500" />
              <span className="text-sm text-gray-700 flex items-center gap-1">
                <Truck size={11} className="text-green-600" /> {opt}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>
    </div>
  );
}

export default function Sidebar({ filters, setFilters }) {
  return (
    <aside className="w-56 flex-shrink-0 hidden lg:block">
      <div className="bg-white rounded-xl p-4 shadow-sm sticky top-20">
        <FilterContent filters={filters} setFilters={setFilters} />
      </div>
    </aside>
  );
}
