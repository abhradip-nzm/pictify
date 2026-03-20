import { useState, useCallback, useRef } from 'react';
import { AI_STEPS, PRODUCT_TEMPLATES } from '../data/constants';

export function useAiGeneration() {
  const [phase, setPhase] = useState('idle'); // 'idle' | 'thinking' | 'results'
  const [aiStep, setAiStep] = useState(0);
  const [aiProgress, setAiProgress] = useState(0);
  const [products, setProducts] = useState([]);
  const timerRef = useRef(null);

  const generate = useCallback(() => {
    setPhase('thinking');
    setAiStep(0);
    setAiProgress(0);

    let step = 0;
    timerRef.current = setInterval(() => {
      step += 1;
      setAiStep(step);
      setAiProgress(Math.round((step / AI_STEPS.length) * 100));

      if (step >= AI_STEPS.length) {
        clearInterval(timerRef.current);
        setTimeout(() => {
          setProducts(PRODUCT_TEMPLATES);
          setPhase('results');
        }, 600);
      }
    }, 700);
  }, []);

  const reset = useCallback(() => {
    clearInterval(timerRef.current);
    setPhase('idle');
    setAiStep(0);
    setAiProgress(0);
    setProducts([]);
  }, []);

  return { phase, aiStep, aiProgress, products, generate, reset };
}
