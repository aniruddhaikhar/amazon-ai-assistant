import { Star, Truck, Zap, Mic, ShoppingCart, Heart, Sparkles, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={12}
          className={i <= Math.round(rating) ? 'text-amazon-orange fill-amazon-orange' : 'text-gray-300 fill-gray-300'}
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product, onGetInfo, onVoiceOpen, onCompare, compareList }) {
  const inCompare = compareList.includes(product.id);
  const savings = product.originalPrice - product.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group relative"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {product.badge}
        </div>
      )}

      {/* Wishlist */}
      <button className="absolute top-2 right-2 z-10 w-7 h-7 bg-white/80 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50">
        <Heart size={14} className="text-gray-500 hover:text-red-500" />
      </button>

      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-50 h-48 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
          onError={e => { e.target.src = `https://placehold.co/400x400/f5f5f5/888?text=${product.brand}`; }}
        />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-sm text-gray-800 font-medium line-clamp-2 mb-1 leading-snug">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-1">
          <StarRating rating={product.rating} />
          <span className="text-xs text-amazon-blue hover:text-amazon-orange cursor-pointer">
            {product.rating} ({product.reviews.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="mb-1.5">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="text-xs text-gray-500 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
            <span className="text-xs font-bold text-red-600">
              -{product.discount}%
            </span>
          </div>
          <p className="text-xs text-green-700 font-medium">
            Save ₹{savings.toLocaleString()}
          </p>
        </div>

        {/* Prime & Delivery */}
        <div className="flex items-center gap-2 mb-2">
          {product.prime && (
            <span className="flex items-center gap-0.5 bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded">
              <Zap size={9} /> prime
            </span>
          )}
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <Truck size={11} className="text-green-600" />
            <span className="text-green-700 font-medium">{product.delivery}</span>
          </div>
        </div>

        {/* AI Buying Score */}
        <div className="flex items-center gap-2 mb-2 bg-blue-50 rounded-lg px-2 py-1">
          <Sparkles size={11} className="text-ai-blue flex-shrink-0" />
          <span className="text-xs text-blue-700 font-medium">
            AI Score: {product.aiSummary.recommendation.buyingScore}/100
          </span>
          <div className="flex-1 bg-blue-100 rounded-full h-1.5">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-ai-blue rounded-full"
              style={{ width: `${product.aiSummary.recommendation.buyingScore}%` }}
            />
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Compare checkbox */}
        <label className="flex items-center gap-1.5 cursor-pointer mb-2 group/check">
          <input
            type="checkbox"
            checked={inCompare}
            onChange={() => onCompare(product.id)}
            className="w-3.5 h-3.5 accent-amazon-orange"
          />
          <span className="text-xs text-gray-600 group-hover/check:text-gray-900">Add to compare</span>
        </label>

        {/* Action buttons */}
        <div className="flex gap-1.5">
          <button
            onClick={() => onGetInfo(product)}
            className="flex-1 bg-amazon-orange hover:bg-amazon-orange-dark text-gray-900 text-xs font-bold py-2 px-2 rounded-lg border border-amber-500 transition-all duration-200 flex items-center justify-center gap-1"
          >
            <Sparkles size={12} />
            Get AI Info
          </button>
          <button
            onClick={() => onVoiceOpen(product)}
            className="flex items-center justify-center gap-1 bg-gradient-to-r from-blue-600 to-ai-blue text-white text-xs font-medium py-2 px-2.5 rounded-lg transition-all duration-200 hover:opacity-90 animate-glow"
          >
            <Mic size={12} />
          </button>
          <button className="flex items-center justify-center gap-1 bg-amber-400 hover:bg-amber-500 text-gray-900 text-xs font-medium py-2 px-2.5 rounded-lg transition-all">
            <ShoppingCart size={12} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
