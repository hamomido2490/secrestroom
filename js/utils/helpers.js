function simpleHash(str) {
  try {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString();
  } catch (error) {
    console.error('Error hashing password:', error);
    return '0';
  }
}

function showToast(message) {
  try {
    const toast = document.getElementById('toast');
    toast.innerHTML = `<div class="toast">${message}</div>`;
    setTimeout(() => toast.innerHTML = '', 3000);
  } catch (error) {
    console.error('Error showing toast:', error);
  }
}