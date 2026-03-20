import styles from './EmptyState.module.css';

const TAGS = ['☕ Mugs', '🖼️ Prints', '👕 Apparel', '🛋️ Décor', '📔 Stationery', '🧩 Fun'];

export default function EmptyState() {
  return (
    <div className={styles.wrap}>
      <div className={styles.orb}>✦</div>
      <h2 className={styles.title}>Your AI Product Studio</h2>
      <p className={styles.desc}>
        Select a photo, pick an emotion and keywords, choose your style —
        then let AI generate 16 beautiful personalized products in seconds.
      </p>
      <div className={styles.tags}>
        {TAGS.map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
      <div className={styles.steps}>
        {['Choose a photo', 'Pick an emotion', 'Add keywords', 'Select style', 'Generate ✦'].map((s, i) => (
          <div key={i} className={styles.step}>
            <span className={styles.stepNum}>{i + 1}</span>
            <span>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
