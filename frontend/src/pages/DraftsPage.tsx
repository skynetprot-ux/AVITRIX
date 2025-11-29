import React from 'react';
import './DraftsPage.css';

const DraftsPage: React.FC = () => {
  return (
    <div className="drafts-page">
      <div className="page-header">
        <h1>Черновики</h1>
        <p>Неопубликованные объявления</p>
      </div>
      <div className="content-placeholder">
        <h2>Страница в разработке</h2>
        <p>Функционал черновиков будет добавлен в ближайшее время</p>
      </div>
    </div>
  );
};

export default DraftsPage;