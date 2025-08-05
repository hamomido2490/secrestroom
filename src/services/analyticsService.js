export class AnalyticsService {
  static updateCounters() {
    try {
      // زيادة عدد الزوار (مرة واحدة لكل جلسة)
      if (!sessionStorage.getItem('visitorCounted')) {
        let visitors = parseInt(localStorage.getItem('shared_visitors') || '0');
        visitors++;
        localStorage.setItem('shared_visitors', visitors.toString());
        sessionStorage.setItem('visitorCounted', 'true');
      }
      
      return {
        visitors: parseInt(localStorage.getItem('shared_visitors') || '0'),
        analyses: parseInt(localStorage.getItem('shared_analyses') || '0')
      };
    } catch (error) {
      console.error('Error updating counters:', error);
      return { visitors: 0, analyses: 0 };
    }
  }

  static getCounters() {
    try {
      return {
        visitors: parseInt(localStorage.getItem('shared_visitors') || '0'),
        analyses: parseInt(localStorage.getItem('shared_analyses') || '0')
      };
    } catch (error) {
      console.error('Error getting counters:', error);
      return { visitors: 0, analyses: 0 };
    }
  }

  static incrementAnalyses() {
    try {
      let analyses = parseInt(localStorage.getItem('shared_analyses') || '0');
      analyses++;
      localStorage.setItem('shared_analyses', analyses.toString());
      return true;
    } catch (error) {
      console.error('Error incrementing analyses:', error);
      return false;
    }
  }
}
