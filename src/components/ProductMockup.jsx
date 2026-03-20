import { PRODUCT_SHAPE } from '../data/constants';
import styles from './ProductMockup.module.css';

// ── Helpers ───────────────────────────────────────────────────────────────
function isDark(hex) {
  if (!hex || hex === 'none' || hex === 'clear') return true;
  const h = hex.replace('#', '');
  const r = parseInt(h.substr(0, 2), 16);
  const g = parseInt(h.substr(2, 2), 16);
  const b = parseInt(h.substr(4, 2), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 140;
}

function shade(hex, amt) {
  const h = hex.replace('#', '');
  const clamp = (v) => Math.max(0, Math.min(255, v));
  const r = clamp(parseInt(h.substr(0, 2), 16) + amt);
  const g = clamp(parseInt(h.substr(2, 2), 16) + amt);
  const b = clamp(parseInt(h.substr(4, 2), 16) + amt);
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

const FILL = '#7c5ff5';

// ── Photo layer (reusable) ────────────────────────────────────────────────
function Photo({ id, x, y, w, h, rx = 0, photo, opacity = 0.9 }) {
  const clipId = `clip-${id}`;
  if (!photo) return null;
  return (
    <g>
      <defs>
        <clipPath id={clipId}>
          <rect x={x} y={y} width={w} height={h} rx={rx} />
        </clipPath>
      </defs>
      {photo.url
        ? <image href={photo.url} x={x} y={y} width={w} height={h}
            clipPath={`url(#${clipId})`} preserveAspectRatio="xMidYMid slice" opacity={opacity} />
        : <>
            <rect x={x} y={y} width={w} height={h} rx={rx} fill={FILL} opacity={0.25} />
            <text x={x + w / 2} y={y + h / 2} textAnchor="middle" dominantBaseline="middle"
              fontSize={Math.min(w, h) * 0.45}>{photo.emoji}</text>
          </>
      }
    </g>
  );
}

// ── T-Shirt ───────────────────────────────────────────────────────────────
function TshirtMockup({ id, photo, garmentColor = '#ffffff' }) {
  const dark = isDark(garmentColor);
  const shadow = dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.12)';
  return (
    <svg viewBox="0 0 200 220" className={styles.svg}>
      {/* Body */}
      <path d="M65,5 C75,22 88,30 100,30 C112,30 125,22 135,5 L192,48 L168,70 L157,62 L157,215 L43,215 L43,62 L32,70 L8,48 Z"
        fill={garmentColor} stroke={shadow} strokeWidth="1.5" />
      {/* Sleeve shading */}
      <path d="M8,48 L32,70 L43,62 L43,80" fill="none" stroke={shadow} strokeWidth="6" strokeLinecap="round" />
      <path d="M192,48 L168,70 L157,62 L157,80" fill="none" stroke={shadow} strokeWidth="6" strokeLinecap="round" />
      {/* Photo on chest */}
      <Photo id={id} x={63} y={76} w={74} h={74} rx={6} photo={photo} />
    </svg>
  );
}

// ── Mug ───────────────────────────────────────────────────────────────────
function MugMockup({ id, photo, mugColor = '#ffffff' }) {
  const dark = isDark(mugColor);
  const innerRim = dark ? '#2a2a2a' : '#d8d8d8';
  const gid = `mug-g-${id}`;
  return (
    <svg viewBox="0 0 200 190" className={styles.svg}>
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="rgba(0,0,0,0.18)" />
          <stop offset="25%"  stopColor="rgba(0,0,0,0)" />
          <stop offset="75%"  stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.22)" />
        </linearGradient>
      </defs>
      {/* Body */}
      <rect x="28" y="28" width="124" height="118" rx="8" fill={mugColor} stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" />
      {/* Photo on body */}
      <Photo id={id} x={34} y={40} w={112} h={95} rx={4} photo={photo} opacity={0.85} />
      {/* Cylinder shading */}
      <rect x="28" y="28" width="124" height="118" rx="8" fill={`url(#${gid})`} />
      {/* Top ellipse */}
      <ellipse cx="90" cy="28" rx="62" ry="11" fill={mugColor} stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
      <ellipse cx="90" cy="28" rx="54" ry="8" fill={innerRim} />
      {/* Bottom ellipse */}
      <ellipse cx="90" cy="146" rx="62" ry="11" fill={shade(mugColor, -20)} stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
      {/* Handle */}
      <path d="M152,62 Q190,62 190,97 Q190,132 152,132"
        fill="none" stroke={mugColor} strokeWidth="19" strokeLinecap="round" />
      <path d="M152,67 Q182,67 182,97 Q182,127 152,127"
        fill="none" stroke={innerRim} strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}

// ── Poster (wall, flat) ───────────────────────────────────────────────────
function WallMockup({ id, photo, borderColor = '#ffffff' }) {
  const bw = 12;
  return (
    <svg viewBox="0 0 200 230" className={styles.svg}>
      <rect x="0" y="0" width="200" height="230" rx="3" fill={borderColor} />
      <Photo id={id} x={bw} y={bw} w={200 - bw * 2} h={230 - bw * 2} photo={photo} />
      {/* Subtle frame highlight */}
      <rect x="0" y="0" width="200" height="230" rx="3" fill="none"
        stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    </svg>
  );
}

// ── Canvas (gallery-wrapped) ──────────────────────────────────────────────
function CanvasMockup({ id, photo, wrapColor = '#1a1a1a' }) {
  const depth = 8;
  return (
    <svg viewBox="0 0 200 220" className={styles.svg}>
      {/* Side/depth faces */}
      <rect x="0" y="0" width={depth} height="220" fill={shade(wrapColor, -30)} />
      <rect x="0" y={220 - depth} width="200" height={depth} fill={shade(wrapColor, -20)} />
      {/* Main face */}
      <rect x={depth} y="0" width={200 - depth} height={220 - depth} rx="2" fill={wrapColor} />
      <Photo id={id} x={depth + 4} y={4} w={200 - depth - 8} h={220 - depth - 8} photo={photo} />
      <rect x={depth} y="0" width={200 - depth} height={220 - depth} rx="2" fill="none"
        stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
    </svg>
  );
}

// ── Framed Print ──────────────────────────────────────────────────────────
function FrameMockup({ id, photo, frameColor = '#1a1a1a', matColor = '#ffffff' }) {
  const fw = 14;
  const mw = matColor && matColor !== 'none' ? 10 : 0;
  const inner = fw + mw;
  const dark = isDark(frameColor);
  return (
    <svg viewBox="0 0 200 230" className={styles.svg}>
      {/* Frame outer */}
      <rect x="0" y="0" width="200" height="230" rx="3" fill={frameColor} />
      {/* Frame bevel highlight */}
      <rect x="2" y="2" width="196" height="226" rx="2" fill="none"
        stroke={dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)'} strokeWidth="2" />
      <rect x={fw - 2} y={fw - 2} width={200 - (fw - 2) * 2} height={230 - (fw - 2) * 2} rx="1" fill="none"
        stroke={dark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.15)'} strokeWidth="2" />
      {/* Mat */}
      {mw > 0 && (
        <rect x={fw} y={fw} width={200 - fw * 2} height={230 - fw * 2} fill={matColor} />
      )}
      {/* Photo */}
      <Photo id={id} x={inner} y={inner} w={200 - inner * 2} h={230 - inner * 2} photo={photo} />
    </svg>
  );
}

// ── Phone Case ────────────────────────────────────────────────────────────
function PhoneMockup({ id, photo, caseColor = '#1a1a1a' }) {
  const dark = isDark(caseColor);
  const screen = '#06060a';
  return (
    <svg viewBox="0 0 160 260" className={styles.svg}>
      {/* Body */}
      <rect x="6" y="6" width="148" height="248" rx="24" fill={caseColor} stroke="rgba(0,0,0,0.18)" strokeWidth="1.5" />
      {/* Screen bezel */}
      <rect x="13" y="16" width="134" height="228" rx="18" fill={screen} />
      {/* Photo on screen */}
      <Photo id={id} x={17} y={46} w={126} h={168} rx={6} photo={photo} />
      {/* Dynamic island */}
      <rect x="54" y="24" width="52" height="14" rx="7" fill={caseColor} />
      {/* Home bar */}
      <rect x="60" y="225" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.25)" />
      {/* Side buttons */}
      <rect x="6" y="80" width="4" height="26" rx="2" fill={dark ? shade(caseColor, 40) : shade(caseColor, -40)} />
      <rect x="6" y="112" width="4" height="26" rx="2" fill={dark ? shade(caseColor, 40) : shade(caseColor, -40)} />
      <rect x="150" y="96" width="4" height="38" rx="2" fill={dark ? shade(caseColor, 40) : shade(caseColor, -40)} />
    </svg>
  );
}

