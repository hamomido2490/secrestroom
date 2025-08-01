import { translations, getLang } from './lang.js';

export function getQuestions(lang = getLang()) {
  const t = translations[lang];
  return [
    {
      id: 1,
      text: t.q1,
      options: [
        { text: t.o1_1, trait: "E" },
        { text: t.o1_2, trait: "C" },
        { text: t.o1_3, trait: "Inferiority" },
        { text: t.o1_4, trait: "N" }
      ]
    },
    {
      id: 2,
      text: t.q2,
      options: [
        { text: t.o2_1, trait: "E,I" },
        { text: t.o2_2, trait: "I,S" },
        { text: t.o2_3, trait: "T" },
        { text: t.o2_4, trait: "F" }
      ]
    },
    // ... أكمل باقي الأسئلة بنفس النمط مع الترجمة (من lang.js)
    // ملاحظة: يجب استكمال جميع الأسئلة والاختيارات بنفس النمط (q3, o3_1, o3_2 ... إلى q20, o20_4)
  ];
}
