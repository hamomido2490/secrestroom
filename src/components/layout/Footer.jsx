import React from 'react';

const Footer = ({ translations, lang }) => {
  const t = translations[lang];
  
  return (
    <footer className="footer mt-16 text-center text-slate-400 text-sm">
      <p className="font-semibold">{t.footer1}</p>
      <p>{t.footer2}</p>
    </footer>
  );
};

export default Footer;


