export interface CategoryField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'textarea';
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

export interface CategoryConfig {
  [key: string]: {
    fields: CategoryField[];
  };
}

export const categoryConfig: CategoryConfig = {
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