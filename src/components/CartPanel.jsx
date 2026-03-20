import { PRODUCT_OPTIONS } from '../data/constants';
import styles from './CartPanel.module.css';

export default function CartPanel({ cart, cartTotal, isOpen, onClose, onRemove, onClear, onCheckout }) {
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
      <aside className={`${styles.panel} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>🛒 Your Cart</h2>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>

        {cart.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>🛒</div>
            <p className={styles.emptyText}>Your cart is empty.</p>
            <p className={styles.emptySub}>Add products to get started.</p>
          </div>
        ) : (
          <>
            <div className={styles.items}>
              {cart.map((item) => {
                const opts = PRODUCT_OPTIONS[item.id] || [];
                const custom = item.customization || {};
                // Build list of human-readable customization entries
                const details = opts.map((opt) => {
                  const val = custom[opt.id] ?? opt.default;
                  if (opt.type === 'color') {
                    const choice = opt.choices.find((c) => c.value === val);
                    return { id: opt.id, label: opt.label, type: 'color', value: val, name: choice?.label ?? val };
                  }
                  return { id: opt.id, label: opt.label, type: 'tabs', value: val, name: val };
                });

                return (
                  <div key={item.id} className={styles.item}>
                    <div className={styles.itemEmoji}>{item.icon}</div>
                    <div className={styles.itemInfo}>
                      <div className={styles.itemName}>{item.name}</div>
                      {details.length > 0 && (
                        <div className={styles.itemDetails}>
                          {details.map((d) => (
                            <span key={d.id} className={styles.itemDetail}>
                              {d.type === 'color' && (
                                <span
                                  className={styles.detailSwatch}
                                  style={{ background: d.value }}
                                />
                              )}
                              {d.name}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className={styles.itemPrice}>${item.price.toFixed(2)}</div>
                    </div>
                    <button className={styles.itemRemove} onClick={() => onRemove(item.id)}>×</button>
                  </div>
                );
              })}
            </div>

            <div className={styles.total}>
              <div className={styles.totalLabel}>Order Total</div>
              <div className={styles.totalAmount}>${cartTotal.toFixed(2)}</div>
              <div className={styles.totalSub}>{cart.length} item{cart.length !== 1 ? 's' : ''}</div>
            </div>

            <button className={styles.checkoutBtn} onClick={onCheckout}>
              Proceed to Checkout →
            </button>

            <button className={styles.clearBtn} onClick={onClear}>
              Clear Cart
            </button>
          </>
        )}
      </aside>
    </>
  );
}
