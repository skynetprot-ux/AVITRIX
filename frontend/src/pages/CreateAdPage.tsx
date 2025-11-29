import React, { useState } from 'react';
import './CreateAdPage.css';

// Интерфейсы и конфигурация прямо в файле для избежания ошибок импорта
interface CategoryField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'textarea';
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

interface CategoryConfig {
  [key: string]: {
    fields: CategoryField[];
  };
}

const categoryConfig: CategoryConfig = {
  'Телефоны и гаджеты': {
    fields: [
      { name: 'brand', label: 'Бренд', type: 'select', required: true, options: ['Apple', 'Samsung', 'Xiaomi', 'Huawei', 'Google', 'OnePlus', 'Realme', 'OPPO', 'Vivo', 'Другой'] },
      { name: 'model', label: 'Модель', type: 'text', required: true, placeholder: 'iPhone 13 Pro, Galaxy S21...' },
      { name: 'color', label: 'Цвет', type: 'text', placeholder: 'Черный, белый, синий...' },
      { name: 'memory', label: 'Память', type: 'select', options: ['32 ГБ', '64 ГБ', '128 ГБ', '256 ГБ', '512 ГБ', '1 ТБ'] },
      { name: 'screenSize', label: 'Диагональ экрана', type: 'text', placeholder: '6.1", 6.7"...' },
      { name: 'processor', label: 'Процессор', type: 'text', placeholder: 'A15 Bionic, Snapdragon 888...' },
      { name: 'ram', label: 'Оперативная память', type: 'select', options: ['2 ГБ', '4 ГБ', '6 ГБ', '8 ГБ', '12 ГБ', '16 ГБ'] },
      { name: 'battery', label: 'Аккумулятор', type: 'text', placeholder: '4000 мАч, 5000 мАч...' },
      { name: 'camera', label: 'Камера', type: 'text', placeholder: '12 МП + 12 МП + 12 МП...' }
    ]
  },
  'Недвижимость': {
    fields: [
      { name: 'propertyType', label: 'Тип недвижимости', type: 'select', required: true, options: ['Квартира', 'Дом', 'Комната', 'Таунхаус', 'Участок'] },
      { name: 'roomCount', label: 'Количество комнат', type: 'select', options: ['1', '2', '3', '4', '5+', 'Студия'] },
      { name: 'totalArea', label: 'Общая площадь', type: 'number', required: true, placeholder: 'м²' },
      { name: 'livingArea', label: 'Жилая площадь', type: 'number', placeholder: 'м²' },
      { name: 'floor', label: 'Этаж', type: 'number' },
      { name: 'totalFloors', label: 'Этажей в доме', type: 'number' },
      { name: 'renovation', label: 'Ремонт', type: 'select', options: ['Без ремонта', 'Косметический', 'Евроремонт', 'Дизайнерский'] },
      { name: 'bathroom', label: 'Санузел', type: 'select', options: ['Раздельный', 'Совмещенный'] },
      { name: 'balcony', label: 'Балкон/лоджия', type: 'select', options: ['Нет', 'Балкон', 'Лоджия', '2 балкона'] },
      { name: 'yearBuilt', label: 'Год постройки', type: 'number' }
    ]
  },
  'Транспорт': {
    fields: [
      { name: 'vehicleType', label: 'Тип транспорта', type: 'select', required: true, options: ['Легковой', 'Мотоцикл', 'Грузовой', 'Спецтехника', 'Водный'] },
      { name: 'brand', label: 'Марка', type: 'text', required: true, placeholder: 'Toyota, BMW, Honda...' },
      { name: 'model', label: 'Модель', type: 'text', required: true, placeholder: 'Camry, X5, Civic...' },
      { name: 'year', label: 'Год выпуска', type: 'number', required: true },
      { name: 'mileage', label: 'Пробег', type: 'number', placeholder: 'км' },
      { name: 'engineVolume', label: 'Объем двигателя', type: 'number', placeholder: 'л' },
      { name: 'engineType', label: 'Тип двигателя', type: 'select', options: ['Бензин', 'Дизель', 'Электро', 'Гибрид'] },
      { name: 'transmission', label: 'Коробка передач', type: 'select', options: ['Механическая', 'Автомат', 'Робот', 'Вариатор'] },
      { name: 'driveType', label: 'Привод', type: 'select', options: ['Передний', 'Задний', 'Полный'] },
      { name: 'color', label: 'Цвет', type: 'text' }
    ]
  },
  'Электроника': {
    fields: [
      { name: 'deviceType', label: 'Тип устройства', type: 'select', required: true, options: ['Смартфон', 'Ноутбук', 'Планшет', 'Телевизор', 'Наушники', 'Фотоаппарат'] },
      { name: 'brand', label: 'Бренд', type: 'text', required: true },
      { name: 'model', label: 'Модель', type: 'text', required: true },
      { name: 'condition', label: 'Состояние', type: 'select', options: ['Новое', 'Б/у', 'На запчасти'] },
      { name: 'memory', label: 'Память', type: 'select', options: ['32 ГБ', '64 ГБ', '128 ГБ', '256 ГБ', '512 ГБ', '1 ТБ'] },
      { name: 'ram', label: 'Оперативная память', type: 'select', options: ['2 ГБ', '4 ГБ', '6 ГБ', '8 ГБ', '12 ГБ', '16 ГБ'] },
      { name: 'screenSize', label: 'Диагональ экрана', type: 'text' },
      { name: 'color', label: 'Цвет', type: 'text' },
      { name: 'batteryHealth', label: 'Состояние батареи', type: 'number', placeholder: '%' }
    ]
  }
};