// ── Throw Pillow ──────────────────────────────────────────────────────────
function PillowMockup({ id, photo, pillowColor = '#ffffff' }) {
  const dark = isDark(pillowColor);
  const seam = dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)';
  const gid = `pillow-g-${id}`;
  return (
    <svg viewBox="0 0 200 200" className={styles.svg}>
      <defs>
        <radialGradient id={gid} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
        </radialGradient>
        <clipPath id={`pc-${id}`}><ellipse cx="100" cy="100" rx="90" ry="88" /></clipPath>
      </defs>
      <ellipse cx="100" cy="100" rx="90" ry="88" fill={pillowColor} stroke={seam} strokeWidth="1.5" />
      {photo && (
        photo.url
          ? <image href={photo.url} x="10" y="12" width="180" height="176"
              clipPath={`url(#pc-${id})`} preserveAspectRatio="xMidYMid slice" opacity={0.8} />
          : <text x="100" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="72">{photo.emoji}</text>
      )}
      {/* Puff sheen */}
      <ellipse cx="100" cy="100" rx="90" ry="88" fill={`url(#${gid})`} />
      {/* Seam */}
      <ellipse cx="100" cy="100" rx="84" ry="82" fill="none" stroke={seam} strokeWidth="1.5" strokeDasharray="6 4" />
    </svg>
  );
}

