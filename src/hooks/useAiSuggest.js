import { useState, useCallback, useRef } from 'react';

// Curated suggestions per photo archetype
const SUGGESTIONS = {
  sunset:     { emotion: 'nostalgic',   keywords: ['golden hour', 'warmth', 'twilight'],    style: 'vibrant'  },
  mountain:   { emotion: 'adventure',   keywords: ['wilderness', 'peak', 'journey'],         style: 'minimal'  },
  family:     { emotion: 'love',        keywords: ['together', 'home', 'cherished'],          style: 'vintage'  },
  wedding:    { emotion: 'love',        keywords: ['forever', 'elegance', 'ceremony'],        style: 'luxury'   },
  birthday:   { emotion: 'celebratory', keywords: ['joy', 'celebration', 'milestone'],        style: 'vibrant'  },
  travel:     { emotion: 'adventure',   keywords: ['explore', 'wanderlust', 'discovery'],     style: 'minimal'  },
  pet:        { emotion: 'joyful',      keywords: ['playful', 'furry', 'companion'],          style: 'vibrant'  },
  graduation: { emotion: 'celebratory', keywords: ['achievement', 'future', 'pride'],         style: 'luxury'   },
  upload:     { emotion: 'joyful',      keywords: ['memories', 'special', 'moment'],          style: 'vibrant'  },
};

export function useAiSuggest() {
  const [suggestion, setSuggestion]   = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const timerRef = useRef(null);

  const analyze = useCallback((photo) => {
    clearTimeout(timerRef.current);
    if (!photo) { setSuggestion(null); setIsAnalyzing(false); return; }

    setSuggestion(null);
    setIsAnalyzing(true);

    timerRef.current = setTimeout(() => {
      const s = SUGGESTIONS[photo.id] ?? SUGGESTIONS.upload;
      setSuggestion(s);
      setIsAnalyzing(false);
    }, 1600);
  }, []);

  const dismiss = useCallback(() => setSuggestion(null), []);

  return { suggestion, isAnalyzing, analyze, dismiss };
}
