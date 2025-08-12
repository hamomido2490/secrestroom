// Analysis for DISC (original), MBTI, and Big Five.
// Results with human touch: Natural descriptions, life examples, positive tone.

export const analyzePersonality = (answers, lang, theory = 'disc') => {
  if (theory === 'disc' ) {
    const scores = { D: 0, I: 0, S: 0, C: 0 };
    const mappings = [
      { 0: 'C', 1: 'I', 2: 'S', 3: 'D' },
      { 0: 'D', 1: 'C', 2: 'I', 3: 'S' },
      { 0: 'S', 1: 'I', 2: 'D', 3: 'C' },
      { 0: 'D', 1: 'C', 2: 'S', 3: 'I' },
      { 0: 'C', 1: 'S', 2: 'I', 3: 'D' },
      { 0: 'S', 1: 'D', 2: 'C', 3: 'I' },
      { 0: 'D', 1: 'S', 2: 'I', 3: 'C' },
      { 0: 'S', 1: 'D', 2: 'I', 3: 'C' },
      { 0: 'D', 1: 'S', 2: 'I', 3: 'C' },
      { 0: 'S', 1: 'I', 2: 'D', 3: 'C' },
      { 0: 'I', 1: 'D', 2: 'S', 3: 'C' },
      { 0: 'D', 1: 'C', 2: 'S', 3: 'I' }
    ];

    answers.forEach((answer, index) => {
      if (answer.most !== undefined && answer.least !== undefined) {
        const map = mappings[index % mappings.length];
        const mostType = map[answer.most];
        const leastType = map[answer.least];
        scores[mostType] += 1;
        scores[leastType] -= 1;
      }
    });

    // Normalize to percentages: (raw + numGroups) / (2 * numGroups) * 100
    const numGroups = answers.length;
    Object.keys(scores).forEach(key => {
      scores[key] = ((scores[key] + numGroups) / (2 * numGroups)) * 100;
    });

    const primary = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const descriptions = {
      D: "You're a natural leader who takes charge in tough situations, like organizing a family event. You thrive on challenges but remember to listen to others for balance.",
      I: "You're charismatic and love connecting with people, like making new friends at work. Your energy inspires, but try focusing on details sometimes.",
      S: "You're reliable and patient, always there for friends in need. You create stability, but don't hesitate to try new things occasionally.",
      C: "You're detail-oriented and precise, like planning a perfect trip. Your accuracy is admirable, but allow some flexibility for fun."
    };
    return { scores, primary, description: descriptions[primary] };
  } else if ( theory === 'mbti' ) {
    const dimensions = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    answers.forEach((answer) => {
      if (answer.agree !== undefined) {
        const dim = answer.agree ? answer.dimension.split('/')[0] : answer.dimension.split('/')[1];
        dimensions[dim] += 1;
      }
    });
    const type = 
      (dimensions.E > dimensions.I ? 'E' : 'I') +
      (dimensions.S > dimensions.N ? 'S' : 'N') +
      (dimensions.T > dimensions.F ? 'T' : 'F') +
      (dimensions.J > dimensions.P ? 'J' : 'P');
    const mbtiDescriptions = {
      INTJ: "You're a strategic thinker who plans ahead, like mapping out career goals. You value independence, but sharing ideas with trusted friends can bring new insights.",
      INTP: "You're curious and analytical, always questioning how things work, like fixing gadgets. Embrace your creativity, and remember social connections add joy.",
      ENTJ: "You're a born leader who motivates teams, like spearheading a project at work. Your vision drives success, but take time to appreciate others' input.",
      ENTP: "You're innovative and quick-witted, loving debates like discussing new ideas with friends. Your adaptability shines, but follow through on commitments.",
      INFJ: "You're insightful and empathetic, helping others with their dreams, like counseling a friend. Your intuition guides you, but set boundaries to avoid burnout.",
      INFP: "You're idealistic and creative, pursuing passions like writing stories. Your values inspire, but ground yourself in practical steps.",
      ENFJ: "You're charismatic and supportive, organizing community events. Your empathy builds bonds, but remember self-care.",
      ENFP: "You're enthusiastic and spontaneous, exploring new hobbies. Your positivity uplifts, but focus on finishing what you start.",
      ISTJ: "You're dependable and organized, managing daily tasks efficiently. Your loyalty is strong, but embrace change occasionally.",
      ISFJ: "You're caring and detail-oriented, remembering birthdays. Your dedication helps others, but assert your needs.",
      ESTJ: "You're efficient and structured, leading family plans. Your decisiveness gets results, but be flexible with others.",
      ESFJ: "You're warm and sociable, hosting gatherings. Your harmony-seeking nature fosters relationships, but prioritize your well-being.",
      ISTP: "You're practical and adventurous, tinkering with tools. Your independence allows exploration, but share your thoughts more.",
      ISFP: "You're artistic and gentle, creating beautiful things. Your sensitivity adds depth, but stand up for yourself.",
      ESTP: "You're bold and action-oriented, trying extreme sports. Your quick thinking excites, but plan for the long term.",
      ESFP: "You're fun-loving and outgoing, dancing at parties. Your spontaneity brings joy, but consider consequences."
    };
    return { type, description: mbtiDescriptions[type] || "Unique personality with balanced traits. Explore more!" };
  } else if ( theory === 'bigFive' ) {
    const traits = { O: [], C: [], E: [], A: [], N: [] };
    answers.forEach((answer) => {
      let score = answer.score; // 1-5 Likert
      if (answer.reverse) score = 6 - score;
      traits[answer.trait].push(score);
    });
    const averages = {};
    Object.keys(traits).forEach(key => {
      const sum = traits[key].reduce((a, b) => a + b, 0);
      averages[key] = (sum/ traits[key].length) * 20; // To percentage
    });
    const bigFiveDescriptions = {
      O: averages.O > 60 ? "You're open to new adventures, like trying exotic food – it keeps life exciting!" : averages.O < 40 ? "You prefer familiar comforts, like your favorite routine, which brings stability." : "You're balanced in openness, enjoying both new ideas and trusted traditions.",
      C: averages.C > 60 ? "You're organized and reliable, always finishing tasks on time – friends count on you!" : averages.C < 40 ? "You're flexible and spontaneous, adapting to surprises with ease." : "You're moderately conscientious, blending planning with adaptability.",
      E: averages.E > 60 ? "You thrive in social settings, energizing from conversations – you're the life of the party!" : averages.E < 40 ? "You enjoy quiet moments, recharging alone with a good book." : "You're ambiverted, comfortable in both crowds and solitude.",
      A: averages.A > 60 ? "You're kind and empathetic, always helping others – it builds strong bonds." : averages.A < 40 ? "You're straightforward and focused on goals, achieving what you set out to do." : "You're balanced in agreeableness, cooperative yet assertive when needed.",
      N: averages.N > 60 ? "You feel emotions deeply, which makes you compassionate, but self-care helps balance." : averages.N < 40 ? "You're calm under pressure, handling stress like a pro." : "You're emotionally stable with occasional worries, maintaining good balance."
    };
    let description = Object.keys(bigFiveDescriptions).map(key => bigFiveDescriptions[key]).join(' ');
    return { averages, description };
  }
};

export const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
};

export const calculateZodiac = (dob) => {
  const date = new Date(dob);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'sagittarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'aquarius';
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'pisces';
  return 'unknown';
};