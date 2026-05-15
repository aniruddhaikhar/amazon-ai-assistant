import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Star, Sparkles, ThumbsUp, ThumbsDown, AlertTriangle,
  CheckCircle, XCircle, TrendingUp, TrendingDown, Shield,
  Target, Zap, MessageSquare, BarChart3, Award, ShoppingCart
} from 'lucide-react';

function SentimentBar({ score }) {
  const color = score >= 90 ? 'from-green-500 to-emerald-400' :
                score >= 75 ? 'from-yellow-500 to-amber-400' :
                'from-red-500 to-orange-400';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-white/10 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
        />
      </div>
      <span className="text-sm font-bold text-white">{score}%</span>
    </div>
  );
}

function ScoreRing({ score }) {
  const color = score >= 90 ? '#10b981' : score >= 75 ? '#f59e0b' : '#ef4444';
  const label = score >= 90 ? 'Excellent' : score >= 80 ? 'Very Good' : score >= 70 ? 'Good' : 'Average';
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
          <motion.circle
            cx="18" cy="18" r="15.9"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${score} 100`}
            initial={{ strokeDasharray: '0 100' }}
            animate={{ strokeDasharray: `${score} 100` }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold text-white">{score}</span>
          <span className="text-xs text-gray-400">/100</span>
        </div>
      </div>
      <span className="text-xs font-medium mt-1" style={{ color }}>{label}</span>
    </div>
  );
}

export default function AIProductPanel({ product, onClose }) {
  const [activeTab, setActiveTab] = useState('summary');
  const ai = product.aiSummary;

  const tabs = [
    { id: 'summary', label: 'AI Summary', icon: Sparkles },
    { id: 'reviews', label: 'Review Intel', icon: BarChart3 },
    { id: 'verdict', label: 'AI Verdict', icon: Award },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-end"
        onClick={e => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-lg h-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white flex flex-col overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex-shrink-0">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ai-blue to-blue-600 flex items-center justify-center flex-shrink-0 animate-float">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-ai-blue uppercase tracking-wider">AI Product Intelligence</span>
                  </div>
                  <p className="text-sm font-semibold text-white line-clamp-1">{product.title}</p>
                </div>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/10 flex-shrink-0">
                <X size={18} />
              </button>
            </div>

            {/* Product quick stats */}
            <div className="mt-3 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star size={13} className="text-amazon-orange fill-amazon-orange" />
                <span className="font-bold">{product.rating}</span>
                <span className="text-gray-400 text-xs">({product.reviews.toLocaleString()})</span>
              </div>
              <div className="text-amazon-orange font-bold">₹{product.price.toLocaleString()}</div>
              <div className="text-green-400 text-xs font-medium">-{product.discount}% off</div>
              {product.prime && (
                <span className="flex items-center gap-0.5 bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                  <Zap size={9} /> prime
                </span>
              )}
            </div>

            {/* Tabs */}
            <div className="flex gap-1 mt-3">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-ai-blue text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon size={12} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <AnimatePresence mode="wait">
              {activeTab === 'summary' && (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {/* AI Summary */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-1.5 mb-3">
                      <Sparkles size={14} className="text-ai-blue" />
                      <span className="text-xs font-bold text-ai-blue uppercase tracking-wider">AI Summary</span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed mb-3">{ai.valueProposition}</p>
                    <div className="space-y-1.5">
                      {ai.keyFeatures.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle size={13} className="text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-200">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best Use Cases */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-1.5 mb-3">
                      <Target size={14} className="text-amber-400" />
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Best Use Cases</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ai.bestUseCases.map((u, i) => (
                        <span key={i} className="bg-amber-400/10 text-amber-300 border border-amber-400/20 text-xs px-2.5 py-1 rounded-full">
                          {u}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                      <span className="text-gray-300 font-medium">Target Audience:</span> {ai.targetAudience}
                    </p>
                  </div>

                  {/* Pros & Cons */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-500/10 rounded-xl p-3 border border-green-500/20">
                      <div className="flex items-center gap-1.5 mb-2">
                        <ThumbsUp size={12} className="text-green-400" />
                        <span className="text-xs font-bold text-green-400">PROS</span>
                      </div>
                      <ul className="space-y-1">
                        {ai.pros.map((p, i) => (
                          <li key={i} className="text-xs text-gray-300 flex items-start gap-1.5">
                            <span className="text-green-400 mt-0.5 flex-shrink-0">+</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-500/10 rounded-xl p-3 border border-red-500/20">
                      <div className="flex items-center gap-1.5 mb-2">
                        <ThumbsDown size={12} className="text-red-400" />
                        <span className="text-xs font-bold text-red-400">CONS</span>
                      </div>
                      <ul className="space-y-1">
                        {ai.cons.map((c, i) => (
                          <li key={i} className="text-xs text-gray-300 flex items-start gap-1.5">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">−</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Specs */}
                  {product.specs && (
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Specifications</span>
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        {Object.entries(product.specs).map(([k, v]) => (
                          <div key={k} className="text-xs">
                            <span className="text-gray-500 capitalize">{k}: </span>
                            <span className="text-gray-200 font-medium">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'reviews' && (
                <motion.div
                  key="reviews"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {/* Sentiment score */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <BarChart3 size={14} className="text-ai-blue" />
                        <span className="text-xs font-bold text-ai-blue uppercase tracking-wider">Review Intelligence</span>
                      </div>
                      <span className="text-xs text-gray-400">{product.reviews.toLocaleString()} reviews analyzed</span>
                    </div>
                    <div className="mb-1.5">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">Overall Sentiment</span>
                        <span className="text-green-400 font-bold">
                          {ai.reviewSummary.sentiment >= 90 ? 'Excellent' : ai.reviewSummary.sentiment >= 80 ? 'Very Positive' : 'Positive'}
                        </span>
                      </div>
                      <SentimentBar score={ai.reviewSummary.sentiment} />
                    </div>
                  </div>

                  {/* Most loved */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-1.5 mb-3">
                      <TrendingUp size={14} className="text-green-400" />
                      <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Most Loved Features</span>
                    </div>
                    <ul className="space-y-2">
                      {ai.reviewSummary.lovedFeatures.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <ThumbsUp size={12} className="text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-200">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Common complaints */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-1.5 mb-3">
                      <AlertTriangle size={14} className="text-amber-400" />
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Common Complaints</span>
                    </div>
                    <ul className="space-y-2">
                      {ai.reviewSummary.complaints.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <TrendingDown size={12} className="text-amber-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-200">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Durability & Value */}
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Shield size={12} className="text-blue-400" />
                        <span className="text-xs font-bold text-blue-400">DURABILITY INSIGHTS</span>
                      </div>
                      <p className="text-xs text-gray-300">{ai.reviewSummary.durability}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                      <div className="flex items-center gap-1.5 mb-1">
                        <TrendingUp size={12} className="text-purple-400" />
                        <span className="text-xs font-bold text-purple-400">VALUE FOR MONEY</span>
                      </div>
                      <p className="text-xs text-gray-300">{ai.reviewSummary.valueForMoney}</p>
                    </div>
                  </div>

                  {/* Fake review indicator */}
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield size={14} className="text-green-400" />
                      <div>
                        <p className="text-xs font-bold text-white">Fake Review Detection</p>
                        <p className="text-xs text-gray-400">AI analysis of {product.reviews.toLocaleString()} reviews</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-green-500/20 px-2.5 py-1 rounded-full">
                      <CheckCircle size={11} className="text-green-400" />
                      <span className="text-xs font-bold text-green-400">
                        {ai.reviewSummary.sentiment >= 85 ? '94% Verified' : '87% Verified'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'verdict' && (
                <motion.div
                  key="verdict"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {/* AI Buying Score */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center gap-4">
                    <ScoreRing score={ai.recommendation.buyingScore} />
                    <div>
                      <p className="text-xs font-bold text-ai-blue uppercase tracking-wider mb-1">AI Buying Score</p>
                      <p className="text-sm text-gray-300">
                        {ai.recommendation.buyingScore >= 90
                          ? 'Highly recommended — exceptional value and quality'
                          : ai.recommendation.buyingScore >= 80
                          ? 'Strong recommendation for the right buyer'
                          : 'Good product with some trade-offs to consider'}
                      </p>
                    </div>
                  </div>

                  {/* Worth Buying badge */}
                  {ai.recommendation.buyingScore >= 80 && (
                    <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-3 border border-green-500/30 flex items-center gap-3">
                      <Award size={24} className="text-green-400 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-green-400">✓ Worth Buying</p>
                        <p className="text-xs text-gray-400">AI recommends this based on reviews and value analysis</p>
                      </div>
                    </div>
                  )}

                  {/* Who should buy */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-1.5 mb-3">
                      <CheckCircle size={14} className="text-green-400" />
                      <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Buy If You Are</span>
                    </div>
                    <p className="text-sm text-gray-200">{ai.recommendation.shouldBuy}</p>
                  </div>

                  {/* Who should avoid */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-1.5 mb-3">
                      <XCircle size={14} className="text-red-400" />
                      <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Avoid If You Are</span>
                    </div>
                    <p className="text-sm text-gray-200">{ai.recommendation.shouldAvoid}</p>
                  </div>

                  {/* Alternatives */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-1.5 mb-3">
                      <MessageSquare size={14} className="text-purple-400" />
                      <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Consider Alternatives</span>
                    </div>
                    <div className="space-y-2">
                      {ai.recommendation.alternatives.map((alt, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <span className="text-purple-400">→</span>
                          {alt}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer CTA */}
          <div className="p-4 border-t border-white/10 flex gap-2 flex-shrink-0">
            <button className="flex-1 bg-amazon-orange hover:bg-amazon-orange-dark text-gray-900 font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm transition-all">
              <ShoppingCart size={16} />
              Add to Cart
            </button>
            <button className="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-2.5 rounded-lg text-sm transition-all">
              Buy Now
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
