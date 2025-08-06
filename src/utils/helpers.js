/**
 * تجزئة بسيطة لسلسلة نصية (لكلمة المرور)
 * @param {string} str
 * @returns {string} - ناتج التجزئة
 */
export function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // تحويل إلى عدد صحيح 32 بت
  }
  return Math.abs(hash).toString();
}

/**
 * عرض رسالة إشعار (Toast)
 * @param {string} message - النص المراد عرضه
 */
export function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.innerHTML = `<div class="toast">${message}</div>`;
  setTimeout(() => {
    if (toast.innerHTML.includes(message)) {
      toast.innerHTML = '';
    }
  }, 3000);
}