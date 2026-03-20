import { AI_STEPS } from '../data/constants';
import styles from './AiThinking.module.css';

export default function AiThinking({ aiStep, aiProgress }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.orb}>✦</div>
      <h2 className={styles.label}>AI is creating your products</h2>
      <p className={styles.sub}>Analyzing composition, emotion, and style…</p>

      <div className={styles.progressWrap}>
        <div className={styles.progressFill} style={{ width: `${aiProgress}%` }} />
      </div>
      <span className={styles.progressPct}>{aiProgress}%</span>

      <div className={styles.steps}>
        {AI_STEPS.map((s, i) => {
          const isDone   = i < aiStep;
          const isActive = i === aiStep;
          return (
            <div
              key={i}
              className={`${styles.step} ${isDone ? styles.done : ''} ${isActive ? styles.active : ''}`}
            >
              <span className={styles.stepIcon}>
                {isDone ? '✓' : isActive ? '⟳' : s.icon}
              </span>
              <span>{s.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
