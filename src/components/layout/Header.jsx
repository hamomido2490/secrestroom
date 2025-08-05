import React from 'react';

const Header = ({ lang, onLanguageChange, onSettingsClick }) => {
  return (
    <div className="fixed top-4 left-4 z-50 flex space-x-2">
      {/* زر الإعدادات */}
      <button 
        onClick={onSettingsClick}
        className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full transition-colors"
      >
        <i className="fas fa-cog"></i>
      </button>
      
      {/* زر تبديل اللغة */}
      <button 
        onClick={onLanguageChange}
        className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-full transition-colors"
      >
        <i className="fas fa-language ml-2"></i>
        {lang === 'ar' ? 'English' : 'العربية'}
      </button>
    </div>
  );
};

export default Header;
