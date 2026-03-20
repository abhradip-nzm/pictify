import { useState, useCallback } from 'react';

import Header         from './components/Header';
import LeftPanel      from './components/LeftPanel';
import EmptyState     from './components/EmptyState';
import AiThinking     from './components/AiThinking';
import ResultsPanel   from './components/ResultsPanel';
import CartPanel      from './components/CartPanel';
import VariationPanel from './components/VariationPanel';
import Toast          from './components/Toast';

import { useAiGeneration } from './hooks/useAiGeneration';
import { useCart }         from './hooks/useCart';
import { useToast }        from './hooks/useToast';
import { useAiSuggest }    from './hooks/useAiSuggest';

import styles from './App.module.css';

export default function App() {
  const [selectedPhoto,   setSelectedPhoto]   = useState(null);
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [selectedStyle,   setSelectedStyle]   = useState('vibrant');
  const [keywords,        setKeywords]         = useState(['memories', 'family']);
  const [kwInput,         setKwInput]          = useState('');

  const [cartOpen,       setCartOpen]       = useState(false);
  const [varOpen,        setVarOpen]        = useState(false);
  const [varProduct,     setVarProduct]     = useState(null);
  // customizations: { [productId]: { optionId: value, ... } }
  const [customizations, setCustomizations] = useState({});

  const { phase, aiStep, aiProgress, products, generate, reset } = useAiGeneration();
  const { cart, addToCart, removeFromCart, clearCart, isInCart, cartTotal } = useCart();
  const { toast, showToast } = useToast();
  const { suggestion, isAnalyzing, analyze, dismiss } = useAiSuggest();

  const handleSelectPhoto = useCallback((photo) => {
    setSelectedPhoto(photo);
    analyze(photo);
  }, [analyze]);

  const handleRemovePhoto = useCallback(() => {
    setSelectedPhoto(null);
    dismiss();
  }, [dismiss]);

  const handleAddKeyword = useCallback((word) => {
    setKeywords((prev) => prev.includes(word) ? prev : [...prev, word]);
    setKwInput('');
  }, []);

  const handleRemoveKeyword = useCallback((word) => {
    setKeywords((prev) => prev.filter((k) => k !== word));
  }, []);

  const handleGenerate = () => {
    if (!selectedPhoto || !selectedEmotion) {
      showToast('Please select a photo and emotion first ✨');
      return;
    }
    generate();
  };

  const handleAddToCart = (product) => {
    const customization = customizations[product.id] || {};
    addToCart({ ...product, customization });
    showToast(`${product.name} added to cart 🛒`);
  };

  const handleClearCart = () => {
    clearCart();
    showToast('Cart cleared ✓');
  };

  const handleReset = () => {
    reset();
    clearCart();
    setSelectedPhoto(null);
    setSelectedEmotion(null);
    setSelectedStyle('vibrant');
    setKeywords(['memories', 'family']);
    setKwInput('');
    setVarOpen(false);
    setVarProduct(null);
    setCustomizations({});
    dismiss();
  };

  const handleCustomize = (product) => {
    setVarProduct(product);
    setVarOpen(true);
  };

  const handleUpdateCustomization = useCallback((optionId, value) => {
    setCustomizations((prev) => ({
      ...prev,
      [varProduct.id]: { ...(prev[varProduct.id] || {}), [optionId]: value },
    }));
  }, [varProduct]);

  return (
    <div className={styles.app}>
      <Header
        cartCount={cart.length}
        onCartOpen={() => setCartOpen((o) => !o)}
      />

      <div className={styles.layout}>
        <LeftPanel
          selectedPhoto={selectedPhoto}       onSelectPhoto={handleSelectPhoto}
          onRemovePhoto={handleRemovePhoto}
          selectedEmotion={selectedEmotion}   onSelectEmotion={setSelectedEmotion}
          selectedStyle={selectedStyle}       onSelectStyle={setSelectedStyle}
          keywords={keywords}
          onAddKeyword={handleAddKeyword}
          onRemoveKeyword={handleRemoveKeyword}
          kwInput={kwInput}                   onKwInput={setKwInput}
          onGenerate={handleGenerate}
          isGenerating={phase === 'thinking'}
          suggestion={suggestion}
          isAnalyzing={isAnalyzing}
          onDismissSuggestion={dismiss}
        />

        <main className={styles.main}>
          {phase === 'idle'     && <EmptyState />}
          {phase === 'thinking' && <AiThinking aiStep={aiStep} aiProgress={aiProgress} />}
          {phase === 'results'  && (
            <ResultsPanel
              products={products}
              selectedPhoto={selectedPhoto}
              selectedEmotion={selectedEmotion}
              keywords={keywords}
              cart={cart}
              isInCart={isInCart}
              customizations={customizations}
              onAddToCart={handleAddToCart}
              onCustomize={handleCustomize}
              onReset={handleReset}
              onCartOpen={() => setCartOpen(true)}
            />
          )}
        </main>
      </div>

      <CartPanel
        cart={cart}
        cartTotal={cartTotal}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onClear={handleClearCart}
        onCheckout={() => showToast('Checkout coming soon! 🚀')}
      />

      <VariationPanel
        product={varProduct}
        isOpen={varOpen}
        onClose={() => setVarOpen(false)}
        customization={customizations[varProduct?.id] || {}}
        onUpdate={handleUpdateCustomization}
        selectedStyle={selectedStyle}
      />

      <Toast msg={toast.msg} visible={toast.visible} />
    </div>
  );
}