// ── Fleece Blanket ────────────────────────────────────────────────────────
function BlanketMockup({ id, photo, blanketColor = '#ffffff' }) {
  return (
    <svg viewBox="0 0 200 200" className={styles.svg}>
      <rect x="4" y="4" width="192" height="192" rx="10" fill={blanketColor} stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <rect x="16" y="16" width="168" height="168" rx="4" fill="#f8f8f8" />
      <Photo id={id} x={18} y={18} w={164} h={164} rx={3} photo={photo} opacity={0.9} />
      {/* Border decorative lines */}
      <rect x="4" y="4" width="192" height="192" rx="10" fill="none"
        stroke={blanketColor} strokeWidth="6" />
      <rect x="10" y="10" width="180" height="180" rx="7" fill="none"
        stroke={blanketColor} strokeWidth="2" opacity={0.5} />
    </svg>
  );
}

// ── Hardcover Notebook / Calendar ─────────────────────────────────────────
function BookMockup({ id, photo, coverColor = '#1a1a1a' }) {
  const dark = isDark(coverColor);
  const spine = shade(coverColor, dark ? 30 : -40);
  const line  = dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)';
  return (
    <svg viewBox="0 0 200 230" className={styles.svg}>
      {/* Spine */}
      <rect x="10" y="12" width="32" height="206" rx="4" fill={spine} />
      {/* Cover */}
      <rect x="36" y="12" width="156" height="206" rx="3" fill={coverColor} />
      {/* Photo window on cover */}
      <Photo id={id} x={48} y={24} w={132} h={132} rx={4} photo={photo} opacity={0.88} />
      {/* Title bar */}
      <rect x="48" y="170" width="100" height="7" rx="3.5" fill={dark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'} />
      <rect x="48" y="184" width="64"  height="5" rx="2.5" fill={dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)'} />
      {/* Spine ruling lines */}
      <line x1="10" y1="52" x2="42" y2="52" stroke={line} strokeWidth="1" />
      <line x1="10" y1="72" x2="42" y2="72" stroke={line} strokeWidth="1" />
      {/* Cover border */}
      <rect x="36" y="12" width="156" height="206" rx="3" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
    </svg>
  );
}

