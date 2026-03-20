// ── Sample photo archetypes ───────────────────────────────────────────────
export const SAMPLE_PHOTOS = [
  { id: 'sunset',     emoji: '🌅', label: 'Sunset',     bg: 'linear-gradient(135deg,#ff6b35,#f7c59f,#9b5de5)' },
  { id: 'mountain',   emoji: '🏔️', label: 'Mountain',   bg: 'linear-gradient(135deg,#48cae4,#023e8a,#6d6875)' },
  { id: 'family',     emoji: '👨‍👩‍👧', label: 'Family',     bg: 'linear-gradient(135deg,#ffcdb2,#e5989b,#6d6875)' },
  { id: 'wedding',    emoji: '💒', label: 'Wedding',    bg: 'linear-gradient(135deg,#e9ecef,#dee2e6,#9b5de5)' },
  { id: 'birthday',   emoji: '🎂', label: 'Birthday',   bg: 'linear-gradient(135deg,#ffbe0b,#fb5607,#ff006e)' },
  { id: 'travel',     emoji: '✈️', label: 'Travel',     bg: 'linear-gradient(135deg,#00b4d8,#0077b6,#023e8a)' },
  { id: 'pet',        emoji: '🐕', label: 'Pet',        bg: 'linear-gradient(135deg,#a8dadc,#457b9d,#1d3557)' },
  { id: 'graduation', emoji: '🎓', label: 'Graduation', bg: 'linear-gradient(135deg,#9b5de5,#c77dff,#e0aaff)' },
];

// ── Emotions ──────────────────────────────────────────────────────────────
export const EMOTIONS = [
  { id: 'joyful',      emoji: '😄', label: 'Joyful' },
  { id: 'love',        emoji: '❤️', label: 'Love' },
  { id: 'nostalgic',   emoji: '🌅', label: 'Nostalgic' },
  { id: 'adventure',   emoji: '🏔️', label: 'Adventure' },
  { id: 'peaceful',    emoji: '🌿', label: 'Peaceful' },
  { id: 'celebratory', emoji: '🎉', label: 'Celebratory' },
];

// ── Style options ─────────────────────────────────────────────────────────
export const STYLE_OPTIONS = [
  {
    id: 'minimal', icon: '◽', name: 'Minimal', desc: 'Clean, white space, quiet elegance',
    preview: {
      bg: 'linear-gradient(145deg, #f5f5f7 0%, #e8e8ed 100%)',
      textColor: '#1d1d1f', accentColor: '#6e6e73', borderColor: '#d2d2d7',
      tagline: 'Less is more.',
      traits: ['Generous white space', 'Simple sans-serif type', 'Monochrome palette'],
      mockBg: '#ffffff', mockAccent: '#1d1d1f', mockSub: '#6e6e73',
    },
  },
  {
    id: 'vibrant', icon: '🎨', name: 'Vibrant', desc: 'Bold colors, high contrast, energetic',
    preview: {
      bg: 'linear-gradient(145deg, #7c5ff5 0%, #e040fb 55%, #ffb547 100%)',
      textColor: '#ffffff', accentColor: '#ffd700', borderColor: 'rgba(255,255,255,0.35)',
      tagline: 'Make it pop!',
      traits: ['Bold color gradients', 'High contrast layout', 'Dynamic composition'],
      mockBg: 'linear-gradient(135deg,#7c5ff5,#e040fb)', mockAccent: '#ffffff', mockSub: 'rgba(255,255,255,0.7)',
    },
  },
  {
    id: 'vintage', icon: '📷', name: 'Vintage', desc: 'Film grain, warm tones, nostalgia',
    preview: {
      bg: 'linear-gradient(145deg, #c8956c 0%, #a0714f 50%, #6b4c35 100%)',
      textColor: '#f5e6d3', accentColor: '#f5deb3', borderColor: 'rgba(245,222,179,0.4)',
      tagline: 'Timeless memories.',
      traits: ['Warm sepia tones', 'Film grain texture', 'Aged vignette border'],
      mockBg: 'linear-gradient(135deg,#c8956c,#6b4c35)', mockAccent: '#f5e6d3', mockSub: 'rgba(245,230,211,0.6)',
    },
  },
  {
    id: 'luxury', icon: '✦', name: 'Luxury', desc: 'Gold accents, refined typography',
    preview: {
      bg: 'linear-gradient(145deg, #1a1208 0%, #2d2010 50%, #1a1208 100%)',
      textColor: '#c9a84c', accentColor: '#f0d080', borderColor: 'rgba(201,168,76,0.5)',
      tagline: 'The finest quality.',
      traits: ['Gold foil accents', 'Premium serif fonts', 'Deep dark elegance'],
      mockBg: 'linear-gradient(135deg,#2d2010,#1a1208)', mockAccent: '#c9a84c', mockSub: 'rgba(201,168,76,0.6)',
    },
  },
];

