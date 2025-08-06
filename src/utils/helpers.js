export function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString();
}

export function showToast(message) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.innerHTML = `<div class="toast">${message}</div>`;
    setTimeout(() => toast.innerHTML = '', 3000);
  }
}