import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Star, Trophy, CheckCircle, XCircle, Zap, TrendingUp } from 'lucide-react';
import { products } from '../data/products';

function CompareRow({ label, values }) {
  const best = Math.max(...values.filter(v => typeof v === 'number'));
  return (
    <div className="grid grid-cols-3 gap-2 py-2 border-b border-gray-100 items-center">
      <span className="text-xs font-medium text-gray-500">{label}</span>
      {values.map((v, i) => (
        <div key={i} className={`text-sm text-center ${v === best && typeof v === 'number' ? 'text-green-600 font-bold' : 'text-gray-800'}`}>
          {v === best && typeof v === 'number' && <Trophy size={10} className="inline mr-0.5 text-green-600" />}
          {v}
        </div>
      ))}
    </div>
  );
}

export default function ComparePanel({ compareIds, onRemove, onClearAll }) {
  const [aiSummary, setAiSummary] = useState(null);
  const [loading, setLoading] = useState(false);

  const compareProducts = compareIds.map(id => products.find(p => p.id === id)).filter(Boolean);

  const generateAIComparison = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));

    if (compareProducts.length >= 2) {
      const best = compareProducts.reduce((a, b) =>
        a.aiSummary.recommendation.buyingScore > b.aiSummary.recommendation.buyingScore ? a : b
      );
      const worst = compareProducts.reduce((a, b) =>
        a.aiSummary.recommendation.buyingScore < b.aiSummary.recommendation.buyingScore ? a : b
      );

      setAiSummary({
        winner: best.title.split(' ').slice(0, 4).join(' '),
        winnerBrand: best.brand,
        loser: worst.title.split(' ').slice(0, 4).join(' '),
        reason: `${best.brand} scores ${best.aiSummary.recommendation.buyingScore}/100 vs ${worst.brand}'s ${worst.aiSummary.recommendation.buyingScore}/100. ${best.brand} wins on review sentiment (${best.aiSummary.reviewSummary.sentiment}% positive) and overall value proposition.`,
        categories: [
          { name: 'Best Value', winner: best.brand },
          { name: 'Most Reviews', winner: compareProducts.reduce((a, b) => a.reviews > b.reviews ? a : b).brand },
          { name: 'AI Score', winner: best.brand },
          { name: 'Highest Rated', winner: compareProducts.reduce((a, b) => a.rating > b.rating ? a : b).brand },
          { name: 'Best Discount', winner: compareProducts.reduce((a, b) => a.discount > b.discount ? a : b).brand },
        ]
      });
    }
    setLoading(false);
  };

  if (compareIds.length === 0) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 shadow-2xl"
    >
      {/* Compare bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-amazon-navy text-white">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-ai-blue" />
          <span className="text-sm font-bold">Compare {compareIds.length} Products</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={generateAIComparison}
            disabled={compareIds.length < 2 || loading}
            className="bg-ai-blue hover:bg-blue-400 disabled:bg-gray-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all"
          >
            {loading ? (
              <><span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Analyzing...</>
            ) : (
              <><Sparkles size={12} /> AI Compare</>
            )}
          </button>
          <button onClick={onClearAll} className="text-gray-400 hover:text-white text-xs">Clear all</button>
        </div>
      </div>

      {/* Product thumbnails */}
      <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 overflow-x-auto">
        {compareProducts.map(p => (
          <div key={p.id} className="flex items-center gap-2 bg-white rounded-lg p-2 border border-gray-200 flex-shrink-0">
            <img src={p.image} alt={p.title} className="w-10 h-10 object-contain rounded"
              onError={e => { e.target.src = `https://placehold.co/40x40/f5f5f5/888?text=${p.brand[0]}`; }} />
            <div>
              <p className="text-xs font-medium text-gray-800 max-w-[100px] truncate">{p.title}</p>
              <p className="text-xs text-amazon-orange font-bold">₹{p.price.toLocaleString()}</p>
            </div>
            <button onClick={() => onRemove(p.id)} className="ml-1 text-gray-400 hover:text-red-500">
              <X size={12} />
            </button>
          </div>
        ))}
        {compareIds.length < 4 && (
          <div className="flex-shrink-0 w-20 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xs text-gray-400 text-center">+Add</span>
          </div>
        )}
      </div>

      {/* AI comparison result */}
      <AnimatePresence>
        {aiSummary && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white px-4 py-3">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy size={16} className="text-amber-400" />
                    <span className="text-sm font-bold text-amber-400">AI Winner: {aiSummary.winner}</span>
                    <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/30">{aiSummary.winnerBrand}</span>
                  </div>
                  <p className="text-xs text-gray-300 mb-3">{aiSummary.reason}</p>
                  <div className="flex flex-wrap gap-2">
                    {aiSummary.categories.map((c, i) => (
                      <div key={i} className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-0.5">
                        <span className="text-xs text-gray-400">{c.name}:</span>
                        <span className="text-xs font-bold text-ai-blue">{c.winner}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button onClick={() => setAiSummary(null)} className="text-gray-500 hover:text-white flex-shrink-0">
                  <X size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
