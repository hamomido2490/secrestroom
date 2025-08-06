export function analyzePersonality(answers, lang) {
  const scores = { D: 0, I: 0, S: 0, C: 0 };
  const questions = require('../data/questions')[lang];

  answers.forEach((answerIndex, index) => {
    const q = questions[index];
    if (q && q.options[answerIndex]) {
      const { trait, score } = q.options[answerIndex];
      if (scores[trait] !== undefined) scores[trait] += score;
    }
  });

  const primary = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  return { scores, primary };
}