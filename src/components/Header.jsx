import styles from './Header.module.css';

export default function Header({ cartCount, onCartOpen }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>✦</div>
        <span>
          Picti<span className={styles.logoAccent}>fy</span>
        </span>
        <span className={styles.logoSub}>Creator</span>
      </div>

      <div className={styles.actions}>
        <div className={styles.aiBadge}>
          <span className={styles.badgeDot} />
          AI-Powered
        </div>
        <button className={styles.cartBtn} onClick={onCartOpen}>
          🛒 Cart
          {cartCount > 0 && (
            <span className={styles.cartQty}>{cartCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}
