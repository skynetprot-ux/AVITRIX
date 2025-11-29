import React, { useState } from 'react';
import './AIPhotoEnhancer.css';

export default function AIPhotoEnhancer() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        analyzeImage();
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    
    // Имитация анализа фото AI
    setTimeout(() => {
      const mockResults = {
        qualityScore: Math.round(Math.random() * 30 + 70),
        recommendations: [
          "📸 Яркость: можно увеличить на 15%",
          "🎨 Контрастность: оптимальная",
          "⚖️ Баланс белого: слегка теплый тон",
          "🌅 Фон: рекомендуется белый или нейтральный",
          "📐 Композиция: хорошая, но можно улучшить ракурс"
        ],
        improvements: [
          "Обрезать лишнее пространство по краям",
          "Увеличить резкость на 10%",
          "Исправить небольшие тени",
          "Добавить естественное освещение"
        ],
        composition: {
          score: Math.round(Math.random() * 20 + 80),
          notes: "Хорошая композиция, но можно добавить больше деталей"
        },
        emotionalImpact: {
          score: Math.round(Math.random() * 25 + 75),
          notes: "Фото вызывает доверие, но можно усилить эмоциональный отклик"
        }
      };
      
      setAnalysisResults(mockResults);
      setIsAnalyzing(false);
    }, 2500);
  };

  const dropAreaStyle = {
    border: selectedImage ? '2px dashed #3c7bff' : '2px dashed rgba(255,255,255,0.3)',
    background: selectedImage ? 'rgba(60, 123, 255, 0.1)' : 'rgba(255,255,255,0.05)'
  };

  return (
    <div className="ai-photo-enhancer">
      <div className="enhancer-header">
        <h2>🖼️ AI Photo Enhancer</h2>
        <p>Проанализируйте и улучшите фотографии для максимального CTR</p>
      </div>

      <div className="upload-section">
        <div 
          className="drop-area"
          style={dropAreaStyle}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          {selectedImage ? (
            <div className="image-preview">
              <img src={selectedImage} alt="Preview" />
              <div className="preview-overlay">
                <span>✅ Фото загружено</span>
              </div>
            </div>
          ) : (
            <div className="upload-placeholder">
              <div className="upload-icon">📁</div>
              <p>Перетащите фото или нажмите для загрузки</p>
              <span>PNG, JPG до 10MB</span>
            </div>
          )}
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </div>
      </div>

      {isAnalyzing && (
        <div className="analysis-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <p>AI анализирует фотографию...</p>
        </div>
      )}

      {analysisResults && (
        <div className="results-section">
          <div className="results-grid">
            {/* Общая оценка */}
            <div className="result-card main-score">
              <h3>📊 Общая оценка фото</h3>
              <div className="score-circle">
                <span className="score-value">{analysisResults.qualityScore}</span>
                <span className="score-label">из 100</span>
              </div>
              <p>Ваше фото хорошего качества, но есть что улучшить</p>
            </div>

            {/* Рекомендации */}
            <div className="result-card">
              <h3>💡 Рекомендации AI</h3>
              <div className="recommendations-list">
                {analysisResults.recommendations.map((rec: string, index: number) => (
                  <div key={index} className="recommendation-item">
                    <span className="rec-icon">⚡</span>
                    <span className="rec-text">{rec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Улучшения */}
            <div className="result-card">
              <h3>🎨 Предлагаемые улучшения</h3>
              <div className="improvements-list">
                {analysisResults.improvements.map((imp: string, index: number) => (
                  <div key={index} className="improvement-item">
                    <span className="imp-icon">✨</span>
                    <span className="imp-text">{imp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Детальный анализ */}
            <div className="result-card">
              <h3>🔍 Детальный анализ</h3>
              <div className="detailed-metrics">
                <div className="metric-item">
                  <span className="metric-label">Композиция</span>
                  <div className="metric-bar">
                    <div 
                      className="metric-fill"
                      style={{ width: `${analysisResults.composition.score}%` }}
                    ></div>
                  </div>
                  <span className="metric-value">{analysisResults.composition.score}%</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Эмоциональный отклик</span>
                  <div className="metric-bar">
                    <div 
                      className="metric-fill"
                      style={{ width: `${analysisResults.emotionalImpact.score}%` }}
                    ></div>
                  </div>
                  <span className="metric-value">{analysisResults.emotionalImpact.score}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn primary">Применить улучшения</button>
            <button className="btn secondary">Скачать улучшенное фото</button>
          </div>
        </div>
      )}
    </div>
  );
}