export const zodiacData = {
  ar: {
    aries: { name: "الحمل", icon: "♈", dates: "21 مارس - 19 أبريل", element: "نار", traits: "شجاع، طموح، مغامر" },
    taurus: { name: "الثور", icon: "♉", dates: "20 أبريل - 20 مايو", element: "أرض", traits: "مثابر، موثوق، عملي" },
    gemini: { name: "الجوزاء", icon: "♊", dates: "21 مايو - 20 يونيو", element: "هواء", traits: "ذكي، متكيف، اجتماعي" },
    cancer: { name: "السرطان", icon: "♋", dates: "21 يونيو - 22 يوليو", element: "ماء", traits: "حنون، وقائي، بديهي" },
    leo: { name: "الأسد", icon: "♌", dates: "23 يوليو - 22 أغسطس", element: "نار", traits: "واثق، كريم، قيادي" },
    virgo: { name: "العذراء", icon: "♍", dates: "23 أغسطس - 22 سبتمبر", element: "أرض", traits: "دقيق، عملي، مساعد" },
    libra: { name: "الميزان", icon: "♎", dates: "23 سبتمبر - 22 أكتوبر", element: "هواء", traits: "متناغم، عادل، اجتماعي" },
    scorpio: { name: "العقرب", icon: "♏", dates: "23 أكتوبر - 21 نوفمبر", element: "ماء", traits: "شغوف، كثيف، محول" },
    sagittarius: { name: "القوس", icon: "♐", dates: "22 نوفمبر - 21 ديسمبر", element: "نار", traits: "متفائل، حر، فلسفي" },
    capricorn: { name: "الجدي", icon: "♑", dates: "22 ديسمبر - 19 يناير", element: "أرض", traits: "مسؤول، منضبط، طموح" },
    aquarius: { name: "الدلو", icon: "♒", dates: "20 يناير - 18 فبراير", element: "هواء", traits: "مبتكر، مستقل، إنساني" },
    pisces: { name: "الحوت", icon: "♓", dates: "19 فبراير - 20 مارس", element: "ماء", traits: "حساس، بديهي، فني" }
  },
  en: {
    aries: { name: "Aries", icon: "♈", dates: "Mar 21 - Apr 19", element: "Fire", traits: "Brave, ambitious, adventurous" },
    taurus: { name: "Taurus", icon: "♉", dates: "Apr 20 - May 20", element: "Earth", traits: "Persistent, reliable, practical" },
    gemini: { name: "Gemini", icon: "♊", dates: "May 21 - Jun 20", element: "Air", traits: "Intelligent, adaptable, social" },
    cancer: { name: "Cancer", icon: "♋", dates: "Jun 21 - Jul 22", element: "Water", traits: "Caring, protective, intuitive" },
    leo: { name: "Leo", icon: "♌", dates: "Jul 23 - Aug 22", element: "Fire", traits: "Confident, generous, leader" },
    virgo: { name: "Virgo", icon: "♍", dates: "Aug 23 - Sep 22", element: "Earth", traits: "Precise, practical, helpful" },
    libra: { name: "Libra", icon: "♎", dates: "Sep 23 - Oct 22", element: "Air", traits: "Harmonious, fair, social" },
    scorpio: { name: "Scorpio", icon: "♏", dates: "Oct 23 - Nov 21", element: "Water", traits: "Passionate, intense, transformative" },
    sagittarius: { name: "Sagittarius", icon: "♐", dates: "Nov 22 - Dec 21", element: "Fire", traits: "Optimistic, free, philosophical" },
    capricorn: { name: "Capricorn", icon: "♑", dates: "Dec 22 - Jan 19", element: "Earth", traits: "Responsible, disciplined, ambitious" },
    aquarius: { name: "Aquarius", icon: "♒", dates: "Jan 20 - Feb 18", element: "Air", traits: "Innovative, independent, humanitarian" },
    pisces: { name: "Pisces", icon: "♓", dates: "Feb 19 - Mar 20", element: "Water", traits: "Sensitive, intuitive, artistic" }
  }
};

export const zodiacCompatibility = {
  ar: {
    aries: ["leo", "sagittarius", "gemini", "aquarius"],
    taurus: ["virgo", "capricorn", "cancer", "pisces"],
    gemini: ["libra", "aquarius", "aries", "leo"],
    cancer: ["scorpio", "pisces", "taurus", "virgo"],
    leo: ["aries", "sagittarius", "gemini", "libra"],
    virgo: ["taurus", "capricorn", "cancer", "scorpio"],
    libra: ["gemini", "aquarius", "leo", "sagittarius"],
    scorpio: ["cancer", "pisces", "virgo", "capricorn"],
    sagittarius: ["aries", "leo", "libra", "aquarius"],
    capricorn: ["taurus", "virgo", "scorpio", "pisces"],
    aquarius: ["gemini", "libra", "aries", "sagittarius"],
    pisces: ["cancer", "scorpio", "taurus", "capricorn"]
  },
  en: {
    aries: ["leo", "sagittarius", "gemini", "aquarius"],
    taurus: ["virgo", "capricorn", "cancer", "pisces"],
    gemini: ["libra", "aquarius", "aries", "leo"],
    cancer: ["scorpio", "pisces", "taurus", "virgo"],
    leo: ["aries", "sagittarius", "gemini", "libra"],
    virgo: ["taurus", "capricorn", "cancer", "scorpio"],
    libra: ["gemini", "aquarius", "leo", "sagittarius"],
    scorpio: ["cancer", "pisces", "virgo", "capricorn"],
    sagittarius: ["aries", "leo", "libra", "aquarius"],
    capricorn: ["taurus", "virgo", "scorpio", "pisces"],
    aquarius: ["gemini", "libra", "aries", "sagittarius"],
    pisces: ["cancer", "scorpio", "taurus", "capricorn"]
  }
};
