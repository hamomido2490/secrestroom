window.zodiacData = {
  ar: {
    aries: { name: "الحمل", dates: "21 مارس - 19 أبريل", element: "ناري", icon: "♈" },
    taurus: { name: "الثور", dates: "20 أبريل - 20 مايو", element: "أرضي", icon: "♉" },
    gemini: { name: "الجوزاء", dates: "21 مايو - 20 يونيو", element: "هوائي", icon: "♊" },
    cancer: { name: "السرطان", dates: "21 يونيو - 22 يوليو", element: "مائي", icon: "♋" },
    leo: { name: "الأسد", dates: "23 يوليو - 22 أغسطس", element: "ناري", icon: "♌" },
    virgo: { name: "العذراء", dates: "23 أغسطس - 22 سبتمبر", element: "أرضي", icon: "♍" },
    libra: { name: "الميزان", dates: "23 سبتمبر - 22 أكتوبر", element: "هوائي", icon: "♎" },
    scorpio: { name: "العقرب", dates: "23 أكتوبر - 21 نوفمبر", element: "مائي", icon: "♏" },
    sagittarius: { name: "القوس", dates: "22 نوفمبر - 21 ديسمبر", element: "ناري", icon: "♐" },
    capricorn: { name: "الجدي", dates: "22 ديسمبر - 19 يناير", element: "أرضي", icon: "♑" },
    aquarius: { name: "الدلو", dates: "20 يناير - 18 فبراير", element: "هوائي", icon: "♒" },
    pisces: { name: "الحوت", dates: "19 فبراير - 20 مارس", element: "مائي", icon: "♓" }
  },
  en: {
    aries: { name: "Aries", dates: "Mar 21 - Apr 19", element: "Fire", icon: "♈" },
    taurus: { name: "Taurus", dates: "Apr 20 - May 20", element: "Earth", icon: "♉" },
    gemini: { name: "Gemini", dates: "May 21 - Jun 20", element: "Air", icon: "♊" },
    cancer: { name: "Cancer", dates: "Jun 21 - Jul 22", element: "Water", icon: "♋" },
    leo: { name: "Leo", dates: "Jul 23 - Aug 22", element: "Fire", icon: "♌" },
    virgo: { name: "Virgo", dates: "Aug 23 - Sep 22", element: "Earth", icon: "♍" },
    libra: { name: "Libra", dates: "Sep 23 - Oct 22", element: "Air", icon: "♎" },
    scorpio: { name: "Scorpio", dates: "Oct 23 - Nov 21", element: "Water", icon: "♏" },
    sagittarius: { name: "Sagittarius", dates: "Nov 22 - Dec 21", element: "Fire", icon: "♐" },
    capricorn: { name: "Capricorn", dates: "Dec 22 - Jan 19", element: "Earth", icon: "♑" },
    aquarius: { name: "Aquarius", dates: "Jan 20 - Feb 18", element: "Air", icon: "♒" },
    pisces: { name: "Pisces", dates: "Feb 19 - Mar 20", element: "Water", icon: "♓" }
  }
};

window.zodiacCompatibility = {
  ar: {
    aries: ['leo', 'sagittarius', 'gemini'],
    taurus: ['virgo', 'capricorn', 'cancer'],
    gemini: ['libra', 'aquarius', 'aries'],
    cancer: ['scorpio', 'pisces', 'taurus'],
    leo: ['aries', 'sagittarius', 'libra'],
    virgo: ['taurus', 'capricorn', 'cancer'],
    libra: ['gemini', 'aquarius', 'leo'],
    scorpio: ['cancer', 'pisces', 'virgo'],
    sagittarius: ['aries', 'leo', 'gemini'],
    capricorn: ['taurus', 'virgo', 'scorpio'],
    aquarius: ['gemini', 'libra', 'sagittarius'],
    pisces: ['cancer', 'scorpio', 'sagittarius']
  },
  en: {
    aries: ['leo', 'sagittarius', 'gemini'],
    taurus: ['virgo', 'capricorn', 'cancer'],
    gemini: ['libra', 'aquarius', 'aries'],
    cancer: ['scorpio', 'pisces', 'taurus'],
    leo: ['aries', 'sagittarius', 'libra'],
    virgo: ['taurus', 'capricorn', 'cancer'],
    libra: ['gemini', 'aquarius', 'leo'],
    scorpio: ['cancer', 'pisces', 'virgo'],
    sagittarius: ['aries', 'leo', 'gemini'],
    capricorn: ['taurus', 'virgo', 'scorpio'],
    aquarius: ['gemini', 'libra', 'sagittarius'],
    pisces: ['cancer', 'scorpio', 'sagittarius']
  }
};