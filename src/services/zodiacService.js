export class ZodiacService {
  static calculateZodiac(birthDate) {
    try {
      const date = new Date(birthDate);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      
      if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return 'aries';
      if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return 'taurus';
      if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return 'gemini';
      if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return 'cancer';
      if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return 'leo';
      if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return 'virgo';
      if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return 'libra';
      if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return 'scorpio';
      if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return 'sagittarius';
      if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return 'capricorn';
      if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return 'aquarius';
      if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return 'pisces';
      
      return 'unknown';
    } catch (error) {
      console.error('Error calculating zodiac:', error);
      return 'unknown';
    }
  }

  static getPartnerInfo(personalityType, lang) {
    const partnerData = {
      ar: {
        D: { 
          type: "الشريك الداعم والمستقل", 
          traits: "صبور، متفهم، يحترم طموحاتك، يدعم قراراتك، يقدر استقلالك",
          color: "#10b981"
        },
        I: { 
          type: "الشريك المستمع والمشجع", 
          traits: "صبور، داعم، يقدر طاقتك، يستمع باهتمام، يشاركك حماسك",
          color: "#3b82f6"
        },
        S: { 
          type: "الشريك الموثوق والمستقر", 
          traits: "مخلص، داعم، يقدر الولاء، يوفر الأمان، متعاطف",
          color: "#f59e0b"
        },
        C: { 
          type: "الشريك الذكي والمنظم", 
          traits: "منطقي، دقيق، يحترم ذكاءك، يقدر التخطيط، عملي",
          color: "#ec4899"
        }
      },
      en: {
        D: { 
          type: "Supportive and Independent Partner", 
          traits: "Patient, understanding, respects your ambitions, supports your decisions, values your independence",
          color: "#10b981"
        },
        I: { 
          type: "Listening and Encouraging Partner", 
          traits: "Patient, supportive, values your energy, listens attentively, shares your enthusiasm",
          color: "#3b82f6"
        },
        S: { 
          type: "Reliable and Stable Partner", 
          traits: "Loyal, supportive, values loyalty, provides security, empathetic",
          color: "#f59e0b"
        },
        C: { 
          type: "Intelligent and Organized Partner", 
          traits: "Logical, precise, respects your intelligence, values planning, practical",
          color: "#ec4899"
        }
      }
    };
    
    return partnerData[lang] && partnerData[lang][personalityType] || partnerData[lang].D;
  }

  static getSimilarPersonalities(personalityType, lang) {
    const personalities = {
      ar: {
        D: [
          { name: "ستيف جوبز", description: "قائد ورائد أعمال", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Steve_Jobs_WWDC_2010.jpg/220px-Steve_Jobs_WWDC_2010.jpg" },
          { name: "أوباما وينفري", description: "إعلامية ورائدة أعمال", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Oprah_Winfrey_2014.jpg/220px-Oprah_Winfrey_2014.jpg" },
          { name: "نيلسون مانديلا", description: "زعيم سياسي", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/220px-Nelson_Mandela_1994.jpg" }
        ],
        I: [
          { name: "ويل سميث", description: "ممثل ومنتج", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Will_Smith_2019_by_Glenn_Francis.jpg/220px-Will_Smith_2019_by_Glenn_Francis.jpg" },
          { name: "إلين ديجينيريس", description: "مقدمة برامج", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Ellen_DeGeneres_2011.jpg/220px-Ellen_DeGeneres_2011.jpg" },
          { name: "جيم كاري", description: "ممثل كوميدي", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Jim_Carry_1996.jpg/220px-Jim_Carry_1996.jpg" }
        ],
        S: [
          { name: "مادونا", description: "مغنية ورائدة أعمال", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Madonna_at_the_Met_Gala_2018.jpg/220px-Madonna_at_the_Met_Gala_2018.jpg" },
          { name: "بيل غيتس", description: "رائد أعمال ومحسن", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bill_Gates_2017.jpg/220px-Bill_Gates_2017.jpg" },
          { name: "أنجيلينا جولي", description: "ممثلة وناشطة", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Angelina_Jolie_2_June_2014.jpg/220px-Angelina_Jolie_2_June_2014.jpg" }
        ],
        C: [
          { name: "مارك زوكربيرغ", description: "مؤسس فيسبوك", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29.jpg" },
          { name: "إيلون ماسك", description: "رائد أعمال", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg" },
          { name: "بيل غيتس", description: "مؤسس مايكروسوفت", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bill_Gates_2017.jpg/220px-Bill_Gates_2017.jpg" }
        ]
      },
      en: {
        D: [
          { name: "Steve Jobs", description: "Leader and entrepreneur", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Steve_Jobs_WWDC_2010.jpg/220px-Steve_Jobs_WWDC_2010.jpg" },
          { name: "Oprah Winfrey", description: "Media personality and entrepreneur", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Oprah_Winfrey_2014.jpg/220px-Oprah_Winfrey_2014.jpg" },
          { name: "Nelson Mandela", description: "Political leader", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/220px-Nelson_Mandela_1994.jpg" }
        ],
        I: [
          { name: "Will Smith", description: "Actor and producer", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Will_Smith_2019_by_Glenn_Francis.jpg/220px-Will_Smith_2019_by_Glenn_Francis.jpg" },
          { name: "Ellen DeGeneres", description: "TV host", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Ellen_DeGeneres_2011.jpg/220px-Ellen_DeGeneres_2011.jpg" },
          { name: "Jim Carrey", description: "Comedian actor", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Jim_Carry_1996.jpg/220px-Jim_Carry_1996.jpg" }
        ],
        S: [
          { name: "Madonna", description: "Singer and entrepreneur", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Madonna_at_the_Met_Gala_2018.jpg/220px-Madonna_at_the_Met_Gala_2018.jpg" },
          { name: "Bill Gates", description: "Entrepreneur and philanthropist", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bill_Gates_2017.jpg/220px-Bill_Gates_2017.jpg" },
          { name: "Angelina Jolie", description: "Actress and activist", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Angelina_Jolie_2_June_2014.jpg/220px-Angelina_Jolie_2_June_2014.jpg" }
        ],
        C: [
          { name: "Mark Zuckerberg", description: "Facebook founder", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29.jpg" },
          { name: "Elon Musk", description: "Entrepreneur", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg" },
          { name: "Bill Gates", description: "Microsoft founder", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bill_Gates_2017.jpg/220px-Bill_Gates_2017.jpg" }
        ]
      }
    };
    
    return personalities[lang] && personalities[lang][personalityType] || personalities[lang].D;
  }
}
