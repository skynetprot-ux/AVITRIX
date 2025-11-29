import React, { useState } from 'react';
import './AIAutopilot.css';

export default function AIAutopilot() {
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const analyzeAd = async () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Имитация работы AI (позже заменим на реальный API)
    setTimeout(() => {
      const mockResults = {
        originalTitle: inputText.split('\n')[0]?.substring(0, 50) + '...' || inputText.substring(0, 50),
        improvedTitles: [
          "🚀 ПРОДАМ " + inputText.split(' ').slice(0, 3).join(' ') + " - СУПЕР ЦЕНА!",
          "🔥 ВЫГОДНО! " + inputText.split(' ').slice(0, 4).join(' ') + " - СРОЧНО",
          "⭐ ЛУЧШАЯ ЦЕНА на " + inputText.split(' ').slice(0, 3).join(' ') + " на Авито",
          "💎 ПРЕМИУМ КАЧЕСТВО: " + inputText.split(' ').slice(0, 3).join(' '),
          "🎯 ХИТ ПРОДАЖ: " + inputText.split(' ').slice(0, 3).join(' ') + " - УСПЕЙ!"
        ],
        improvedDescription: `📦 ${inputText}\n\n✅ Состояние: отличное\n🚚 Доставка: возможна\n📞 Звоните прямо сейчас!\n💬 Отвечаю быстро на сообщения\n⭐ Гарантия качества!`,
        keywords: inputText.toLowerCase().split(' ').filter((word: string) => word.length > 3).slice(0, 8),
        priceRange: {
          min: Math.round(Math.random() * 10000 + 1000),
          max: Math.round(Math.random() * 20000 + 15000)
        },
        photoRecommendations: [
          "Добавьте фото на белом фоне",
          "Сделайте фото под разными углами",
          "Покажите детали и особенности",
          "Добавьте фото с размерами"
        ],
        score: {
          ctr: Math.round(Math.random() * 5 + 3),
          relevance: Math.round(Math.random() * 30 + 70),
          competition: Math.round(Math.random() * 40 + 60)
        }
      };
      
      setResults(mockResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Текст скопирован в буфер обмена!');
    });
  };

  return (
    <div className="ai-autopilot">
      <div className="autopilot-header">
        <h2>🚀 AI Autopilot</h2>
        <p>Мгновенно улучшите любое объявление за секунды</p>
      </div>

      <div className="input-section">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Вставьте текст вашего объявления или ссылку на Авито..."
          rows={6}
        />
        <button 
          className={`analyze-btn ${isAnalyzing ? 'loading' : ''}`}
          onClick={analyzeAd}
          disabled={isAnalyzing || !inputText.trim()}
        >
          {isAnalyzing ? 'Анализируем...' : 'Улучшить объявление'}
        </button>
      </div>

      {results && (
        <div className="results-section">
          <div className="results-grid">
            {/* Улучшенные заголовки */}
            <div className="result-card">
              <h3>🎯 SEO-заголовки</h3>
              <div className="titles-list">
                {results.improvedTitles.map((title: string, index: number) => (
                  <div key={index} className="title-option">
                    <span className="title-text">{title}</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(title)}
                    >
                      Копировать
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Улучшенное описание */}
            <div className="result-card">
              <h3>📝 Продающее описание</h3>
              <div className="description-box">
                <p>{results.improvedDescription}</p>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard(results.improvedDescription)}
                >
                  Копировать
                </button>
              </div>
            </div>

            {/* Ключевые слова */}
            <div className="result-card">
              <h3>🔑 Ключевые слова</h3>
              <div className="keywords-list">
                {results.keywords.map((keyword: string, index: number) => (
                  <span key={index} className="keyword-tag">#{keyword}</span>
                ))}
              </div>
            </div>

            {/* Оценка */}
            <div className="result-card">
              <h3>📊 Оценка объявления</h3>
              <div className="score-metrics">
                <div className="metric">
                  <span>CTR потенциал:</span>
                  <span className="score-value">{results.score.ctr}/10</span>
                </div>
                <div className="metric">
                  <span>Релевантность:</span>
                  <span className="score-value">{results.score.relevance}%</span>
                </div>
                <div className="metric">
                  <span>Конкурентоспособность:</span>
                  <span className="score-value">{results.score.competition}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}