import { useState, useCallback } from 'react';

export function useCart() {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      if (prev.find((i) => i.id === product.id)) return prev;
      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const isInCart = useCallback((id) => cart.some((i) => i.id === id), [cart]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return { cart, addToCart, removeFromCart, clearCart, isInCart, cartTotal };
}
