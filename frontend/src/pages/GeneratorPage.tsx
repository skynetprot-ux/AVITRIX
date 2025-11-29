import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AIAutopilot from '../components/AIAutopilot';
import AIPhotoEnhancer from '../components/AIPhotoEnhancer';
import AICTRBoost from '../components/AICTRBoost';
import AvitologPro from '../components/AvitologPro';
import "./GeneratorPage.css";

export default function GeneratorPage() {
  const location = useLocation();
  const [activeTool, setActiveTool] = useState('descriptions');

  useEffect(() => {
    // Определяем активный инструмент на основе URL
    const path = location.pathname;
    if (path.includes('seo-titles')) setActiveTool('seo-titles');
    else if (path.includes('photo-editor')) setActiveTool('photo-editor');
    else if (path.includes('card-rating')) setActiveTool('card-rating');
    else if (path.includes('ctr-boost')) setActiveTool('ctr-boost');
    else if (path.includes('avitolog-pro')) setActiveTool('avitolog-pro');
    else if (path.includes('descriptions')) setActiveTool('descriptions');
    else setActiveTool('descriptions');
  }, [location.pathname]);

  const getPageTitle = () => {
    switch (activeTool) {
      case 'descriptions': return 'Генератор описаний';
      case 'seo-titles': return 'SEO-заголовки';
      case 'photo-editor': return 'Фото редактор';
      case 'card-rating': return 'AI-оценка карточки';
      case 'ctr-boost': return 'CTR Boost';
      case 'avitolog-pro': return 'Avitolog PRO';
      default: return 'AI-инструменты';
    }
  };

  const getPageDescription = () => {
    switch (activeTool) {
      case 'descriptions': return 'Создавайте продающие описания с помощью искусственного интеллекта';
      case 'seo-titles': return 'Генерация оптимизированных заголовков для поисковых систем';
      case 'photo-editor': return 'Анализ и улучшение фотографий объявлений';
      case 'card-rating': return 'Комплексная оценка эффективности объявлений';
      case 'ctr-boost': return 'Оптимизация кликабельности объявлений';
      case 'avitolog-pro': return 'Ваш AI-авитолог для создания продающих объявлений';
      default: return 'Используйте AI-инструменты для улучшения объявлений';
    }
  };

  return (
    <div className="generator-page">
      <div className="page-header">
        <h1>{getPageTitle()}</h1>
        <p>{getPageDescription()}</p>
      </div>

      {/* TOOL CONTENT */}
      <div className="tool-content">
        {activeTool === 'descriptions' && (
          <div className="text-generator">
            <div className="content-section">
              <div className="generator-form">
                <textarea placeholder="Введите ключевые слова или описание товара. Например: продам iPhone 12 в отличном состоянии, 128 гб, черный..." />
                <div className="generator-options">
                  <label>
                    <input type="checkbox" defaultChecked />
                    Добавить эмоциональные триггеры
                  </label>
                  <label>
                    <input type="checkbox" defaultChecked />
                    SEO-оптимизация
                  </label>
                  <label>
                    <input type="checkbox" />
                    Формальный стиль
                  </label>
                </div>
                <button className="btn primary">Сгенерировать описание</button>
              </div>
            </div>
          </div>
        )}

        {activeTool === 'seo-titles' && (
          <div className="seo-generator">
            <div className="content-section">
              <div className="generator-form">
                <textarea placeholder="Введите ключевые слова или тему объявления..." />
                <div className="style-options">
                  <label>Стиль заголовка:</label>
                  <select>
                    <option>Продающий с эмоциональными триггерами</option>
                    <option>Формальный SEO-оптимизированный</option>
                    <option>Вопросительный формат</option>
                    <option>Срочный/ограниченный</option>
                  </select>
                </div>
                <button className="btn primary">Сгенерировать заголовки</button>
              </div>
            </div>
          </div>
        )}

        {activeTool === 'photo-editor' && <AIPhotoEnhancer />}
        
        {activeTool === 'card-rating' && (
          <div className="card-rating">
            <div className="content-section">
              <div className="rating-form">
                <div className="input-group">
                  <label>Заголовок объявления</label>
                  <input type="text" placeholder="Введите заголовок..." />
                </div>
                <div className="input-group">
                  <label>Описание</label>
                  <textarea placeholder="Введите описание..." rows={4} />
                </div>
                <div className="input-group">
                  <label>Цена</label>
                  <input type="number" placeholder="Введите цену..." />
                </div>
                <div className="input-group">
                  <label>Категория</label>
                  <select>
                    <option>Электроника</option>
                    <option>Недвижимость</option>
                    <option>Автомобили</option>
                    <option>Одежда</option>
                    <option>Услуги</option>
                  </select>
                </div>
                <button className="btn primary">Оценить карточку</button>
              </div>
            </div>
          </div>
        )}

        {activeTool === 'ctr-boost' && <AICTRBoost />}

        {activeTool === 'avitolog-pro' && <AvitologPro />}
      </div>
    </div>
  );
}