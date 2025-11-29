import React, { useState } from 'react';
import './SEOPage.css';

const SEOPage: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [optimizedText, setOptimizedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState({
    keywordDensity: 0,
    readability: 0,
    seoScore: 0,
    suggestions: [] as string[]
  });

  const handleOptimize = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    
    // Имитация работы ИИ
    setTimeout(() => {
      const optimized = inputText + '\n\n[Оптимизировано AVITRIX]\n• Добавлены ключевые слова\n• Улучшена структура текста\n• Оптимизирована длина предложений';
      
      setOptimizedText(optimized);
      setAnalysis({
        keywordDensity: 85,
        readability: 92,
        seoScore: 88,
        suggestions: [
          'Увеличьте количество ключевых слов в заголовке',
          'Добавьте призыв к действию в конец текста',
          'Используйте больше цифр и конкретики'
        ]
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="seo-page">
      <div className="seo-header">
        <h1>SEO-оптимизатор</h1>
        <p>Оптимизируйте текст объявления для лучшего ранжирования в поиске Авито</p>
      </div>

      <div className="seo-container">
        <div className="input-section">
          <h3>Исходный текст</h3>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Введите текст объявления для SEO-оптимизации..."
            className="text-input"
            rows={8}
          />
          <button 
            onClick={handleOptimize} 
            disabled={isLoading || !inputText.trim()}
            className="optimize-button"
          >
            {isLoading ? 'Оптимизация...' : 'Оптимизировать текст'}
          </button>
        </div>

        <div className="output-section">
          <h3>Оптимизированный текст</h3>
          <div className="optimized-text">
            {optimizedText || 'Здесь появится оптимизированный текст...'}
          </div>
          
          {analysis.seoScore > 0 && (
            <div className="analysis-results">
              <h4>Анализ SEO</h4>
              <div className="metrics">
                <div className="metric">
                  <span className="metric-label">Плотность ключевых слов</span>
                  <span className="metric-value">{analysis.keywordDensity}%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Читаемость</span>
                  <span className="metric-value">{analysis.readability}%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">SEO-оценка</span>
                  <span className="metric-value">{analysis.seoScore}%</span>
                </div>
              </div>
              
              <div className="suggestions">
                <h5>Рекомендации по улучшению:</h5>
                <ul>
                  {analysis.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SEOPage;