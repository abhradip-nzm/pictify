import { useState, useEffect } from 'react';
import { FILTER_TABS, AI_INSIGHTS, EMOTIONS } from '../data/constants';
import ProductCard from './ProductCard';
import styles from './ResultsPanel.module.css';

export default function ResultsPanel({
  products,
  selectedPhoto,
  selectedEmotion,
  keywords,
  cart,
  isInCart,
  customizations,
  onAddToCart,
  onCustomize,
  onReset,
  onCartOpen,
}) {
  const [filterTab, setFilterTab] = useState('All');
  const [insightIdx, setInsightIdx] = useState(0);

  // Rotate AI insights every 5 seconds
  useEffect(() => {
    const t = setInterval(() => setInsightIdx((i) => (i + 1) % AI_INSIGHTS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const filtered = filterTab === 'All'
    ? products
    : products.filter((p) => p.type === filterTab);

  const emotion = EMOTIONS.find((e) => e.id === selectedEmotion);

  const stats = [
    { label: 'Products Generated', value: '16',     sub: 'AI-curated for you',            color: 'var(--purple-glow)' },
    { label: 'Emotion Match',       value: '98%',    sub: `${emotion?.emoji} ${selectedEmotion}`, color: 'var(--accent-teal)' },
    { label: 'Print Quality',       value: '4K',     sub: 'Ultra-HD ready',                color: 'var(--accent-amber)' },
    { label: 'In Your Cart',        value: cart.length, sub: `$${cart.reduce((s,i) => s + i.price, 0).toFixed(2)} total`, color: 'var(--accent-pink)' },
  ];

  return (
    <div className={styles.wrap}>
      {/* Stats */}
      <div className={styles.statsBar}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statCard}>
            <div className={styles.statLabel}>{s.label}</div>
            <div className={styles.statValue} style={{ color: s.color }}>{s.value}</div>
            <div className={styles.statSub}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* AI Insight */}
      <div className={styles.insight}>
        <div className={styles.insightIcon}>🤖</div>
        <div>
          <div className={styles.insightTitle}>AI Insight</div>
          <div className={styles.insightText}>{AI_INSIGHTS[insightIdx]}</div>
        </div>
      </div>

      {/* Topbar */}
      <div className={styles.topbar}>
        <div>
          <h2 className={styles.heading}>Your Products</h2>
          <p className={styles.sub}>{filtered.length} products • Personalized for {selectedPhoto?.label}</p>
        </div>
        <div className={styles.topActions}>
          <button className={styles.actionBtn} onClick={onReset}>↺ Reset</button>
          <button className={`${styles.actionBtn} ${styles.primary}`} onClick={onCartOpen}>
            🛒 Cart ({cart.length})
          </button>
        </div>
      </div>

      {/* Filter bar */}
      <div className={styles.filterBar}>
        {FILTER_TABS.map((tab) => (
          <button
            key={tab}
            className={`${styles.filterTab} ${filterTab === tab ? styles.active : ''}`}
            onClick={() => setFilterTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className={styles.grid}>
        {filtered.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            photo={selectedPhoto}
            keywords={keywords}
            inCart={isInCart(product.id)}
            index={idx}
            customization={customizations?.[product.id] || {}}
            onAdd={(e) => { e.stopPropagation(); onAddToCart(product); }}
            onCustomize={(e) => { e.stopPropagation(); onCustomize(product); }}
          />
        ))}
      </div>
    </div>
  );
}
