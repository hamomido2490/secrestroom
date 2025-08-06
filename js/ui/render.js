async function renderPage(page) {
  const app = document.getElementById('app');
  state.page = page;
  saveState();

  try {
    const response = await fetch(`partials/${page}.html`);
    let html = await response.text();
    app.innerHTML = html;
    setupEventListeners();
  } catch (err) {
    console.error('Error rendering page:', err);
    if (app) {
      app.innerHTML = '<div class="glass-card"><h2>حدث خطأ في تحميل الصفحة</h2><p>يرجى تحديث الصفحة والمحاولة مرة أخرى</p></div>';
    }
  }
}

function renderLoading() {
  const t = translations[state.lang];
  return `
    <div class="glass-card text-center">
      <div class="loading-spinner mx-auto mb-4"></div>
      <p class="text-gray-300">${t.loading_analysis}</p>
    </div>`;
}