import React from 'react';
import './SubscriptionPage.css';

const SubscriptionPage: React.FC = () => {
  const plans = [
    {
      name: 'Базовый',
      price: '990 ₽',
      period: 'в месяц',
      features: ['До 10 объявлений', 'Базовая аналитика', 'Email поддержка']
    },
    {
      name: 'Профессиональный',
      price: '2 990 ₽',
      period: 'в месяц',
      features: ['До 100 объявлений', 'Расширенная аналитика', 'Приоритетная поддержка', 'AI оптимизация'],
      popular: true
    },
    {
      name: 'Бизнес',
      price: '5 990 ₽',
      period: 'в месяц',
      features: ['Неограниченно объявлений', 'Полная аналитика', 'Персональный менеджер', 'Все AI инструменты']
    }
  ];

  return (
    <div className="subscription-page">
      <div className="subscription-header">
        <h1>Тарифные планы</h1>
        <p>Выберите подходящий тариф для вашего бизнеса</p>
      </div>

      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">Популярный</div>}
            <h3>{plan.name}</h3>
            <div className="price">
              <span className="amount">{plan.price}</span>
              <span className="period">{plan.period}</span>
            </div>
            <ul className="features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className={`select-button ${plan.popular ? 'primary' : 'secondary'}`}>
              Выбрать тариф
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;