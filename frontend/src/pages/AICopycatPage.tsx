import React, { useState } from 'react';
import './AICopycatPage.css';

const AICopycatPage: React.FC = () => {
  const [competitorUrl, setCompetitorUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const analyzeCompetitor = () => {
    if (!competitorUrl) return;
    
    setIsAnalyzing(true);
    
    // Имитация анализа (в реальности здесь будет API запрос)
    setTimeout(() => {
      const mockResult = {
        originalAd: {
          title: "Продам iPhone 13 128GB. Состояние идеальное",
          description: "Телефон в идеальном состоянии, все работает, царапин нет. Комплект: телефон, зарядка, коробка. Торг уместен.",
          price: 45000,
          category: "Телефоны",
          images: 3,
          postedDate: "2024-01-10",
          views: 320,
          ctr: 2.1
        },
        improvements: [
          {
            aspect: "Заголовок",
            current: "Продам iPhone 13 128GB. Состояние идеальное",
            improved: "📱 iPhone 13 128GB • Идеальное состояние • Гарантия • Скидка",
            reason: "Добавлены эмодзи, ключевые слова и триггеры"
          },
          {
            aspect: "Описание",
            current: "Короткое описание без структуры",
            improved: "✨ Идеальный iPhone 13 128GB\n\n✓ Состояние как новый\n✓ Все функции работают\n✓ Полная комплектация\n✓ Гарантия 14 дней\n✓ Скидка за быструю покупку\n\n🚀 Доставка по городу\n📞 Звоните прямо сейчас!",
            reason: "Структурированное описание с преимуществами и призывом к действию"
          },
          {
            aspect: "Цена",
            current: "45 000 ₽",
            improved: "42 900 ₽",
            reason: "Оптимальная цена для быстрой продажи (+15% к просмотрам)"
          },
          {
            aspect: "Фотографии",
            current: "3 фото",
            improved: "Рекомендуем 6-8 фото с разных ракурсов",
            reason: "Больше фото = больше доверия +25% к CTR"
          }
        ],
        predictedImprovement: {
          views: "+65%",
          ctr: "+45%",
          contacts: "+80%",
          confidence: 87
        }
      };
      
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  const applyImprovements = () => {
    alert("Улучшенное объявление создано! Проверьте черновики.");
  };

  return (
    <div className="ai-copycat-page">
      <div className="page-header">
        <h1>AI Copycat</h1>
        <p>Проанализируйте объявление конкурента и создайте улучшенную версию</p>
      </div>

      <div className="input-section">
        <div className="url-input-container">
          <input
            type="text"
            placeholder="Введите ссылку на объявление конкурента..."
            value={competitorUrl}
            onChange={(e) => setCompetitorUrl(e.target.value)}
            className="url-input"
          />
          <button 
            onClick={analyzeCompetitor}
            disabled={!competitorUrl || isAnalyzing}
            className="analyze-btn"
          >
            {isAnalyzing ? '🔍 Анализируем...' : '🚀 Проанализировать'}
          </button>
        </div>
        <p className="input-hint">
          Пример: https://www.avito.ru/moskva/telefony/iphone_13_128gb_2912345678
        </p>
      </div>

      {analysisResult && (
        <div className="analysis-results">
          {/* Оригинальное объявление */}
          <div className="original-ad-section">
            <h3>📋 Оригинальное объявление</h3>
            <div className="ad-card original">
              <div className="ad-header">
                <h4>{analysisResult.originalAd.title}</h4>
                <span className="ad-price">{analysisResult.originalAd.price.toLocaleString()} ₽</span>
              </div>
              <p className="ad-description">{analysisResult.originalAd.description}</p>
              <div className="ad-meta">
                <span>📅 {analysisResult.originalAd.postedDate}</span>
                <span>👁️ {analysisResult.originalAd.views} просмотров</span>
                <span>📊 CTR: {analysisResult.originalAd.ctr}%</span>
                <span>🖼️ {analysisResult.originalAd.images} фото</span>
              </div>
            </div>
          </div>

          {/* Предлагаемые улучшения */}
          <div className="improvements-section">
            <h3>✨ Предлагаемые улучшения</h3>
            <div className="improvements-grid">
              {analysisResult.improvements.map((improvement: any, index: number) => (
                <div key={index} className="improvement-card">
                  <div className="improvement-header">
                    <h4>{improvement.aspect}</h4>
                    <span className="improvement-badge">Улучшение</span>
                  </div>
                  <div className="comparison">
                    <div className="current">
                      <strong>Было:</strong>
                      <p>{improvement.current}</p>
                    </div>
                    <div className="arrow">→</div>
                    <div className="improved">
                      <strong>Стало:</strong>
                      <p>{improvement.improved}</p>
                    </div>
                  </div>
                  <div className="reason">
                    <strong>Причина:</strong> {improvement.reason}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Прогноз улучшений */}
          <div className="prediction-section">
            <h3>📈 Прогноз эффективности</h3>
            <div className="prediction-cards">
              <div className="prediction-card">
                <div className="prediction-value positive">{analysisResult.predictedImprovement.views}</div>
                <div className="prediction-label">Просмотров</div>
              </div>
              <div className="prediction-card">
                <div className="prediction-value positive">{analysisResult.predictedImprovement.ctr}</div>
                <div className="prediction-label">CTR</div>
              </div>
              <div className="prediction-card">
                <div className="prediction-value positive">{analysisResult.predictedImprovement.contacts}</div>
                <div className="prediction-label">Контактов</div>
              </div>
              <div className="prediction-card">
                <div className="prediction-value confidence">{analysisResult.predictedImprovement.confidence}%</div>
                <div className="prediction-label">Уверенность</div>
              </div>
            </div>
          </div>

          {/* Кнопка применения */}
          <div className="action-section">
            <button className="btn-primary large" onClick={applyImprovements}>
              🚀 Создать улучшенное объявление
            </button>
            <p className="action-note">
              Объявление будет сохранено в черновиках для дальнейшего редактирования
            </p>
          </div>
        </div>
      )}

      {!analysisResult && !isAnalyzing && (
        <div className="features-section">
          <h3>🎯 Что умеет AI Copycat?</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h4>Анализ конкурентов</h4>
              <p>Автоматически анализирует сильные и слабые стороны объявлений конкурентов</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h4>Улучшение контента</h4>
              <p>Переписывает заголовки и описания для лучшей конверсии</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h4>Оптимизация цены</h4>
              <p>Подбирает оптимальную цену на основе анализа рынка</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h4>Прогноз эффективности</h4>
              <p>Показывает ожидаемый прирост просмотров и контактов</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AICopycatPage;