import { useState, useCallback } from 'react';

export function useToast() {
  const [toast, setToast] = useState({ visible: false, msg: '', type: 'default' });

  const showToast = useCallback((msg, type = 'default') => {
    setToast({ visible: true, msg, type });
    setTimeout(() => setToast({ visible: false, msg: '', type: 'default' }), 3000);
  }, []);

  return { toast, showToast };
}
