// toast.js - تنبيهات أنيقة
export function showToast(message, duration = 3000) {
  const oldToast = document.getElementById('custom-toast');
  if (oldToast) oldToast.remove();

  const toast = document.createElement('div');
  toast.id = 'custom-toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
    background: linear-gradient(90deg, #fbbf24, #ef4444); color: #17233a;
    padding: 14px 24px; border-radius: 12px; font-size: 1.1em; font-weight: 600;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2); z-index: 2000; opacity: 0;
    animation: toast-slide-in 0.4s ease forwards; pointer-events: none;
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

/* يجب إضافة الـ animation في style.css */
