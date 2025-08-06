import React, { useEffect, useRef } from 'react';
import { useAppState } from '../context/AppState';
import { useNavigate } from '../hooks/useNavigate';
import ChartWrapper from '../lib/ChartWrapper';

export default function ResultPage() {
  const { state, dispatch } = useAppState();
  const navigate = useNavigate();
  const t = require('../data/translations')[state.lang];
  const resultRef = useRef(null);

  const handleRestart = () => {
    dispatch({ type: 'RESET' });
    navigate.to('userInfo');
  };

  const handleCopy = () => {
    const text = resultRef.current?.innerText || '';
    navigator.clipboard.writeText(text).then(() => {
      navigate.showToast(t.alert_copied);
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'تحليل شخصيتي',
        text: `نتائج تحليل شخصيتي: ${t.personalityTypes[state.resultData.primary]}`
      }).then(() => navigate.showToast(t.alert_shared));
    } else {
      handleCopy();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const feedback = require('../utils/feedback');
    feedback.renderSharedFeedback('sharedAnalysisFeedback', 'analysis');
  }, []);

  if (!state.resultData) return <div className="text-center py-10">{t.loading_analysis}</div>;

  const { scores, primary } = state.resultData;
  const age = state.userData.dob ? require('../utils/zodiac').calculateAge(state.userData.dob) : 0;
  const userZodiac = state.userData.zodiac;
  const zodiacInfo = require('../data/zodiacData')[state.lang][userZodiac];
  const compatibleZodiacs = require('../data/zodiacData').zodiacCompatibility[state.lang][userZodiac] || [];

  const personalityTypes = require('../data/translations')[state.lang].personalityTypes;
  const personalityAnalysis = require('../data/translations')[state.lang].personalityAnalysis[primary];
  const partnerInfo = require('../utils/partner').getPartnerInfo(primary, state.lang);
  const similarPersonalities = require('../utils/partner').getSimilarPersonalities(primary, state.lang);
  const personalityColors = { D: '#ef4444', I: '#f59e0b', S: '#10b981', C: '#3b82f6' };

  return (
    <div className="container mx-auto px-4 py-8" ref={resultRef}>
      <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 gradient-text">{t.personality_section}</h2>
        <p className="text-gray-300 mb-6">{t.analysis_intro}</p>

        <div className="chart-container">
          <ChartWrapper data={scores} />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-right">
            <p><strong>{t.personality_type}:</strong> <span style={{ color: personalityColors[primary] }}>{personalityTypes[primary]}</span></p>
            <p><strong>{t.age_label}:</strong> <span>{age}</span></p>
            <p><strong>{t.zodiac_sign}:</strong> <span>{zodiacInfo?.name} {zodiacInfo?.icon}</span></p>
          </div>

          <div className="analysis-section section-{primary.toLowerCase()}">
            <h3 className="font-bold mb-2">{t.overview}</h3>
            <p className="text-sm">{personalityAnalysis.coreTraits}</p>
          </div>

          <div className="text-right">
            <p><strong>{t.personality_color}:</strong></p>
            <div className="w-10 h-10 rounded-full mt-2" style={{ backgroundColor: personalityColors[primary] }}></div>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div className="analysis-section section-d">
            <h3 className="font-bold mb-3">{t.core_traits}</h3>
            <p>{personalityAnalysis.coreTraits}</p>
          </div>

          <div className="analysis-section section-i">
            <h3 className="font-bold mb-3">{t.psychological_profile}</h3>
            <p>{personalityAnalysis.psychologicalProfile}</p>
          </div>

          <div className="analysis-section section-s">
            <h3 className="font-bold mb-3">{t.motivation_factors}</h3>
            <p>{personalityAnalysis.motivationFactors}</p>
          </div>

          <div className="analysis-section section-c">
            <h3 className="font-bold mb-3">{t.ideal_environment}</h3>
            <p>{personalityAnalysis.idealEnvironment}</p>
          </div>

          <div className="analysis-section section-d">
            <h3 className="font-bold mb-3">{t.learning_style}</h3>
            <p>{personalityAnalysis.learningStyle}</p>
          </div>

          <div className="analysis-section section-i">
            <h3 className="font-bold mb-3">{t.values_principles}</h3>
            <p>{personalityAnalysis.valuesPrinciples}</p>
          </div>

          <div className="analysis-section section-s">
            <h3 className="font-bold mb-3">{t.communication_patterns}</h3>
            <p>{personalityAnalysis.communicationPatterns}</p>
          </div>

          <div className="analysis-section section-c">
            <h3 className="font-bold mb-3">{t.conflict_resolution}</h3>
            <p>{personalityAnalysis.conflictResolution}</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700">
          <h2 className="text-2xl font-bold mb-6 gradient-text">{t.partner_section}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="text-right">
              <h3 className="text-xl font-bold mb-2" style={{ color: partnerInfo.color }}>{t.ideal_partner}</h3>
              <p><strong>{t.partner_type}:</strong> {partnerInfo.type}</p>
              <p><strong>{t.partner_traits}:</strong> {partnerInfo.traits}</p>
            </div>
            <div className="text-right">
              <h3 className="text-xl font-bold mb-2">{t.similar_personalities}</h3>
              <ul className="space-y-1">
                {similarPersonalities.map((sp, i) => (
                  <li key={i} className="text-lg">{sp}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700">
          <h3 className="text-xl font-bold mb-4">{t.compatibility_factors}</h3>
          <p className="mb-2">{t.long_term_potential}: {personalityAnalysis.longTermPotential}</p>
          <p><strong>{t.compatible_zodiacs}:</strong></p>
          <div className="flex flex-wrap gap-2 mt-2">
            {compatibleZodiacs.map(z => {
              const zInfo = require('../data/zodiacData')[state.lang][z];
              return (
                <span key={z} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {zInfo.icon} {zInfo.name}
                </span>
              );
            })}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 feedback-section">
          <h3 className="text-xl font-bold mb-4">{t.rate_analysis}</h3>
          <div id="analysisFeedbackStars" className="feedback-stars">
            {[1, 2, 3, 4, 5].map(star => (
              <i key={star} className="far fa-star" data-rating={star}></i>
            ))}
          </div>
          <textarea
            id="analysisComment"
            className="w-full p-3 bg-slate-700 rounded border border-slate-600 mt-2"
            placeholder={t.write_comment}
            rows="2"
          ></textarea>
          <button
            id="submitAnalysisFeedback"
            className="btn-primary mt-3"
            onClick={() => {
              const rating = parseInt(document.querySelector('#analysisFeedbackStars .fa-star')?.dataset.rating || 0);
              const comment = document.getElementById('analysisComment')?.value.trim();
              if (rating > 0) {
                require('../utils/feedback').saveFeedback('analysis', rating, comment);
                navigate.showToast(t.submit_feedback);
                document.getElementById('analysisComment').value = '';
                document.querySelectorAll('#analysisFeedbackStars i').forEach(el => el.className = 'far fa-star');
              }
            }}
          >
            {t.submit_feedback}
          </button>
        </div>

        <div className="mt-6 shared-feedback">
          <h4 className="font-bold mb-3">{t.shared_feedback}</h4>
          <div id="sharedAnalysisFeedback"></div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 justify-end">
          <button onClick={handleRestart} className="btn-secondary">{t.restart_btn}</button>
          <button onClick={handleCopy} className="btn-primary">{t.copy_btn}</button>
          <button onClick={handleShare} className="btn-secondary">{t.share_btn}</button>
          <button onClick={handlePrint} className="btn-secondary">{t.print_btn}</button>
          <button onClick={() => navigate.to('history')} className="btn-secondary">{t.history_btn}</button>
        </div>
      </div>
    </div>
  );
}