import React, { useEffect } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import Chart from '../ui/Chart';
import { PERSONALITY_COLORS, PERSONALITY_TYPES } from '../../utils/constants';
import { calculateAge, formatDate, copyToClipboard, shareContent } from '../../utils/helpers';
import { zodiacData, zodiacCompatibility } from '../../assets/data/zodiacData';
import { personalityAnalysis } from '../../assets/data/personalityAnalysis';
import { ZodiacService } from '../../services/zodiacService';
import { AnalyticsService } from '../../services/analyticsService';

const Result = ({ 
  state, 
  translations, 
  onRestart, 
  onHistory,
  onBack
}) => {
  const t = translations[state.lang];
  const { scores, primary } = state.resultData;
  
  useEffect(() => {
    // تحديث العدادات عند عرض النتائج
    AnalyticsService.incrementAnalyses();
  }, []);

  const age = calculateAge(state.userData.dob);
  const userZodiac = ZodiacService.calculateZodiac(state.userData.dob);
  const zodiacInfo = zodiacData[state.lang][userZodiac];
  const compatibleZodiacs = zodiacCompatibility[state.lang][userZodiac] || [];
  
  const analysis = personalityAnalysis[state.lang][primary];
  const partnerInfo = ZodiacService.getPartnerInfo(primary, state.lang);
  const similarPersonalities = ZodiacService.getSimilarPersonalities(primary, state.lang);

  const handleCopy = async () => {
    const resultText = document.querySelector('.glass-card')?.innerText || '';
    const success = await copyToClipboard(resultText);
    if (success) {
      alert(t.alert_copied);
    }
  };

  const handleShare = async () => {
    const types = {
      ar: { D: "القائد المهيمن", I: "الشخصية المؤثرة", S: "الشخصية المستقرة", C: "الشخصية الواعية" },
      en: { D: "Dominant Leader", I: "Influencer", S: "Steady Supporter", C: "Conscientious Thinker" }
    };
    
    const shareText = `${state.lang === 'ar' 
      ? 'لقد اكتشفت شخصيتي في غرفة الأسرار! شخصيتي هي: ' 
      : 'I discovered my personality in Chamber of Secrets! My personality is: '}${types[state.lang][primary]}`;
    
    const success = await shareContent(
      state.lang === 'ar' ? 'غرفة الأسرار - اكتشاف الشخصية' : 'Chamber of Secrets - Personality Discovery',
      shareText,
      window.location.href
    );
    
    if (success) {
      alert(t.alert_shared);
    } else {
      alert(t.alert_copied);
    }
  };

  const compatibleZodiacsHTML = compatibleZodiacs.map(z => {
    const zData = zodiacData[state.lang][z];
    return (
      <div key={z} className="flex items-center mb-2">
        <span className="zodiac-icon mr-3">{zData.icon}</span>
        <div>
          <div className="font-bold">{zData.name}</div>
          <div className="text-sm text-slate-400">{zData.dates} • {zData.element}</div>
        </div>
      </div>
    );
  });

  const analysisSections = (
    <>
      <div className={`analysis-section section-${primary.toLowerCase()}`}>
        <h3 className="text-xl font-bold mb-3">{t.overview}</h3>
        <p className="text-slate-300">{analysis.overview}</p>
      </div>
      
      <div className={`analysis-section section-${primary.toLowerCase()}`}>
        <h3 className="text-xl font-bold mb-3">{t.core_traits}</h3>
        <p className="text-slate-300">{analysis.core_traits}</p>
      </div>
      
      <div className={`analysis-section section-${primary.toLowerCase()}`}>
        <h3 className="text-xl font-bold mb-3">{t.psychological_profile}</h3>
        <p className="text-slate-300">{analysis.psychological_profile}</p>
      </div>
      
      <div className={`analysis-section section-${primary.toLowerCase()}`}>
        <h3 className="text-xl font-bold mb-3">{t.work_behavior}</h3>
        <p className="text-slate-300">{analysis.work_behavior}</p>
      </div>
      
      <div className={`analysis-section section-${primary.toLowerCase()}`}>
        <h3 className="text-xl font-bold mb-3">{t.relationship_behavior}</h3>
        <p className="text-slate-300">{analysis.relationship_behavior}</p>
      </div>
    </>
  );

  return (
    <Card className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 gradient-text">{t.personality_section}</h2>
      <p className="text-slate-300 mb-6">{t.analysis_intro}</p>
      
      {/* معلومات المستخدم */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-900 p-6 rounded-lg mb-8">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">{PERSONALITY_TYPES[state.lang][primary]}</h3>
          <div className="flex flex-wrap gap-4 text-lg">
            <div>
              <span className="text-slate-300">{t.age_label}:</span> 
              <span className="font-bold">{age}</span>
            </div>
            <div>
              <span className="text-slate-300">{t.zodiac_sign}:</span> 
              <span className="font-bold">{zodiacInfo.icon} {zodiacInfo.name}</span>
            </div>
            <div>
              <span className="text-slate-300">{t.personality_color}:</span> 
              <span className="font-bold" style={{ color: PERSONALITY_COLORS[primary] }}>
                {t.colors[primary]}
              </span>
              <span 
                className="personality-color" 
                style={{ backgroundColor: PERSONALITY_COLORS[primary] }}
              ></span>
            </div>
          </div>
        </div>
        <div className="text-sm text-slate-400">
          {zodiacInfo.dates} • {zodiacInfo.element} • {zodiacInfo.traits}
        </div>
      </div>
      
      {/* الشريك المثالي */}
      <div className="bg-gradient-to-r from-purple-900 to-pink-900 p-6 rounded-lg mb-8">
        <h3 className="text-2xl font-bold mb-6">{t.ideal_partner}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-bold mb-3">{t.partner_type}</h4>
            <p className="text-slate-300 mb-4">{partnerInfo.type}</p>
            
            <h4 className="text-lg font-bold mb-3">{t.partner_traits}</h4>
            <p className="text-slate-300 mb-4">{partnerInfo.traits}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-3">{t.relationship_needs}</h4>
            <p className="text-slate-300 mb-4">{analysis.relationship_needs}</p>
            
            <h4 className="text-lg font-bold mb-3">{t.compatible_zodiacs}</h4>
            <div className="mb-4">
              {compatibleZodiacsHTML}
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <span>{t.compatibility_title}</span>
            <span className="font-bold">85%</span>
          </div>
          <div className="compatibility-meter">
            <div className="compatibility-fill" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
      
      {/* الشخصيات المشابهة */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 p-6 rounded-lg mb-8">
        <h3 className="text-2xl font-bold mb-6">{t.similar_personalities}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {similarPersonalities.map((person, index) => (
            <div key={index} className="similar-personality">
              <img 
                src={person.image} 
                alt={person.name} 
                className="w-24 h-24 rounded-full mx-auto mb-2"
              />
              <h4 className="font-bold">{person.name}</h4>
              <p className="text-sm text-slate-400">{person.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* الرسم البياني */}
      <div className="chart-container mb-8">
        <Chart data={scores} lang={state.lang} />
      </div>
      
      {/* تحليل الشخصية المفصل */}
      <div className="mb-8">
        {analysisSections}
      </div>
      
      {/* قسم التقييم والتعليقات */}
      <div className="feedback-section">
        <h3 className="text-xl font-bold mb-4">{t.rate_analysis}</h3>
        <div className="feedback-stars" id="analysisRating">
          {[1, 2, 3, 4, 5].map(rating => (
            <i 
              key={rating}
              className="fas fa-star" 
              data-rating={rating}
              onClick={(e) => {
                const container = e.target.parentElement;
                container.querySelectorAll('.fa-star').forEach((star, index) => {
                  if (index < rating) {
                    star.classList.add('active');
                  } else {
                    star.classList.remove('active');
                  }
                });
              }}
            />
          ))}
        </div>
        <textarea 
          id="analysisComment" 
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 mb-4" 
          rows="3" 
          placeholder={t.write_comment}
        />
        <Button id="submitAnalysisFeedback">
          {t.submit_feedback}
        </Button>
        
        {/* عرض التعليقات المشتركة */}
        <div className="shared-feedback">
          <h4 className="text-lg font-bold mb-4">{t.shared_feedback}</h4>
          <div id="sharedAnalysisFeedback">
            <p className="text-slate-400 text-center">{t.no_feedback}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <Button onClick={onRestart} variant="secondary" className="mr-4">
          {t.restart_btn}
        </Button>
        <Button onClick={handleCopy} className="mr-4">
          {t.copy_btn}
        </Button>
        <Button onClick={handleShare} className="mr-4">
          {t.share_btn}
        </Button>
        <Button onClick={() => window.print()} variant="secondary" className="mr-4">
          {t.print_btn}
        </Button>
        <Button onClick={onHistory} variant="secondary">
          {t.history_btn}
        </Button>
      </div>
    </Card>
  );
};

export default Result;