// ── Ceramic Coaster / Acrylic Keychain ───────────────────────────────────
function CircleMockup({ id, photo, borderColor = '#c9a84c' }) {
  return (
    <svg viewBox="0 0 200 200" className={styles.svg}>
      <defs>
        <clipPath id={`cc-${id}`}><circle cx="100" cy="100" r="72" /></clipPath>
      </defs>
      {/* Outer ring */}
      <circle cx="100" cy="100" r="91" fill={borderColor} />
      {/* Inner white face */}
      <circle cx="100" cy="100" r="80" fill="#ffffff" />
      {/* Photo */}
      {photo && (
        photo.url
          ? <image href={photo.url} x="28" y="28" width="144" height="144"
              clipPath={`url(#cc-${id})`} preserveAspectRatio="xMidYMid slice" opacity={0.9} />
          : <text x="100" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="60">{photo.emoji}</text>
      )}
      {/* Ring highlight */}
      <circle cx="100" cy="100" r="91" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="76" fill="none" stroke={borderColor} strokeWidth="1" opacity={0.4} />
    </svg>
  );
}

// ── Photo Ornament ────────────────────────────────────────────────────────
function OrnamentMockup({ id, photo, trimColor = '#c9a84c' }) {
  const gid = `orn-g-${id}`;
  return (
    <svg viewBox="0 0 200 230" className={styles.svg}>
      <defs>
        <clipPath id={`oc-${id}`}><circle cx="100" cy="148" r="72" /></clipPath>
        <radialGradient id={gid} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.38)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>
      {/* Cap */}
      <rect x="87" y="14" width="26" height="24" rx="5" fill={trimColor} />
      <rect x="91" y="8"  width="18" height="12" rx="3" fill={trimColor} opacity={0.7} />
      {/* Hook */}
      <path d="M100,8 Q112,0 122,8" fill="none" stroke={trimColor} strokeWidth="3.5" strokeLinecap="round" />
      {/* Ball */}
      <circle cx="100" cy="148" r="78" fill="white" />
      {/* Photo */}
      {photo && (
        photo.url
          ? <image href={photo.url} x="28" y="76" width="144" height="144"
              clipPath={`url(#oc-${id})`} preserveAspectRatio="xMidYMid slice" opacity={0.9} />
          : <text x="100" y="148" textAnchor="middle" dominantBaseline="middle" fontSize="60">{photo.emoji}</text>
      )}
      {/* Sheen */}
      <circle cx="100" cy="148" r="78" fill={`url(#${gid})`} />
      {/* Trim */}
      <circle cx="100" cy="148" r="80" fill="none" stroke={trimColor} strokeWidth="5" />
      <circle cx="100" cy="148" r="75" fill="none" stroke={trimColor} strokeWidth="1.5" opacity={0.5} />
    </svg>
  );
}

// ── Canvas Tote Bag ───────────────────────────────────────────────────────
function ToteMockup({ id, photo, bagColor = '#f5f5dc' }) {
  const dark = isDark(bagColor);
  const strap = dark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.35)';
  return (
    <svg viewBox="0 0 200 230" className={styles.svg}>
      {/* Straps */}
      <path d="M60,72 Q58,18 88,18 Q112,18 110,72" fill="none" stroke={strap} strokeWidth="11" strokeLinecap="round" />
      <path d="M90,72 Q88,18 118,18 Q145,18 142,72" fill="none" stroke={strap} strokeWidth="11" strokeLinecap="round" />
      {/* Bag body */}
      <path d="M18,72 L182,72 L167,218 L33,218 Z" fill={bagColor} stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" />
      {/* Photo */}
      <Photo id={id} x={30} y={84} w={140} h={120} rx={4} photo={photo} opacity={0.9} />
      {/* Top seam */}
      <line x1="18" y1="72" x2="182" y2="72"
        stroke={dark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.1)'} strokeWidth="2" />
    </svg>
  );
}

