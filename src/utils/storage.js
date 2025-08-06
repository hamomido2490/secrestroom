export function saveResult(result) {
  try {
    const results = getSavedResults();
    results.unshift(result);
    if (results.length > 50) results.pop();
    localStorage.setItem('personalityResults', JSON.stringify(results));
  } catch (error) {
    console.error('Error saving result:', error);
  }
}

export function getSavedResults() {
  try {
    const saved = localStorage.getItem('personalityResults');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error getting saved results:', error);
    return [];
  }
}

export function incrementCounter(key) {
  try {
    const count = (parseInt(localStorage.getItem(key)) || 0) + 1;
    localStorage.setItem(key, count.toString());
    return count;
  } catch (error) {
    console.error('Error incrementing counter:', error);
    return 0;
  }
}

export function getCounter(key) {
  try {
    return parseInt(localStorage.getItem(key) || '0');
  } catch (error) {
    console.error('Error getting counter:', error);
    return 0;
  }
}