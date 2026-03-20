import { PRODUCT_OPTIONS } from '../data/constants';
import styles from './VariationPanel.module.css';

function getAiSuggest(opt, selectedStyle) {
  if (!opt.aiSuggest || !selectedStyle) return null;
  return opt.aiSuggest[selectedStyle] ?? null;
}

function ColorRow({ opt, value, onChange, selectedStyle }) {
  const suggested = getAiSuggest(opt, selectedStyle);
  return (
    <div className={styles.optGroup}>
      <div className={styles.optHeader}>
        <span className={styles.optLabel}>{opt.label}</span>
        {suggested && suggested !== value && suggested !== opt.default && (
          <button className={styles.aiApplyBtn} onClick={() => onChange(suggested)}>
            ✦ AI Pick
          </button>
        )}
      </div>
      <div className={styles.colorGrid}>
        {opt.choices.map((c) => {
          const isSelected = value ? value === c.value : c.value === opt.default;
          const isAi = c.value === suggested;
          return (
            <button
              key={c.value}
              className={`${styles.colorSwatch} ${isSelected ? styles.swatchSelected : ''} ${isAi ? styles.swatchAi : ''}`}
              style={{ background: c.value === 'none' ? 'transparent' : c.value }}
              onClick={() => onChange(c.value)}
              title={c.label}
            >
              {c.value === 'none' && <span className={styles.noneX}>✕</span>}
              {isAi && !isSelected && <span className={styles.aiDot} />}
            </button>
          );
        })}
      </div>
      {suggested && (
        <div className={styles.aiHint}>
          ✦ AI recommends <strong>{opt.choices.find(c => c.value === suggested)?.label}</strong> for your {selectedStyle} style
        </div>
      )}
    </div>
  );
}

function TabsRow({ opt, value, onChange }) {
  const current = value ?? opt.default;
  return (
    <div className={styles.optGroup}>
      <span className={styles.optLabel}>{opt.label}</span>
      <div className={styles.tabs}>
        {opt.choices.map((c) => (
          <button
            key={c}
            className={`${styles.tab} ${current === c ? styles.tabActive : ''}`}
            onClick={() => onChange(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function VariationPanel({ product, isOpen, onClose, customization, onUpdate, selectedStyle }) {
  if (!product) return null;
  const opts = PRODUCT_OPTIONS[product.id] || [];
  const cust = customization || {};

  const applyAllAi = () => {
    opts.forEach((opt) => {
      const ai = getAiSuggest(opt, selectedStyle);
      if (ai) onUpdate(opt.id, ai);
    });
  };

  const hasAiSuggestions = opts.some((opt) => {
    const ai = getAiSuggest(opt, selectedStyle);
    return ai && ai !== (cust[opt.id] ?? opt.default);
  });

  return (
    <div className={`${styles.panel} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span>{product.icon}</span>
          Customize — {product.name}
        </div>
        <div className={styles.headerRight}>
          {hasAiSuggestions && (
            <button className={styles.applyAllAi} onClick={applyAllAi}>
              ✦ Apply AI Picks
            </button>
          )}
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>
      </div>

      {opts.length === 0 ? (
        <p className={styles.noOpts}>No customization options for this product.</p>
      ) : (
        <div className={styles.body}>
          {opts.map((opt) => (
            opt.type === 'color'
              ? <ColorRow
                  key={opt.id}
                  opt={opt}
                  value={cust[opt.id]}
                  onChange={(v) => onUpdate(opt.id, v)}
                  selectedStyle={selectedStyle}
                />
              : <TabsRow
                  key={opt.id}
                  opt={opt}
                  value={cust[opt.id]}
                  onChange={(v) => onUpdate(opt.id, v)}
                />
          ))}
        </div>
      )}
    </div>
  );
}