// ── Product catalogue (16 items) ──────────────────────────────────────────
export const PRODUCT_TEMPLATES = [
  { id: 'mug',        type: 'Drinkware',    name: 'Ceramic Mug',          icon: '☕', price: 24.99, badge: 'popular', color: '#7c5ff5' },
  { id: 'poster',     type: 'Wall Art',     name: 'Premium Poster',       icon: '🖼️', price: 34.99, badge: 'ai',      color: '#e040fb' },
  { id: 'canvas',     type: 'Wall Art',     name: 'Canvas Print',         icon: '🎨', price: 59.99, badge: null,      color: '#00e5cc' },
  { id: 'tshirt',     type: 'Apparel',      name: 'Classic T-Shirt',      icon: '👕', price: 29.99, badge: null,      color: '#ffb547' },
  { id: 'pillow',     type: 'Home Décor',   name: 'Throw Pillow',         icon: '🛋️', price: 39.99, badge: null,      color: '#f06595' },
  { id: 'phonecase',  type: 'Accessories',  name: 'Phone Case',           icon: '📱', price: 22.99, badge: 'new',     color: '#5ef592' },
  { id: 'blanket',    type: 'Home Décor',   name: 'Fleece Blanket',       icon: '🧸', price: 54.99, badge: null,      color: '#ffd43b' },
  { id: 'notebook',   type: 'Stationery',   name: 'Hardcover Notebook',   icon: '📔', price: 19.99, badge: null,      color: '#74c0fc' },
  { id: 'coaster',    type: 'Home Décor',   name: 'Ceramic Coaster Set',  icon: '🫖', price: 17.99, badge: 'ai',      color: '#da77f2' },
  { id: 'tote',       type: 'Accessories',  name: 'Canvas Tote Bag',      icon: '👜', price: 27.99, badge: null,      color: '#a9e34b' },
  { id: 'frame',      type: 'Wall Art',     name: 'Framed Print',         icon: '🖼️', price: 69.99, badge: null,      color: '#ff6b6b' },
  { id: 'magnet',     type: 'Stationery',   name: 'Photo Magnet Set',     icon: '🧲', price: 12.99, badge: 'new',     color: '#63e6be' },
  { id: 'calendar',   type: 'Stationery',   name: 'Custom Calendar',      icon: '📅', price: 24.99, badge: 'ai',      color: '#ffa94d' },
  { id: 'puzzle',     type: 'Fun & Games',  name: 'Photo Puzzle',         icon: '🧩', price: 44.99, badge: null,      color: '#f783ac' },
  { id: 'keychain',   type: 'Accessories',  name: 'Acrylic Keychain',     icon: '🔑', price:  9.99, badge: null,      color: '#4dabf7' },
  { id: 'ornament',   type: 'Seasonal',     name: 'Photo Ornament',       icon: '🎄', price: 14.99, badge: 'popular', color: '#96f2d7' },
];

// ── AI generation steps ───────────────────────────────────────────────────
export const AI_STEPS = [
  { label: 'Analyzing image composition',  icon: '🔍' },
  { label: 'Detecting emotional tone',     icon: '💜' },
  { label: 'Matching aesthetic profiles',  icon: '🎨' },
  { label: 'Generating product layouts',   icon: '✨' },
  { label: 'Optimizing for 16 products',  icon: '📦' },
];

// ── Product filter tabs ───────────────────────────────────────────────────
export const FILTER_TABS = [
  'All', 'Wall Art', 'Drinkware', 'Apparel',
  'Home Décor', 'Accessories', 'Stationery', 'Fun & Games', 'Seasonal',
];

// ── AI rotating insights ──────────────────────────────────────────────────
export const AI_INSIGHTS = [
  'Your photo has warm golden tones — mugs and canvas prints will showcase this beautifully.',
  'The selected emotion pairs exceptionally well with vibrant products like T-shirts and tote bags.',
  'We detected high contrast in your composition. Framed prints and posters preserve the dramatic lighting.',
  'Your keywords suggest a celebration — custom calendars and ornaments are trending for this occasion.',
  'Photos with this color profile perform 3× better on canvas than on paper prints.',
  'Based on your style choice, we applied a curated typography layout to all text-based products.',
];

