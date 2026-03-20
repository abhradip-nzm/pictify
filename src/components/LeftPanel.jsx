import { useRef, useState } from 'react';
import { SAMPLE_PHOTOS, EMOTIONS, STYLE_OPTIONS } from '../data/constants';
import StylePreviewModal from './StylePreviewModal';
import styles from './LeftPanel.module.css';

export default function LeftPanel({
  selectedPhoto, onSelectPhoto, onRemovePhoto,
  selectedEmotion, onSelectEmotion,
  selectedStyle, onSelectStyle,
  keywords, onAddKeyword, onRemoveKeyword,
  kwInput, onKwInput,
  onGenerate, isGenerating,
  suggestion, isAnalyzing, onDismissSuggestion,
}) {
  const kwRef   = useRef();
  const fileRef = useRef();
  const [previewStyle, setPreviewStyle] = useState(null);

  // ── Keyword input ──
  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && kwInput.trim()) {
      e.preventDefault();
      const word = kwInput.trim().replace(',', '');
      if (word) onAddKeyword(word);
    }
  };

  // ── File upload ──
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const label = file.name.replace(/\.[^.]+$/, '') || 'Your Photo';
    onSelectPhoto({ id: 'upload', label, url, emoji: null, bg: url });
    // reset so same file can be re-selected
    e.target.value = '';
  };

  const handleUploadClick = () => fileRef.current?.click();

  // ── Suggestion helpers ──
  const applySuggestionEmotion  = () => suggestion && onSelectEmotion(suggestion.emotion);
  const applySuggestionStyle    = () => suggestion && onSelectStyle(suggestion.style);
  const applySuggestionKeywords = () => {
    if (!suggestion) return;
    suggestion.keywords.forEach((k) => onAddKeyword(k));
  };
  const applyAllSuggestions = () => {
    applySuggestionEmotion();
    applySuggestionStyle();
    applySuggestionKeywords();
    onDismissSuggestion();
  };

  const emotionLabel = suggestion
    ? EMOTIONS.find((e) => e.id === suggestion.emotion)
    : null;
  const styleLabel = suggestion
    ? STYLE_OPTIONS.find((s) => s.id === suggestion.style)
    : null;

  return (
    <aside className={styles.panel}>

      {/* ── Photo ── */}
      <section>
        <div className={styles.sectionTitle}>📸 Your Photo</div>

        {/* Upload zone — click opens file picker */}
        <div
          className={`${styles.uploadZone} ${selectedPhoto ? styles.hasImage : ''}`}
          onClick={handleUploadClick}
          title="Click to upload your photo"
        >
          {selectedPhoto?.url ? (
            <img src={selectedPhoto.url} className={styles.uploadedImg} alt="uploaded" />
          ) : selectedPhoto ? (
            <div className={styles.photoEmoji}>{selectedPhoto.emoji}</div>
          ) : (
            <>
              <div className={styles.uploadIcon}>📁</div>
              <div className={styles.uploadText}>Click to upload your photo</div>
              <div className={styles.uploadSub}>or pick from samples below</div>
            </>
          )}

          {selectedPhoto && (
            <div className={styles.uploadOverlay}>
              <span>📁 Change photo</span>
            </div>
          )}

          {/* Remove button — top-right corner, always visible when photo is selected */}
          {selectedPhoto && (
            <button
              className={styles.removePhotoBtn}
              onClick={(e) => { e.stopPropagation(); onRemovePhoto(); }}
              title="Remove photo"
            >
              ×
            </button>
          )}
        </div>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className={styles.hiddenInput}
          onChange={handleFileChange}
        />

        {/* Sample thumbnails */}
        <div className={styles.sampleGrid}>
          {SAMPLE_PHOTOS.map((p) => (
            <div
              key={p.id}
              className={`${styles.sampleThumb} ${selectedPhoto?.id === p.id ? styles.selected : ''}`}
              style={{ background: p.bg }}
              onClick={() => onSelectPhoto(p)}
              title={p.label}
            >
              <span className={styles.sampleEmoji}>{p.emoji}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── AI Insight banner ── */}
      {(isAnalyzing || suggestion) && (
        <div className={styles.suggestionBanner}>
          {/* Animated scan line */}
          {isAnalyzing && <div className={styles.scanLine} />}

          <div className={styles.suggestionHeader}>
            <div className={styles.suggestionTitleWrap}>
              <div className={styles.aiOrb}>
                {isAnalyzing ? (
                  <span className={styles.orbPulse} />
                ) : (
                  <span className={styles.orbStatic}>✦</span>
                )}
              </div>
              <div>
                <div className={styles.suggestionTitle}>
                  {isAnalyzing ? 'Analyzing your photo…' : 'AI Insight'}
                </div>
                <div className={styles.suggestionSub}>
                  {isAnalyzing ? 'Detecting emotions & style…' : 'Personalized recommendations'}
                </div>
              </div>
            </div>
            {!isAnalyzing && (
              <button className={styles.dismissBtn} onClick={onDismissSuggestion}>×</button>
            )}
          </div>

          {isAnalyzing && (
            <div className={styles.analyzingState}>
              <div className={styles.analyzingBar}>
                <div className={styles.analyzingFill} />
              </div>
              <div className={styles.analyzingDots}>
                <span /><span /><span />
              </div>
            </div>
          )}

          {suggestion && !isAnalyzing && (
            <div className={styles.suggestionBody}>
              <div className={styles.suggCard}>
                <div className={styles.suggCardLabel}>Emotion</div>
                <div className={styles.suggCardValue}>
                  <span className={styles.suggEmoji}>{emotionLabel?.emoji}</span>
                  {emotionLabel?.label}
                </div>
                <button className={styles.applyBtn} onClick={applySuggestionEmotion}>Apply</button>
              </div>

              <div className={styles.suggCard}>
                <div className={styles.suggCardLabel}>Style</div>
                <div className={styles.suggCardValue}>
                  <span className={styles.suggEmoji}>{styleLabel?.icon}</span>
                  {styleLabel?.name}
                </div>
                <button className={styles.applyBtn} onClick={applySuggestionStyle}>Apply</button>
              </div>

              <div className={styles.suggCard}>
                <div className={styles.suggCardLabel}>Keywords</div>
                <div className={styles.suggKeywords}>
                  {suggestion.keywords.map((k) => (
                    <span key={k} className={styles.suggKwChip}>{k}</span>
                  ))}
                </div>
                <button className={styles.applyBtn} onClick={applySuggestionKeywords}>Apply</button>
              </div>

              <button className={styles.applyAllBtn} onClick={applyAllSuggestions}>
                <span className={styles.applyAllShimmer} />
                ✦ Apply All Suggestions
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── Emotion ── */}
      <section>
        <div className={styles.sectionTitle}>💜 Emotion</div>
        <div className={styles.emotionGrid}>
          {EMOTIONS.map((e) => (
            <button
              key={e.id}
              className={`${styles.emotionBtn} ${selectedEmotion === e.id ? styles.selected : ''} ${suggestion?.emotion === e.id ? styles.suggested : ''}`}
              onClick={() => onSelectEmotion(e.id)}
            >
              <span className={styles.emotionEmoji}>{e.emoji}</span>
              <span className={styles.emotionLabel}>{e.label}</span>
              {suggestion?.emotion === e.id && <span className={styles.suggDot} />}
            </button>
          ))}
        </div>
      </section>

      {/* ── Keywords ── */}
      <section>
        <div className={styles.sectionTitle}>🏷️ Keywords</div>
        <div className={styles.keywordsWrap} onClick={() => kwRef.current?.focus()}>
          {keywords.map((k) => (
            <span key={k} className={styles.tag}>
              {k}
              <button className={styles.tagRemove} onClick={(e) => { e.stopPropagation(); onRemoveKeyword(k); }}>×</button>
            </span>
          ))}
          <input
            ref={kwRef}
            className={styles.kwInput}
            value={kwInput}
            onChange={(e) => onKwInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={keywords.length ? '' : 'Type & press Enter…'}
          />
        </div>
      </section>

      {/* ── Style ── */}
      <section>
        <div className={styles.sectionTitle}>🎨 Style</div>
        <div className={styles.styleList}>
          {STYLE_OPTIONS.map((s) => (
            <div
              key={s.id}
              className={`${styles.styleOpt} ${selectedStyle === s.id ? styles.selected : ''} ${suggestion?.style === s.id ? styles.suggested : ''}`}
              onClick={() => onSelectStyle(s.id)}
            >
              <span className={styles.styleIcon}>{s.icon}</span>
              <div className={styles.styleInfo}>
                <div className={styles.styleName}>
                  {s.name}
                  {suggestion?.style === s.id && (
                    <span className={styles.aiPick}>✦ AI Pick</span>
                  )}
                </div>
                <div className={styles.styleDesc}>{s.desc}</div>
              </div>
              <div className={styles.styleActions}>
                <button
                  className={styles.previewBtn}
                  onClick={(e) => { e.stopPropagation(); setPreviewStyle(s); }}
                  title={`Preview ${s.name} style`}
                >
                  👁
                </button>
                <div className={styles.styleCheck}>
                  {selectedStyle === s.id && <span>✓</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Generate button ── */}
      <button
        className={styles.generateBtn}
        onClick={onGenerate}
        disabled={isGenerating}
      >
        {!isGenerating && <span className={styles.shimmer} />}
        {isGenerating ? '✨ Generating…' : '✦ Generate Products with AI'}
      </button>

      {/* ── Style Preview Modal ── */}
      <StylePreviewModal style={previewStyle} onClose={() => setPreviewStyle(null)} />

    </aside>
  );
}
