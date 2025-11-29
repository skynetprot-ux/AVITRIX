import React, { useState } from 'react';
import './AICompetitorAnalyzer.css';

export default function AICompetitorAnalyzer() {
  const [competitorUrl, setCompetitorUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('electronics');

  const analyzeCompetitor = async () => {
    if (!competitorUrl.trim()) return;
    
    setIsAnalyzing(true);
    
    // Имитация глубокого анализа конкурента AI
    setTimeout(() => {
      const mockResults = {
        competitorInfo: {
          name: "Профильный продавец электроники",
          rating: 4.7,
          reviews: 128,
          activeAds: 47,
          responseTime: "15 минут"
        },
        priceAnalysis: {
          yourPrice: 45000,
          competitorPrice: 42000,
          marketAverage: 43500,
          recommendation: "Снизить цену на 5-7%"
        },
        adQuality: {
          titles: 8.2,
          photos: 7.5,
          descriptions: 8.0,
          overall: 7.9
        },
        weaknesses: [
          "Слабые заголовки без эмоциональных триггеров",
          "Мало детальных фотографий",
          "Длинные описания без структуры",
          "Нет видео обзоров"
        ],
        strengths: [
          "Быстрое время ответа на сообщения",
          "Хорошие отзывы покупателей",
          "Широкий ассортимент",
          "Гарантия на товары"
        ],
        recommendations: [
          "Использовать более эмоциональные заголовки",
          "Добавить видеообзоры товаров",
          "Улучшить качество фотографий",
          "Внедрить чат-бота для быстрых ответов"
        ],
        predictedImprovement: {
          ctr: "+18%",
          views: "+25%",
          conversion: "+12%"
        }
      };
      
      setAnalysisResults(mockResults);
      setIsAnalyzing(false);
    }, 3000);
  };

  const competitorCategories = [
    { id: 'electronics', name: 'Электроника' },
    { id: 'realestate', name: 'Недвижимость' },
    { id: 'cars', name: 'Автомобили' },
    { id: 'clothes', name: 'Одежда' },
    { id: 'services', name: 'Услуги' }
  ];

  return (
    <div className="ai-competitor-analyzer">
      <div className="analyzer-header">
        <h2>AI Competitor Killer</h2>
        <p>Глубокий анализ конкурентов и стратегия превосходства</p>
      </div>

      <div className="input-section">
        <div className="input-group">
          <label>Категория анализа</label>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {competitorCategories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label>Ссылка на конкурента или ключевые слова</label>
          <input
            type="text"
            placeholder="Введите ссылку на Авито или название конкурента..."
            value={competitorUrl}
            onChange={(e) => setCompetitorUrl(e.target.value)}
          />
        </div>

        <button 
          className={`analyze-btn ${isAnalyzing ? 'loading' : ''}`}
          onClick={analyzeCompetitor}
          disabled={isAnalyzing || !competitorUrl.trim()}
        >
          {isAnalyzing ? 'Анализируем конкурента...' : 'Проанализировать конкурента'}
        </button>
      </div>

      {isAnalyzing && (
        <div className="analysis-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <p>AI проводит глубокий анализ конкурента...</p>
        </div>
      )}

      {analysisResults && (
        <div className="results-section">
          {/* Общая информация о конкуренте */}
          <div className="competitor-overview">
            <h3>Обзор конкурента</h3>
            <div className="overview-grid">
              <div className="overview-card">
                <span className="label">Рейтинг</span>
                <span className="value">{analysisResults.competitorInfo.rating}/5</span>
              </div>
              <div className="overview-card">
                <span className="label">Отзывы</span>
                <span className="value">{analysisResults.competitorInfo.reviews}</span>
              </div>
              <div className="overview-card">
                <span className="label">Активные объявления</span>
                <span className="value">{analysisResults.competitorInfo.activeAds}</span>
              </div>
              <div className="overview-card">
                <span className="label">Время ответа</span>
                <span className="value">{analysisResults.competitorInfo.responseTime}</span>
              </div>
            </div>
          </div>

          <div className="analysis-grid">
            {/* Анализ цен */}
            <div className="analysis-card">
              <h3>💰 Анализ цен</h3>
              <div className="price-comparison">
                <div className="price-item">
                  <span className="label">Ваша цена</span>
                  <span className="value">{analysisResults.priceAnalysis.yourPrice} ₽</span>
                </div>
                <div className="price-item">
                  <span className="label">Цена конкурента</span>
                  <span className="value competitor">{analysisResults.priceAnalysis.competitorPrice} ₽</span>
                </div>
                <div className="price-item">
                  <span className="label">Средняя по рынку</span>
                  <span className="value market">{analysisResults.priceAnalysis.marketAverage} ₽</span>
                </div>
              </div>
              <div className="price-recommendation">
                <strong>Рекомендация:</strong> {analysisResults.priceAnalysis.recommendation}
              </div>
            </div>

            {/* Качество объявлений */}
            <div className="analysis-card">
              <h3>📊 Качество объявлений</h3>
              <div className="quality-metrics">
                <div className="metric">
                  <span className="label">Заголовки</span>
                  <div className="score-bar">
                    <div 
                      className="score-fill"
                      style={{ width: `${analysisResults.adQuality.titles * 10}%` }}
                    ></div>
                  </div>
                  <span className="score">{analysisResults.adQuality.titles}/10</span>
                </div>
                <div className="metric">
                  <span className="label">Фотографии</span>
                  <div className="score-bar">
                    <div 
                      className="score-fill"
                      style={{ width: `${analysisResults.adQuality.photos * 10}%` }}
                    ></div>
                  </div>
                  <span className="score">{analysisResults.adQuality.photos}/10</span>
                </div>
                <div className="metric">
                  <span className="label">Описания</span>
                  <div className="score-bar">
                    <div 
                      className="score-fill"
                      style={{ width: `${analysisResults.adQuality.descriptions * 10}%` }}
                    ></div>
                  </div>
                  <span className="score">{analysisResults.adQuality.descriptions}/10</span>
                </div>
              </div>
              <div className="overall-score">
                Общая оценка: <strong>{analysisResults.adQuality.overall}/10</strong>
              </div>
            </div>

            {/* Сильные стороны конкурента */}
            <div className="analysis-card">
              <h3>✅ Сильные стороны конкурента</h3>
              <div className="strengths-list">
                {analysisResults.strengths.map((strength: string, index: number) => (
                  <div key={index} className="strength-item">
                    <span className="icon">✓</span>
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Слабые стороны конкурента */}
            <div className="analysis-card">
              <h3>❌ Слабые стороны конкурента</h3>
              <div className="weaknesses-list">
                {analysisResults.weaknesses.map((weakness: string, index: number) => (
                  <div key={index} className="weakness-item">
                    <span className="icon">✗</span>
                    <span>{weakness}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Рекомендации по превосходству */}
            <div className="analysis-card wide">
              <h3>🎯 Стратегия превосходства</h3>
              <div className="recommendations-grid">
                {analysisResults.recommendations.map((recommendation: string, index: number) => (
                  <div key={index} className="recommendation-card">
                    <div className="rec-number">{index + 1}</div>
                    <div className="rec-text">{recommendation}</div>
                    <button className="apply-btn">Применить</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Прогнозируемые улучшения */}
            <div className="analysis-card">
              <h3>📈 Прогнозируемые улучшения</h3>
              <div className="improvements-prediction">
                <div className="prediction-item">
                  <span className="label">Рост CTR</span>
                  <span className="value positive">{analysisResults.predictedImprovement.ctr}</span>
                </div>
                <div className="prediction-item">
                  <span className="label">Рост просмотров</span>
                  <span className="value positive">{analysisResults.predictedImprovement.views}</span>
                </div>
                <div className="prediction-item">
                  <span className="label">Рост конверсии</span>
                  <span className="value positive">{analysisResults.predictedImprovement.conversion}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn primary">Применить все рекомендации</button>
            <button className="btn secondary">Скачать детальный отчет</button>
            <button className="btn outline">Настроить мониторинг</button>
          </div>
        </div>
      )}
    </div>
  );
}