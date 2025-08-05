import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import { formatDate, calculateAge } from '../../utils/helpers';
import { zodiacData } from '../../assets/data/zodiacData';
import { PERSONALITY_TYPES } from '../../utils/constants';
import { ZodiacService } from '../../services/zodiacService';

const History = ({ 
  state, 
  translations, 
  onBack,
  onViewResult
}) => {
  const t = translations[state.lang];
  
  // الحصول على النتائج المحفوظة
  const getSavedResults = () => {
    try {
      const saved = localStorage.getItem('personalityResults');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error getting saved results:', error);
      return [];
    }
  };

  const results = getSavedResults();

  if (results.length === 0) {
    return (
      <Card className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{t.history_title}</h2>
        <p className="text-slate-300">{t.no_history}</p>
        <Button onClick={onBack} className="mt-6">
          العودة
        </Button>
      </Card>
    );
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">{t.history_title}</h2>
      <div className="space-y-4">
        {results.map((result, index) => {
          const date = formatDate(result.date, state.lang);
          const age = result.userData.dob ? calculateAge(result.userData.dob) : 'غير محدد';
          const zodiac = result.userData.dob ? ZodiacService.calculateZodiac(result.userData.dob) : null;
          const zodiacInfo = zodiac ? zodiacData[state.lang][zodiac] : null;
          
          return (
            <div 
              key={index}
              className="history-item"
              onClick={() => onViewResult(index)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">
                    {PERSONALITY_TYPES[state.lang][result.primary]}
                  </h3>
                  <p className="text-slate-400">
                    {date} • {t.age_label}: {age}
                    {zodiacInfo && ` • ${zodiacInfo.icon} ${zodiacInfo.name}`}
                  </p>
                </div>
                <i className="fas fa-chevron-left"></i>
              </div>
            </div>
          );
        })}
      </div>
      <Button onClick={onBack} variant="secondary" className="mt-6">
        العودة
      </Button>
    </Card>
  );
};

export default History;
