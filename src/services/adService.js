import { DEFAULT_AD_SETTINGS } from '../utils/constants';

export class AdService {
  static getSettings() {
    try {
      const saved = localStorage.getItem('adSettings');
      return saved ? JSON.parse(saved) : DEFAULT_AD_SETTINGS;
    } catch (error) {
      console.error('Error getting ad settings:', error);
      return DEFAULT_AD_SETTINGS;
    }
  }

  static saveSettings(settings) {
    try {
      localStorage.setItem('adSettings', JSON.stringify(settings));
      return true;
    } catch (error) {
      console.error('Error saving ad settings:', error);
      return false;
    }
  }

  static renderAds() {
    try {
      const settings = this.getSettings();
      const adPositions = ['top', 'side', 'bottom'];
      
      const ads = {};
      adPositions.forEach(position => {
        if (settings[position] && settings[`${position}Code`]) {
          const adId = `ad-${position}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
          ads[position] = `
            <div class="ad-container" id="${adId}">
              ${settings[`${position}Code`]}
            </div>`;
        } else {
          ads[position] = '';
        }
      });
      
      return ads;
    } catch (error) {
      console.error('Error rendering ads:', error);
      return { top: '', side: '', bottom: '' };
    }
  }

  static updatePreview(position, code) {
    try {
      const preview = document.getElementById(`${position}AdPreview`);
      if (preview) {
        const temp = document.createElement('div');
        temp.textContent = code;
        preview.innerHTML = temp.innerHTML;
      }
    } catch (error) {
      console.error('Error updating ad preview:', error);
    }
  }
}

