import styles from './StylePreviewModal.module.css';

export default function StylePreviewModal({ style, onClose }) {
  if (!style) return null;
  const p = style.preview;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        <div className={styles.header}>
          <span className={styles.headerTitle}>
            <span className={styles.headerIcon}>{style.icon}</span>
            {style.name} Style Preview
          </span>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>

        {/* Visual mock */}
        <div className={styles.canvas} style={{ background: p.bg }}>
          <div className={styles.mockCard} style={{ background: p.mockBg, borderColor: p.borderColor }}>
            <div className={styles.mockImageArea} style={{ borderColor: p.borderColor }}>
              <span className={styles.mockEmoji}>🌅</span>
            </div>
            <div className={styles.mockBody}>
              <div className={styles.mockTitle} style={{ color: p.mockAccent }}>Your Memories</div>
              <div className={styles.mockSub} style={{ color: p.mockSub }}>{p.tagline}</div>
              <div className={styles.mockKeywords} style={{ color: p.mockAccent, borderColor: p.borderColor }}>
                memories · family
              </div>
            </div>
          </div>
          <div className={styles.canvasLabel} style={{ color: p.textColor }}>
            Sample product layout
          </div>
        </div>

        {/* Traits */}
        <div className={styles.traitsSection}>
          <div className={styles.traitsTitle}>Style characteristics</div>
          <div className={styles.traits}>
            {p.traits.map((t) => (
              <span key={t} className={styles.trait}>{t}</span>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <span className={styles.footerDesc}>{style.desc}</span>
          <button className={styles.selectBtn} onClick={onClose}>Got it</button>
        </div>
      </div>
    </div>
  );
}
