import ProductMockup from './ProductMockup';
import styles from './ProductCard.module.css';

const BADGE_CONFIG = {
  ai:      { cls: styles.badgeAi,      label: '✦ AI Pick'  },
  popular: { cls: styles.badgePopular, label: '🔥 Popular' },
  new:     { cls: styles.badgeNew,     label: '🆕 New'     },
};

export default function ProductCard({ product, photo, keywords, inCart, onAdd, onCustomize, customization, index }) {
  const badge = product.badge ? BADGE_CONFIG[product.badge] : null;

  return (
    <div
      className={`${styles.card} ${index === 0 ? styles.featured : ''} ${inCart ? styles.inCart : ''}`}
      style={{ animationDelay: `${index * 35}ms` }}
    >
      {/* Mockup canvas */}
      <div className={styles.canvas} style={{ background: `radial-gradient(circle at 40% 40%, ${product.color}18 0%, var(--bg-elevated) 70%)` }}>
        {badge && <span className={`${styles.badge} ${badge.cls}`}>{badge.label}</span>}

        <div className={styles.mockupWrap}>
          <ProductMockup product={product} photo={photo} customization={customization} />
        </div>

        <div className={styles.keywordOverlay} style={{ color: product.color }}>
          {keywords.slice(0, 2).join(' · ')}
        </div>
      </div>

      {/* Info row */}
      <div className={styles.info}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.type}>{product.type}</div>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <div className={styles.btnGroup}>
            <button className={styles.btnIcon} onClick={onCustomize} title="Customize">🎨</button>
            <button className={`${styles.btnAdd} ${inCart ? styles.added : ''}`} onClick={onAdd}>
              {inCart ? '✓ Added' : '+ Add'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
