import { analyzePersonality } from '../results';
import testQuestions from '../questions';

describe('Personality Analysis', () => {
  const mockAnswers = [
    { questionId: 1, answer: 'a' },
    { questionId: 2, answer: 'b' }
  ];
  
  const mockDemographics = {
    age: 25,
    gender: 'male'
  };

  it('should generate valid MBTI type', () => {
    const results = analyzePersonality(mockAnswers, mockDemographics);
    expect(results.theories.mbti.type).toMatch(/^[IE][NS][TF][JP]$/);
  });

  it('should calculate Big Five scores', () => {
    const results = analyzePersonality(mockAnswers, mockDemographics);
    expect(results.theories.bigfive.openness.score).toBeGreaterThanOrEqual(0);
    expect(results.theories.bigfive.openness.score).toBeLessThanOrEqual(100);
  });
});