// ── Color swatches for customization ─────────────────────────────────────
export const SWATCHES = [
  '#7c5ff5', '#e040fb', '#00e5cc', '#ffb547',
  '#ff6b6b', '#63e6be', '#f783ac', '#4dabf7',
];

// ── Product → SVG mockup shape mapping ───────────────────────────────────
export const PRODUCT_SHAPE = {
  mug:       'mug',
  poster:    'wall',
  canvas:    'canvas',
  tshirt:    'tshirt',
  pillow:    'pillow',
  phonecase: 'phone',
  blanket:   'blanket',
  notebook:  'book',
  coaster:   'circle',
  tote:      'tote',
  frame:     'frame',
  magnet:    'magnet',
  calendar:  'book',
  puzzle:    'puzzle',
  keychain:  'circle',
  ornament:  'ornament',
};

// ── Per-product customization option schemas ──────────────────────────────
// type: 'color' | 'tabs'
// aiSuggest: { [styleId]: value }  ← AI picks per style
export const PRODUCT_OPTIONS = {
  tshirt: [
    {
      id: 'garmentColor', label: 'Shirt Color', type: 'color',
      choices: [
        { value: '#ffffff', label: 'White' }, { value: '#1a1a1a', label: 'Black' },
        { value: '#1d3461', label: 'Navy' },  { value: '#e63946', label: 'Red' },
        { value: '#2d6a4f', label: 'Forest' },{ value: '#9b5de5', label: 'Purple' },
        { value: '#f4a261', label: 'Peach' }, { value: '#adb5bd', label: 'Gray' },
      ],
      default: '#ffffff',
      aiSuggest: { vibrant: '#9b5de5', minimal: '#ffffff', vintage: '#f4a261', luxury: '#1a1a1a' },
    },
    { id: 'printSize', label: 'Print Size', type: 'tabs', choices: ['Small', 'Medium', 'Large'], default: 'Medium' },
  ],
  mug: [
    {
      id: 'mugColor', label: 'Mug Color', type: 'color',
      choices: [
        { value: '#ffffff', label: 'White' }, { value: '#1a1a1a', label: 'Black' },
        { value: '#c9a84c', label: 'Gold' },  { value: '#e63946', label: 'Red' },
        { value: '#457b9d', label: 'Blue' },  { value: '#9b5de5', label: 'Purple' },
        { value: '#2d6a4f', label: 'Green' }, { value: '#f4a261', label: 'Peach' },
      ],
      default: '#ffffff',
      aiSuggest: { vibrant: '#9b5de5', minimal: '#ffffff', vintage: '#f4a261', luxury: '#c9a84c' },
    },
    { id: 'mugSize', label: 'Size', type: 'tabs', choices: ['11 oz', '15 oz'], default: '11 oz' },
  ],
  poster: [
    { id: 'paperFinish', label: 'Paper Finish', type: 'tabs', choices: ['Matte', 'Glossy', 'Satin'], default: 'Matte' },
    { id: 'posterSize',  label: 'Size',         type: 'tabs', choices: ['A4', 'A3', '18×24"', '24×36"'], default: 'A3' },
    {
      id: 'borderColor', label: 'Border', type: 'color',
      choices: [
        { value: '#ffffff', label: 'White' }, { value: '#1a1a1a', label: 'Black' },
        { value: '#c9a84c', label: 'Gold' },  { value: '#adb5bd', label: 'Silver' },
      ],
      default: '#ffffff',
      aiSuggest: { vibrant: '#1a1a1a', minimal: '#ffffff', vintage: '#c9a84c', luxury: '#c9a84c' },
    },
  ],
  canvas: [
    { id: 'canvasSize', label: 'Size', type: 'tabs', choices: ['8×10"', '12×16"', '16×20"', '24×30"'], default: '12×16"' },
    {
      id: 'wrapColor', label: 'Edge Wrap', type: 'color',
      choices: [
        { value: '#ffffff', label: 'White' }, { value: '#1a1a1a', label: 'Black' },
        { value: '#8B4513', label: 'Walnut' },{ value: '#c9a84c', label: 'Gold' },
      ],
      default: '#1a1a1a',
      aiSuggest: { vibrant: '#1a1a1a', minimal: '#ffffff', vintage: '#8B4513', luxury: '#c9a84c' },
    },
  ],
  frame: [
    {
      id: 'frameColor', label: 'Frame Color', type: 'color',
      choices: [
        { value: '#1a1a1a', label: 'Black' },  { value: '#ffffff', label: 'White' },
        { value: '#8B4513', label: 'Walnut' }, { value: '#c9a84c', label: 'Gold' },
        { value: '#adb5bd', label: 'Silver' }, { value: '#5c3d2e', label: 'Dark Wood' },
      ],
      default: '#1a1a1a',
      aiSuggest: { vibrant: '#1a1a1a', minimal: '#ffffff', vintage: '#8B4513', luxury: '#c9a84c' },
    },
    {
      id: 'matColor', label: 'Mat Color', type: 'color',
      choices: [
        { value: '#ffffff', label: 'White' }, { value: '#f5f5dc', label: 'Cream' },
        { value: '#1a1a1a', label: 'Black' }, { value: 'none', label: 'None' },
      ],
      default: '#ffffff',
    },
    { id: 'printSize', label: 'Print Size', type: 'tabs', choices: ['5×7"', '8×10"', '11×14"', '16×20"'], default: '8×10"' },
  ],
  pillow: [
    {
      id: 'pillowColor', label: 'Pillow Color', type: 'color',
      choices: [
        { value: '#ffffff', label: 'White' }, { value: '#1a1a1a', label: 'Black' },
        { value: '#9b5de5', label: 'Purple' },{ value: '#457b9d', label: 'Blue' },
        { value: '#2d6a4f', label: 'Green' }, { value: '#e63946', label: 'Red' },
        { value: '#f4a261', label: 'Peach' }, { value: '#adb5bd', label: 'Gray' },
      ],
      default: '#ffffff',
      aiSuggest: { vibrant: '#9b5de5', minimal: '#adb5bd', vintage: '#f4a261', luxury: '#1a1a1a' },
    },
    { id: 'pillowSize', label: 'Size', type: 'tabs', choices: ['14×14"', '18×18"', '20×20"'], default: '18×18"' },
  ],
  phonecase: [
    {
      id: 'caseColor', label: 'Case Color', type: 'color',
      choices: [
        { value: '#1a1a1a', label: 'Black' },  { value: '#ffffff', label: 'White' },
        { value: '#9b5de5', label: 'Purple' }, { value: '#457b9d', label: 'Blue' },
        { value: '#e63946', label: 'Red' },    { value: '#2d6a4f', label: 'Forest' },
        { value: '#f4a261', label: 'Peach' },  { value: '#e8e8e8', label: 'Clear' },
      ],
      default: '#1a1a1a',
      aiSuggest: { vibrant: '#9b5de5', minimal: '#e8e8e8', vintage: '#8B4513', luxury: '#1a1a1a' },
    },
    { id: 'phoneModel', label: 'Model', type: 'tabs', choices: ['iPhone 15', 'iPhone 14', 'Galaxy S24', 'Pixel 8'], default: 'iPhone 15' },
  ],
  blanket: [
    {
      id: 'blanketColor', label: 'Border Color', type: 'color',
      choices: [
        { value: '#ffffff', label: 'White' }, { value: '#1a1a1a', label: 'Black' },
        { value: '#9b5de5', label: 'Purple' },{ value: '#c9a84c', label: 'Gold' },
        { value: '#e63946', label: 'Red' },   { value: '#2d6a4f', label: 'Forest' },
        { value: '#457b9d', label: 'Navy' },  { value: '#f4a261', label: 'Peach' },
      ],
      default: '#ffffff',
      aiSuggest: { vibrant: '#9b5de5', minimal: '#ffffff', vintage: '#f4a261', luxury: '#c9a84c' },
    },
    { id: 'blanketSize', label: 'Size', type: 'tabs', choices: ['30×40"', '50×60"', '60×80"'], default: '50×60"' },
  ],
  notebook: [
    {
      id: 'coverColor', label: 'Cover Color', type: 'color',
      choices: [
        { value: '#1a1a1a', label: 'Black' },  { value: '#ffffff', label: 'White' },
        { value: '#1d3461', label: 'Navy' },   { value: '#2d6a4f', label: 'Forest' },
        { value: '#9b5de5', label: 'Purple' }, { value: '#c9a84c', label: 'Gold' },
        { value: '#8B4513', label: 'Brown' },  { value: '#e63946', label: 'Red' },
      ],
      default: '#1a1a1a',
      aiSuggest: { vibrant: '#9b5de5', minimal: '#ffffff', vintage: '#8B4513', luxury: '#c9a84c' },
    },
    { id: 'notebookSize', label: 'Size', type: 'tabs', choices: ['A6', 'A5', 'A4'], default: 'A5' },
  ],
  coaster: [
    {
      id: 'borderColor', label: 'Border Color', type: 'color',
      choices: [
        { value: '#ffffff', label: 'White' }, { value: '#1a1a1a', label: 'Black' },
        { value: '#c9a84c', label: 'Gold' },  { value: '#9b5de5', label: 'Purple' },
        { value: '#8B4513', label: 'Brown' }, { value: '#adb5bd', label: 'Silver' },
      ],
      default: '#ffffff',
      aiSuggest: { vibrant: '#9b5de5', minimal: '#ffffff', vintage: '#8B4513', luxury: '#c9a84c' },
    },
    { id: 'setSize', label: 'Set', type: 'tabs', choices: ['2 Pack', '4 Pack', '6 Pack'], default: '4 Pack' },
  ],
  tote: [
    {
      id: 'bagColor', label: 'Bag Color', type: 'color',
      choices: [
        { value: '#f5f5dc', label: 'Natural' },{ value: '#1a1a1a', label: 'Black' },
        { value: '#ffffff', label: 'White' },   { value: '#1d3461', label: 'Navy' },
        { value: '#9b5de5', label: 'Purple' },  { value: '#e63946', label: 'Red' },
        { value: '#2d6a4f', label: 'Forest' },  { value: '#f4a261', label: 'Peach' },
      ],
      default: '#f5f5dc',
      aiSuggest: { vibrant: '#9b5de5', minimal: '#f5f5dc', vintage: '#f4a261', luxury: '#1a1a1a' },
    },
  ],
  magnet: [
    { id: 'magnetShape', label: 'Shape', type: 'tabs', choices: ['Square', 'Round', 'Heart'], default: 'Square' },
    {
      id: 'borderColor', label: 'Border', type: 'color',
      choices: [
        { value: '#ffffff', label: 'White' }, { value: '#1a1a1a', label: 'Black' },
        { value: '#c9a84c', label: 'Gold' },  { value: '#9b5de5', label: 'Purple' },
      ],
      default: '#ffffff',
      aiSuggest: { vibrant: '#9b5de5', minimal: '#ffffff', vintage: '#c9a84c', luxury: '#c9a84c' },
    },
  ],
  calendar: [
    {
      id: 'coverColor', label: 'Cover Color', type: 'color',
      choices: [
        { value: '#1a1a1a', label: 'Black' },  { value: '#ffffff', label: 'White' },
        { value: '#1d3461', label: 'Navy' },   { value: '#9b5de5', label: 'Purple' },
        { value: '#c9a84c', label: 'Gold' },   { value: '#e63946', label: 'Red' },
        { value: '#2d6a4f', label: 'Forest' }, { value: '#8B4513', label: 'Brown' },
      ],
      default: '#1a1a1a',
      aiSuggest: { vibrant: '#9b5de5', minimal: '#ffffff', vintage: '#8B4513', luxury: '#c9a84c' },
    },
    { id: 'calendarType', label: 'Type', type: 'tabs', choices: ['Wall', 'Desk'], default: 'Wall' },
  ],
  puzzle: [
    { id: 'pieceCount', label: 'Pieces', type: 'tabs', choices: ['100', '250', '500', '1000'], default: '500' },
  ],
  keychain: [
    { id: 'keychainShape', label: 'Shape', type: 'tabs', choices: ['Circle', 'Square', 'Heart'], default: 'Circle' },
    {
      id: 'borderColor', label: 'Border', type: 'color',
      choices: [
        { value: '#c9a84c', label: 'Gold' },  { value: '#adb5bd', label: 'Silver' },
        { value: '#9b5de5', label: 'Purple' },{ value: '#1a1a1a', label: 'Black' },
      ],
      default: '#c9a84c',
      aiSuggest: { vibrant: '#9b5de5', minimal: '#adb5bd', vintage: '#c9a84c', luxury: '#c9a84c' },
    },
  ],
  ornament: [
    {
      id: 'trimColor', label: 'Trim Color', type: 'color',
      choices: [
        { value: '#c9a84c', label: 'Gold' },  { value: '#adb5bd', label: 'Silver' },
        { value: '#e63946', label: 'Red' },   { value: '#9b5de5', label: 'Purple' },
        { value: '#2d6a4f', label: 'Green' },
      ],
      default: '#c9a84c',
      aiSuggest: { vibrant: '#9b5de5', minimal: '#adb5bd', vintage: '#c9a84c', luxury: '#c9a84c' },
    },
    { id: 'ornamentShape', label: 'Shape', type: 'tabs', choices: ['Round', 'Star', 'Heart'], default: 'Round' },
  ],
};