const CreateAdPage: React.FC = () => {
  const [formData, setFormData] = useState({
    // Основная информация
    title: '',
    category: '',
    subcategory: '',
    condition: 'new',
    price: '',
    priceType: 'fixed',
    description: '',
    
    // Динамические характеристики
    characteristics: {} as { [key: string]: string },
    
    // Местоположение
    city: '',
    district: '',
    address: '',
    metro: '',
    
    // Контакты
    contactName: '',
    phone: '',
    email: '',
    
    // Дополнительно
    delivery: false,
    exchange: false,
    auction: false,
    urgent: false,
    promote: false,
    
    images: [] as string[]
  });

  const [currentStep, setCurrentStep] = useState(1);

  // Категории как на Авито
  const categories = {
    'Телефоны и гаджеты': ['Смартфоны', 'Телефоны', 'Планшеты', 'Умные часы и браслеты', 'Аксессуары'],
    'Электроника': ['Ноутбуки и компьютеры', 'Фото и видео', 'Аудиотехника', 'Игры и консоли', 'Техника для дома'],
    'Недвижимость': ['Квартиры', 'Комнаты', 'Дома и дачи', 'Коммерческая', 'Гаражи и парковки'],
    'Транспорт': ['Автомобили', 'Мотоциклы', 'Велосипеды', 'Запчасти и аксессуары', 'Шины и диски'],
    'Работа': ['Вакансии', 'Резюме', 'Услуги'],
    'Услуги': ['Ремонт и строительство', 'Красота и здоровье', 'Образование', 'Доставка', 'IT и интернет'],
    'Личные вещи': ['Одежда и обувь', 'Часы и украшения', 'Красота и здоровье', 'Детские товары'],
    'Для дома и дачи': ['Мебель', 'Инструменты', 'Посуда и товары для кухни', 'Сад и огород'],
    'Хобби и отдых': ['Билеты и путешествия', 'Книги и журналы', 'Музыкальные инструменты', 'Спорт и отдых']
  };

  const conditions = [
    { value: 'new', label: 'Новое' },
    { value: 'used', label: 'Б/у' },
    { value: 'broken', label: 'Требует ремонта' }
  ];

  const priceTypes = [
    { value: 'fixed', label: 'Фиксированная цена' },
    { value: 'negotiable', label: 'Договорная цена' },
    { value: 'free', label: 'Бесплатно' }
  ];

  const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Челябинск', 'Самара', 'Омск', 'Ростов-на-Дону'];
  const districts = ['Центральный', 'Северный', 'Южный', 'Восточный', 'Западный', 'Северо-Восточный', 'Юго-Западный'];
  const metroStations = ['Красные Ворота', 'Чистые пруды', 'Лубянка', 'Охотный ряд', 'Библиотека им. Ленина', 'Кропоткинская'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleCharacteristicChange = (fieldName: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      characteristics: {
        ...prev.characteristics,
        [fieldName]: value
      }
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).slice(0, 10 - formData.images.length).map(file => URL.createObjectURL(file));
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Создание объявления:', formData);
    alert('Объявление успешно создано и отправлено на модерацию!');
  };

  const getStepTitle = (step: number) => {
    const titles = {
      1: 'Основная информация',
      2: 'Характеристики товара',
      3: 'Местоположение и контакты',
      4: 'Фотографии',
      5: 'Дополнительные опции',
      6: 'Проверка и публикация'
    };
    return titles[step as keyof typeof titles] || '';
  };

  // Получаем поля характеристик для текущей категории
  const getCurrentCategoryFields = (): CategoryField[] => {
    if (!formData.category || !categoryConfig[formData.category]) {
      return [];
    }
    return categoryConfig[formData.category].fields;
  };

  const renderField = (field: CategoryField) => {
    const value = formData.characteristics[field.name] || '';

    switch (field.type) {
      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => handleCharacteristicChange(field.name, e.target.value)}
            required={field.required}
          >
            <option value="">Выберите...</option>
            {field.options?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      
      case 'number':
        return (
          <input
            type="number"
            value={value}
            onChange={(e) => handleCharacteristicChange(field.name, e.target.value)}
            required={field.required}
            placeholder={field.placeholder}
          />
        );
      
      case 'textarea':
        return (
          <textarea
            value={value}
            onChange={(e) => handleCharacteristicChange(field.name, e.target.value)}
            required={field.required}
            rows={3}
          />
        );
      
      default:
        return (
          <input
            type="text"
            value={value}
            onChange={(e) => handleCharacteristicChange(field.name, e.target.value)}
            required={field.required}
            placeholder={field.placeholder}
          />
        );
    }
  };

  const currentCategoryFields = getCurrentCategoryFields();

  return (
    <div className="create-ad-page">
      <div className="create-ad-header">
        <h1>Создание объявления на AVITRIX</h1>
        <p>Заполните все поля для быстрой продажи вашего товара</p>
      </div>

      <div className="create-ad-stepper">
        {[1, 2, 3, 4, 5, 6].map(step => (
          <div key={step} className={`step ${currentStep >= step ? 'active' : ''}`}>
            <div className="step-number">{step}</div>
            <span>{getStepTitle(step)}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="create-ad-form">
        <div className="form-step-header">
          <h2>{getStepTitle(currentStep)}</h2>
          <div className="step-progress">Шаг {currentStep} из 6</div>
        </div>

        {currentStep === 1 && (
          <div className="form-step">
            <div className="form-section">
              <h3>Основные параметры</h3>
              
              <div className="form-group">
                <label htmlFor="title">Заголовок объявления *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Например: iPhone 13 Pro 128GB в идеальном состоянии"
                  required
                  maxLength={60}
                />
                <div className="character-counter">{formData.title.length}/60</div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Категория *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Выберите категорию</option>
                    {Object.keys(categories).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {formData.category && (
                  <div className="form-group">
                    <label htmlFor="subcategory">Подкатегория *</label>
                    <select
                      id="subcategory"
                      name="subcategory"
                      value={formData.subcategory}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Выберите подкатегорию</option>
                      {categories[formData.category as keyof typeof categories]?.map(sub => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="condition">Состояние товара *</label>
                  <select
                    id="condition"
                    name="condition"
                    value={formData.condition}
                    onChange={handleInputChange}
                    required
                  >
                    {conditions.map(cond => (
                      <option key={cond.value} value={cond.value}>{cond.label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="priceType">Тип цены</label>
                  <select
                    id="priceType"
                    name="priceType"
                    value={formData.priceType}
                    onChange={handleInputChange}
                  >
                    {priceTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {formData.priceType !== 'free' && (
                <div className="form-group">
                  <label htmlFor="price">Цена *</label>
                  <div className="price-input-container">
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="0"
                      required
                      min="0"
                    />
                    <span className="currency">₽</span>
                  </div>
                </div>
              )}
            </div>

            <div className="form-section">
              <h3>Описание товара</h3>
              <div className="form-group">
                <label htmlFor="description">Подробное описание *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Опишите товар подробно: состояние, комплектация, причины продажи, дефекты если есть..."
                  rows={6}
                  required
                  maxLength={3000}
                />
                <div className="character-counter">{formData.description.length}/3000</div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="form-step">
            <div className="form-section">
              <h3>
                {formData.category ? `Характеристики ${formData.category.toLowerCase()}` : 'Характеристики товара'}
              </h3>
              
              {!formData.category ? (
                <div className="no-category-message">
                  <p>Сначала выберите категорию товара на предыдущем шаге</p>
                </div>
              ) : (
                <div className="characteristics-grid">
                  {currentCategoryFields.map(field => (
                    <div key={field.name} className="form-group">
                      <label htmlFor={`char-${field.name}`}>
                        {field.label}
                        {field.required && <span className="required"> *</span>}
                      </label>
                      {renderField(field)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Остальные шаги остаются без изменений */}
        {currentStep === 3 && (
          <div className="form-step">
            <div className="form-section">
              <h3>Местоположение</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">Город *</label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Выберите город</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="district">Район</label>
                  <select
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                  >
                    <option value="">Выберите район</option>
                    {districts.map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="metro">Станция метро</label>
                  <select
                    id="metro"
                    name="metro"
                    value={formData.metro}
                    onChange={handleInputChange}
                  >
                    <option value="">Выберите станцию</option>
                    {metroStations.map(station => (
                      <option key={station} value={station}>{station}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Адрес</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Улица, дом, квартира"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Контактная информация</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contactName">Ваше имя *</label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    placeholder="Как к вам обращаться"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Телефон *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7 (XXX) XXX-XX-XX"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="form-step">
            <div className="form-section">
              <h3>Фотографии товара</h3>
              <p className="section-description">Добавьте до 10 качественных фотографий. Первое фото будет на обложке объявления.</p>
              
              <div className="image-upload-area">
                <input
                  type="file"
                  id="images"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="image-input"
                />
                <label htmlFor="images" className="image-upload-label">
                  <div className="upload-icon">+</div>
                  <span>Добавить фотографии</span>
                  <small>Перетащите сюда файлы или нажмите для выбора</small>
                  <small>До 10 фото в формате JPG, PNG</small>
                </label>
              </div>

              {formData.images.length > 0 && (
                <div className="image-preview">
                  {formData.images.map((image, index) => (
                    <div key={index} className="preview-item">
                      <img src={image} alt={`Preview ${index + 1}`} />
                      {index === 0 && <div className="cover-badge">Обложка</div>}
                      <button
                        type="button"
                        className="remove-image"
                        onClick={() => removeImage(index)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="upload-tips">
                <h4>Советы по фото:</h4>
                <ul>
                  <li>Используйте естественное освещение</li>
                  <li>Покажите товар со всех сторон</li>
                  <li>Сфотографируйте дефекты если есть</li>
                  <li>Добавьте фото упаковки и документов</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="form-step">
            <div className="form-section">
              <h3>Дополнительные опции</h3>
              
              <div className="options-grid">
                <div className="option-item">
                  <label className="option-checkbox">
                    <input
                      type="checkbox"
                      name="delivery"
                      checked={formData.delivery}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    <div className="option-content">
                      <strong>Возможна доставка</strong>
                      <span>Вы можете организовать доставку товара</span>
                    </div>
                  </label>
                </div>

                <div className="option-item">
                  <label className="option-checkbox">
                    <input
                      type="checkbox"
                      name="exchange"
                      checked={formData.exchange}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    <div className="option-content">
                      <strong>Возможен обмен</strong>
                      <span>Готовы рассмотреть предложения по обмену</span>
                    </div>
                  </label>
                </div>

                <div className="option-item">
                  <label className="option-checkbox">
                    <input
                      type="checkbox"
                      name="auction"
                      checked={formData.auction}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    <div className="option-content">
                      <strong>Торг уместен</strong>
                      <span>Готовы обсуждать цену</span>
                    </div>
                  </label>
                </div>

                <div className="option-item premium">
                  <label className="option-checkbox">
                    <input
                      type="checkbox"
                      name="urgent"
                      checked={formData.urgent}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    <div className="option-content">
                      <strong>Срочная продажа</strong>
                      <span>Выделяет объявление в поиске</span>
                      <div className="premium-badge">PRO</div>
                    </div>
                  </label>
                </div>

                <div className="option-item premium">
                  <label className="option-checkbox">
                    <input
                      type="checkbox"
                      name="promote"
                      checked={formData.promote}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    <div className="option-content">
                      <strong>Продвижение объявления</strong>
                      <span>Показывать в топе результатов поиска</span>
                      <div className="premium-badge">PRO</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 6 && (
          <div className="form-step">
            <div className="review-section">
              <h3>Проверьте информацию перед публикацией</h3>
              
              <div className="review-grid">
                <div className="review-column">
                  <div className="review-item">
                    <strong>Заголовок:</strong>
                    <span>{formData.title || 'Не указано'}</span>
                  </div>
                  <div className="review-item">
                    <strong>Категория:</strong>
                    <span>{formData.category} {formData.subcategory && `> ${formData.subcategory}`}</span>
                  </div>
                  <div className="review-item">
                    <strong>Состояние:</strong>
                    <span>{conditions.find(c => c.value === formData.condition)?.label}</span>
                  </div>
                  <div className="review-item">
                    <strong>Цена:</strong>
                    <span>
                      {formData.priceType === 'free' ? 'Бесплатно' : 
                       formData.priceType === 'negotiable' ? 'Договорная' : 
                       `${formData.price} ₽`}
                    </span>
                  </div>
                  <div className="review-item">
                    <strong>Описание:</strong>
                    <p>{formData.description || 'Не указано'}</p>
                  </div>
                </div>

                <div className="review-column">
                  <div className="review-item">
                    <strong>Характеристики:</strong>
                    <div className="characteristics-list">
                      {Object.entries(formData.characteristics).map(([key, value]) => (
                        value && <span key={key}>{key}: {value}</span>
                      ))}
                    </div>
                  </div>
                  <div className="review-item">
                    <strong>Местоположение:</strong>
                    <span>{formData.city} {formData.district && `, ${formData.district}`} {formData.metro && `, м. ${formData.metro}`}</span>
                  </div>
                  <div className="review-item">
                    <strong>Контакты:</strong>
                    <span>{formData.contactName} {formData.phone && `, ${formData.phone}`}</span>
                  </div>
                  <div className="review-item">
                    <strong>Фотографии:</strong>
                    <span>{formData.images.length} шт.</span>
                  </div>
                  <div className="review-item">
                    <strong>Дополнительно:</strong>
                    <div className="options-list">
                      {formData.delivery && <span>Доставка</span>}
                      {formData.exchange && <span>Обмен</span>}
                      {formData.auction && <span>Торг</span>}
                      {formData.urgent && <span>Срочно</span>}
                      {formData.promote && <span>Продвижение</span>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="ai-optimization">
                <h4>AI-оптимизация AVITRIX</h4>
                <p>Ваше объявление будет автоматически оптимизировано для лучшего отображения в поиске Авито</p>
                <div className="optimization-features">
                  <span>✓ SEO-оптимизация заголовка и описания</span>
                  <span>✓ Подбор ключевых слов для поиска</span>
                  <span>✓ Анализ и улучшение структуры текста</span>
                  <span>✓ Рекомендации по цене на основе рынка</span>
                  <span>✓ Автоматическая категоризация</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="form-actions">
          {currentStep > 1 && (
            <button type="button" className="back-button" onClick={prevStep}>
              Назад
            </button>
          )}
          
          {currentStep < 6 ? (
            <button type="button" className="next-button" onClick={nextStep}>
              Продолжить
            </button>
          ) : (
            <button type="submit" className="submit-button">
              Опубликовать объявление
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateAdPage;