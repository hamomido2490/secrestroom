const defaultAdSettings = {
  top: false,
  side: false,
  bottom: false,
  topCode: '',
  sideCode: '',
  bottomCode: ''
};

function getAdSettings() {
  try {
    const saved = localStorage.getItem('adSettings');
    return saved ? JSON.parse(saved) : { ...defaultAdSettings };
  } catch (error) {
    console.error('Error getting ad settings:', error);
    return { ...defaultAdSettings };
  }
}

function saveAdSettings(settings) {
  try {
    localStorage.setItem('adSettings', JSON.stringify(settings));
    updateAdStatus();
  } catch (error) {
    console.error('Error saving ad settings:', error);
  }
}

function renderAds() {
  try {
    const settings = getAdSettings();
    const adPositions = ['top', 'side', 'bottom'];
    const ads = {};

    adPositions.forEach(position => {
      if (settings[position] && settings[`${position}Code`]) {
        const adId = `ad-${position}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        ads[position] = `
          <div id="${adId}" class="ad-container bg-slate-800 p-3 rounded mb-4">
            <div class="text-xs text-gray-400 mb-1">إعلان ${position}</div>
            <div class="ad-content">${settings[`${position}Code`]}</div>
          </div>`;
      }
    });

    return ads;
  } catch (error) {
    console.error('Error rendering ads:', error);
    return {};
  }
}