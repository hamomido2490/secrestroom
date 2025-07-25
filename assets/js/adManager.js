class AdManager {
    constructor() {
        this.adFrequency = 'normal';
        this.adTypes = {
            text: true,
            image: true,
            video: false
        };
        this.sensitivity = 'medium';
    }

    init() {
        this.loadSettings();
        this.renderAds();
    }

    loadSettings() {
        const savedSettings = localStorage.getItem('adSettings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            this.adFrequency = settings.frequency;
            this.adTypes = settings.types;
            this.sensitivity = settings.sensitivity;
        }
    }

    saveSettings() {
        const settings = {
            frequency: this.adFrequency,
            types: this.adTypes,
            sensitivity: this.sensitivity
        };
        localStorage.setItem('adSettings', JSON.stringify(settings));
    }

    renderAds() {
        // عرض الإعلانات حسب الإعدادات
        const adContainer = document.getElementById('adBannerTop');
        
        if (this.adFrequency === 'none') {
            adContainer.style.display = 'none';
            return;
        }

        let adHTML = '';
        if (this.adTypes.text) {
            adHTML += <div class="text-ad">...</div>;
        }
        if (this.adTypes.image) {
            adHTML += <img src="assets/ads/image-ad.jpg" alt="Ad">;
        }

        adContainer.innerHTML = adHTML;
        this.setAdFrequency();
    }

    setAdFrequency() {
        let delay;
        switch (this.adFrequency) {
            case 'minimal': delay = 30000; break;
            case 'normal': delay = 15000; break;
            case 'frequent': delay = 7000; break;
            default: delay = 15000;
        }
        
        setInterval(() => this.rotateAd(), delay);
    }

    rotateAd() {
        // تغيير الإعلانات بشكل دوري
    }
}

const adManager = new AdManager();
export default adManager;