// ── Photo Magnet Set ──────────────────────────────────────────────────────
function MagnetMockup({ id, photo, borderColor = '#ffffff' }) {
  const fid = `mag-f-${id}`;
  return (
    <svg viewBox="0 0 200 160" className={styles.svg}>
      <defs>
        <filter id={fid}>
          <feDropShadow dx="2" dy="3" stdDeviation="5" floodOpacity="0.35" />
        </filter>
      </defs>
      <rect x="8" y="8" width="184" height="144" rx="10" fill={borderColor}
        filter={`url(#${fid})`} stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <Photo id={id} x={16} y={16} w={168} h={128} rx={5} photo={photo} />
    </svg>
  );
}

// ── Photo Puzzle ──────────────────────────────────────────────────────────
function PuzzleMockup({ id, photo }) {
  return (
    <svg viewBox="0 0 200 200" className={styles.svg}>
      {/* Base photo */}
      <Photo id={id} x={8} y={8} w={184} h={184} rx={4} photo={photo} />
      {/* Puzzle grid lines 4×4 */}
      {[1,2,3].map(i => (
        <line key={`h${i}`} x1="8"  y1={8 + i * 46} x2="192" y2={8 + i * 46}
          stroke="rgba(0,0,0,0.55)" strokeWidth="2.5" />
      ))}
      {[1,2,3].map(i => (
        <line key={`v${i}`} x1={8 + i * 46} y1="8" x2={8 + i * 46} y2="192"
          stroke="rgba(0,0,0,0.55)" strokeWidth="2.5" />
      ))}
      {/* Piece-tab bumps (simplified circles at intersections) */}
      {[54,100,146].map(cx => [54,100,146].map(cy => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7"
          fill="white" opacity={0.7} />
      )))}
      {/* Border */}
      <rect x="8" y="8" width="184" height="184" rx="4" fill="none"
        stroke="rgba(0,0,0,0.35)" strokeWidth="2.5" />
    </svg>
  );
}

// ── Shape map ─────────────────────────────────────────────────────────────
const MOCKUPS = {
  tshirt:   TshirtMockup,
  mug:      MugMockup,
  wall:     WallMockup,
  canvas:   CanvasMockup,
  frame:    FrameMockup,
  phone:    PhoneMockup,
  pillow:   PillowMockup,
  blanket:  BlanketMockup,
  book:     BookMockup,
  circle:   CircleMockup,
  ornament: OrnamentMockup,
  tote:     ToteMockup,
  magnet:   MagnetMockup,
  puzzle:   PuzzleMockup,
};

// ── Public component ──────────────────────────────────────────────────────
export default function ProductMockup({ product, photo, customization = {} }) {
  const shape  = PRODUCT_SHAPE[product.id] || 'wall';
  const Comp   = MOCKUPS[shape];
  if (!Comp) return null;

  // Pull the relevant customization keys per shape
  const props = {
    id:           product.id,
    photo,
    garmentColor: customization.garmentColor,
    mugColor:     customization.mugColor,
    borderColor:  customization.borderColor,
    wrapColor:    customization.wrapColor,
    frameColor:   customization.frameColor,
    matColor:     customization.matColor,
    caseColor:    customization.caseColor,
    pillowColor:  customization.pillowColor,
    blanketColor: customization.blanketColor,
    bagColor:     customization.bagColor,
    coverColor:   customization.coverColor,
    trimColor:    customization.trimColor,
  };

  return <Comp {...props} />;
}
