import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import Input from '../common/Input';
import Select from '../common/Select';
import { useFeedback } from '../../hooks/useFeedback';
import { ZodiacService } from '../../services/zodiacService';

const UserInfo = ({ 
  state, 
  updateState, 
  translations, 
  onStartQuiz 
}) => {
  const { getAverageRating, getFeedback, saveFeedback } = useFeedback();
  const t = translations[state.lang];
  const avgSiteRating = getAverageRating('site');
  const siteFeedback = getFeedback('site');

  const handleSubmit = (e) => {
    e.preventDefault();
    const gender = document.getElementById('gender')?.value;
    const dob = document.getElementById('dob')?.value;
    
    if (!gender || !dob) {
      alert(t.alert_missing_fields);
      return;
    }
    
    if (new Date(dob) > new Date()) {
      alert(t.alert_invalid_dob);
      return;
    }
    
    const zodiac = ZodiacService.calculateZodiac(dob);
    updateState({ 
      userData: { gender, dob, zodiac },
      page: 'intro'
    });
  };

  const handleSiteFeedback = () => {
    const rating = document.querySelectorAll('#siteRating .fa-star.active').length;
    const comment = document.getElementById('siteComment')?.value || '';
    
    if (rating === 0) {
      alert('يرجى اختيار تقييم');
      return;
    }
    
    saveFeedback('site', rating, comment);
    
    // إعادة تعيين الحقول
    document.querySelectorAll('#siteRating .fa-star').forEach(star => {
      star.classList.remove('active');
    });
    if (document.getElementById('siteComment')) {
      document.getElementById('siteComment').value = '';
    }
    
    alert('شكراً لتقييمك! سيظهر للجميع قريبا');
  };

  return (
    <div className="text-center">
      <Card className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-4">{t.welcome_title}</h1>
        <p className="text-slate-300 text-lg mb-6">{t.user_info_desc}</p>
        
        <form onSubmit={handleSubmit} className="space-y-6 text-right">
          <Select
            label={t.gender_label}
            value={state.userData.gender}
            onChange={(e) => updateState({ 
              userData: { ...state.userData, gender: e.target.value }
            })}
            options={[
              { value: 'male', label: t.male },
              { value: 'female', label: t.female },
              { value: 'other', label: t.other }
            ]}
          />
          
          <Input
            label={t.dob_label}
            type="date"
            value={state.userData.dob}
            onChange={(e) => updateState({ 
              userData: { ...state.userData, dob: e.target.value }
            })}
          />
          
          <Button type="submit" className="w-full">
            {t.submit_user_info}
          </Button>
        </form>
      </Card>
      
      {/* قسم التقييم والتعليقات */}
      <Card className="feedback-section max-w-3xl mx-auto mt-8">
        <h3 className="text-xl font-bold mb-4">{t.rate_site}</h3>
        <div className="feedback-stars" id="siteRating">
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
          id="siteComment" 
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 mb-4" 
          rows="3" 
          placeholder={t.write_comment}
        />
        <Button onClick={handleSiteFeedback}>
          {t.submit_feedback}
        </Button>
        
        {/* عرض التعليقات المشتركة */}
        <div className="shared-feedback mt-6">
          <h4 className="text-lg font-bold mb-4">{t.shared_feedback}</h4>
          <div id="sharedSiteFeedback">
            {siteFeedback.length === 0 ? (
              <p className="text-slate-400 text-center">{t.no_feedback}</p>
            ) : (
              siteFeedback.slice(0, 5).map(item => (
                <div key={item.id} className="feedback-item">
                  <div className="feedback-header">
                    <div className="feedback-rating">
                      {Array(5).fill(0).map((_, i) => (
                        <i 
                          key={i} 
                          className={`fas fa-star ${i < item.rating ? 'text-amber-400' : 'text-slate-600'}`}
                        />
                      ))}
                    </div>
                    <div className="feedback-date">
                      {new Date(item.date).toLocaleDateString(
                        state.lang === 'ar' ? 'ar-SA' : 'en-US',
                        { year: 'numeric', month: 'short', day: 'numeric' }
                      )}
                    </div>
                  </div>
                  {item.comment && (
                    <div className="feedback-comment">{item.comment}</div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserInfo;


