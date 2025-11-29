import React, { useState } from 'react';
import './PhotoEnhancerPage.css';

const PhotoEnhancerPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

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
    setIsAnalyzing(true);
    
    // Имитация анализа фото
    setTimeout(() => {
      setAnalysisResult({
        quality: 7,
        brightness: 6,
        contrast: 8,
        recommendations: [
          "Увеличить яркость на 15%",
          "Улучшить контрастность",
          "Обрезать лишний фон",
          "Добавить больше деталей продукта"
        ],
        predictedImprovement: "+35% к CTR"
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const applyEnhancements = () => {
    alert("Улучшения применены! Новые рекомендации по фото готовы.");
  };

  return (
    <div className="photo-enhancer-page">
      <div className="page-header">
        <h1>Улучшение фото</h1>
        <p>AI-анализ и оптимизация фотографий для максимального CTR</p>
      </div>

      <div className="upload-section">
        <div className="upload-area">
          <input
            type="file"
            id="photo-upload"
            accept="image/*"
            onChange={handleImageUpload}
            className="upload-input"
          />
          <label htmlFor="photo-upload" className="upload-label">
            {selectedImage ? (
              <img src={selectedImage} alt="Загруженное фото" className="preview-image" />
            ) : (
              <div className="upload-placeholder">
                <div className="upload-icon">📸</div>
                <h3>Загрузите фото для анализа</h3>
                <p>Перетащите или нажмите для загрузки</p>
              </div>
            )}
          </label>
        </div>
      </div>

      {isAnalyzing && (
        <div className="analysis-loading">
          <div className="loading-spinner"></div>
          <p>AI анализирует ваше фото...</p>
        </div>
      )}

      {analysisResult && !isAnalyzing && (
        <div className="analysis-results">
          <div className="metrics-section">
            <h3>Оценка качества фото</h3>
            <div className="metrics-grid">
              <div className="metric">
                <span className="metric-label">Качество</span>
                <div className="metric-bar">
                  <div 
                    className="metric-fill" 
                    style={{width: `${(analysisResult.quality / 10) * 100}%`}}
                  ></div>
                </div>
                <span className="metric-value">{analysisResult.quality}/10</span>
              </div>
              <div className="metric">
                <span className="metric-label">Яркость</span>
                <div className="metric-bar">
                  <div 
                    className="metric-fill" 
                    style={{width: `${(analysisResult.brightness / 10) * 100}%`}}
                  ></div>
                </div>
                <span className="metric-value">{analysisResult.brightness}/10</span>
              </div>
              <div className="metric">
                <span className="metric-label">Контраст</span>
                <div className="metric-bar">
                  <div 
                    className="metric-fill" 
                    style={{width: `${(analysisResult.contrast / 10) * 100}%`}}
                  ></div>
                </div>
                <span className="metric-value">{analysisResult.contrast}/10</span>
              </div>
            </div>
          </div>

          <div className="recommendations-section">
            <h3>Рекомендации по улучшению</h3>
            <div className="recommendations-list">
              {analysisResult.recommendations.map((rec: string, index: number) => (
                <div key={index} className="recommendation-item">
                  <span className="recommendation-number">{index + 1}</span>
                  <span className="recommendation-text">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="prediction-section">
            <div className="prediction-card">
              <h4>Ожидаемое улучшение</h4>
              <div className="prediction-value">{analysisResult.predictedImprovement}</div>
              <p>к кликабельности объявления</p>
            </div>
          </div>

          <div className="action-section">
            <button className="btn-primary large" onClick={applyEnhancements}>
              🚀 Применить улучшения
            </button>
          </div>
        </div>
      )}

      {!analysisResult && !isAnalyzing && (
        <div className="features-section">
          <h3>Что анализирует AI?</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🖼️</div>
              <h4>Качество изображения</h4>
              <p>Резкость, шумы, артефакты сжатия</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>Композиция</h4>
              <p>Расположение объекта, баланс, фон</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h4>Цветокоррекция</h4>
              <p>Яркость, контраст, цветовой баланс</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h4>CTR потенциал</h4>
              <p>Привлекательность для пользователей</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoEnhancerPage;