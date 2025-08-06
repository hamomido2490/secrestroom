import { partnerInfo, personalityTypes } from '../data/partnerInfo';

/**
 * الحصول على معلومات الشريك المثالي
 * @param {string} personalityType - D, I, S, C
 * @param {string} lang - ar, en
 * @returns {Object} - نوع الشريك، صفاته، لونه
 */
export function getPartnerInfo(personalityType, lang) {
  const data = partnerInfo[lang];
  return data[personalityType] || data['S'];
}

/**
 * الحصول على الشخصيات المشابهة
 * @param {string} primary - الشخصية الأساسية
 * @param {string} lang - ar, en
 * @returns {Array<string>} - قائمة بالشخصيات المشابهة
 */
export function getSimilarPersonalities(primary, lang) {
  const map = {
    D: ["I", "C"],
    I: ["D", "S"],
    S: ["I", "C"],
    C: ["S", "D"]
  };
  const types = personalityTypes[lang];
  return map[primary].map(key => types[key]);
}