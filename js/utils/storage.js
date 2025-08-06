function saveResult(result) {
  const results = getSavedResults();
  results.unshift(result);
  if (results.length > 50) results.pop();
  localStorage.setItem('personalityResults', JSON.stringify(results));
}

function getSavedResults() {
  try {
    const saved = localStorage.getItem('personalityResults');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error getting saved results:', error);
    return [];
  }
}

function incrementCounter(key) {
  try {
    const count = parseInt(localStorage.getItem(key) || '0') + 1;
    localStorage.setItem(key, count.toString());
    return count;
  } catch (error) {
    console.error('Error incrementing counter:', error);
    return 0;
  }
}

function getCounter(key) {
  try {
    return parseInt(localStorage.getItem(key) || '0');
  } catch (error) {
    console.error('Error getting counter:', error);
    return 0;
  }
}