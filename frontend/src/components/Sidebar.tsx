import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

type SidebarProps = {
  isMobileOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isMobileOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const isActive = (path: string) => location.pathname === path;
  const isSubmenuActive = (paths: string[]) => paths.some(path => location.pathname === path);

  const menuItems = [
    {
      id: "ads",
      title: "Объявления",
      submenu: [
        { title: "Создать объявление", path: "/create-ad" },
        { title: "AI Autoposter", path: "/autoposter" },
        { title: "Мои объявления", path: "/ads" },
        { title: "Черновики", path: "/drafts" },
        { title: "Массовый редактор", path: "/bulk-editor" },
        { title: "Архив", path: "/archive" },
        { title: "Мультиаккаунт", path: "/multi-account" }
      ]
    },
    {
      id: "analytics",
      title: "Аналитика",
      submenu: [
        { title: "Просмотры", path: "/analytics/views" },
        { title: "Контакты", path: "/analytics/contacts" },
        { title: "Статистика CTR", path: "/analytics/ctr" },
        { title: "ИИ-Прогноз", path: "/analytics/ai-forecast" }
      ]
    },
    {
      id: "ai",
      title: "ИИ-инструменты",
      submenu: [
        { title: "Генератор описаний", path: "/ai/descriptions" },
        { title: "SEO-оптимизатор", path: "/ai/seo-optimizer" },
        { title: "Улучшение фото", path: "/ai/photo-enhancer" },
        { title: "Оценка карточки", path: "/ai/card-rating" },
        { title: "Avitolog PRO", path: "/ai/avitolog-pro" },
        { title: "ProofBoost", path: "/proof-boost" },
        { title: "AI Copycat", path: "/ai-copycat" }
      ]
    },
    {
      id: "competitors",
      title: "Конкуренты",
      submenu: [
        { title: "Анализ конкурентов", path: "/competitors/analysis" },
        { title: "История цен", path: "/competitors/price-history" },
        { title: "Сравнение позиций", path: "/competitors/position-comparison" },
        { title: "ИИ-отчёт", path: "/competitors/ai-report" }
      ]
    }
  ];

  const singleItems = [
    { title: "Авито-сигналы", path: "/notifications" },
    { title: "Настройки", path: "/settings" },
    { title: "Техническая поддержка", path: "/support" }
  ];

  return (
    <aside className={`sidebar ${isMobileOpen ? "mobile-open" : ""}`}>
      <div className="sidebar-header">
        <div className="sidebar-title">МЕНЮ</div>
        <div className="sidebar-subtitle">Управление и аналитика</div>
        <button className="sidebar-close" onClick={onClose}>
          Закрыть
        </button>
      </div>

      <div className="menu-container">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-section">
            <div
              className={`menu-item ${
                openMenu === item.id ? "open" : ""
              } ${
                isSubmenuActive(item.submenu.map(sub => sub.path)) ? "active-main" : ""
              }`}
              onClick={() => toggleMenu(item.id)}
            >
              <div className="menu-item-content">
                <span className="menu-text">{item.title}</span>
              </div>
              <div className={`menu-arrow ${openMenu === item.id ? "rotated" : ""}`}>
                ▼
              </div>
            </div>
            
            <div className={`submenu ${openMenu === item.id ? "submenu-open" : ""}`}>
              {item.submenu.map((subItem, index) => (
                <div
                  key={subItem.path}
                  className={`submenu-item ${isActive(subItem.path) ? "active" : ""}`}
                  onClick={() => {
                    navigate(subItem.path);
                    onClose();
                  }}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="submenu-dot"></div>
                  <span className="submenu-text">{subItem.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {singleItems.map((item) => (
          <div
            key={item.path}
            className={`menu-item single-item ${isActive(item.path) ? "active-main" : ''}`}
            onClick={() => {
              navigate(item.path);
              onClose();
            }}
          >
            <div className="menu-item-content">
              <span className="menu-text">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}