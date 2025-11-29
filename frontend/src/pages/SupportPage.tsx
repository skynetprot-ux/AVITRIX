import React, { useState } from 'react';
import './SupportPage.css';

const SupportPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'faq' | 'contact'>('faq');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqItems = [
    {
      question: 'Как подключить аккаунт Авито?',
      answer: 'Перейдите в раздел "Настройки" → "Подключение аккаунтов" и следуйте инструкциям для авторизации через официальное API Авито.'
    },
    {
      question: 'Почему не обновляется статистика?',
      answer: 'Обновление статистики происходит каждые 2 часа. Если данные не обновляются дольше, проверьте подключение аккаунта в настройках.'
    },
    {
      question: 'Как работает ИИ-оптимизация объявлений?',
      answer: 'Наш ИИ анализирует тысячи успешных объявлений и применяет лучшие практики к вашему тексту, улучшая CTR и конверсию.'
    },
    {
      question: 'Доступен ли мультиаккаунтный режим?',
      answer: 'Да, в тарифе "PRO" доступно управление до 10 аккаунтов одновременно с раздельной статистикой.'
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика отправки формы
    alert('Сообщение отправлено в техническую поддержку!');
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="support-page">
      <div className="support-header">
        <h1>Техническая поддержка</h1>
        <p>Мы всегда готовы помочь вам с любыми вопросами</p>
      </div>

      <div className="support-tabs">
        <button 
          className={`tab-button ${activeTab === 'faq' ? 'active' : ''}`}
          onClick={() => setActiveTab('faq')}
        >
          Частые вопросы
        </button>
        <button 
          className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          Связаться с поддержкой
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'faq' && (
          <div className="faq-section">
            <div className="faq-list">
              {faqItems.map((item, index) => (
                <div key={index} className="faq-item">
                  <h4>{item.question}</h4>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="support-info">
              <h3>Дополнительная помощь</h3>
              <p>Если вы не нашли ответ на свой вопрос, свяжитесь с нашей поддержкой:</p>
              <div className="contact-methods">
                <div className="contact-method">
                  <strong>Email:</strong> support@avitrix.ru
                </div>
                <div className="contact-method">
                  <strong>Телефон:</strong> 8-800-xxx-xx-xx
                </div>
                <div className="contact-method">
                  <strong>Часы работы:</strong> Пн-Пт 9:00-18:00
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="contact-section">
            <form onSubmit={handleContactSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Ваше имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Тема сообщения</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  placeholder="Опишите вашу проблему подробно..."
                />
              </div>
              
              <button type="submit" className="submit-button">
                Отправить сообщение
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportPage;