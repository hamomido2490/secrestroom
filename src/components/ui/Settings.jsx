import React, { useState, useEffect } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import { AdService } from '../../services/adService';
import { simpleHash } from '../../utils/helpers';

const Settings = ({ onClose, translations, lang }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [adSettings, setAdSettings] = useState(AdService.getSettings());

  const correctHash = "2097122383"; // التجزئة الصحيحة لكلمة "Farida"

  useEffect(() => {
    // تحميل إعدادات الإعلانات
    setAdSettings(AdService.getSettings());
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!password) {
      alert('يرجى إدخال كلمة المرور');
      return;
    }
    
    const hashedPass = simpleHash(password);
    
    if (hashedPass === correctHash || password === "Farida") {
      setIsLoggedIn(true);
    } else {
      alert('كلمة المرور خاطئة، يرجى المحاولة مرة أخرى');
    }
  };

  const handleSaveSettings = () => {
    const settings = {
      top: document.getElementById('topAdToggle')?.classList.contains('checked') || false,
      side: document.getElementById('sideAdToggle')?.classList.contains('checked') || false,
      bottom: document.getElementById('bottomAdToggle')?.classList.contains('checked') || false,
      topCode: document.getElementById('topAdCode')?.value.trim() || '',
      sideCode: document.getElementById('sideAdCode')?.value.trim() || '',
      bottomCode: document.getElementById('bottomAdCode')?.value.trim() || ''
    };
    
    if (AdService.saveSettings(settings)) {
      alert('تم حفظ الإعدادات بنجاح');
      setAdSettings(settings);
    }
  };

  const updateAdPreview = (position, code) => {
    AdService.updatePreview(position, code);
  };

  if (!isLoggedIn) {
    return (
      <div className="settings-overlay flex justify-center items-center">
        <Card className="settings-panel">
          <h3 className="text-xl font-bold gradient-text mb-4">لوحة الإدارة</h3>
          
          <div id="passwordSection">
            <label className="block mb-2">كلمة المرور</label>
            <input 
              type="password" 
              id="adminPassword" 
              className="w-full px-3 py-2 bg-slate-700 rounded border border-slate-600" 
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
              id="loginBtn" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 mt-2 rounded"
              onClick={handleLogin}
            >
              دخول
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="settings-overlay flex justify-center items-center">
      <Card className="settings-panel">
        <h3 className="text-xl font-bold gradient-text mb-4">لوحة الإدارة</h3>
        
        <h4 className="font-semibold mb-3">إدارة الإعلانات</h4>
        
        {/* حالة الإعلانات الحالية */}
        <div className="mb-6 p-4 bg-slate-800 rounded-lg">
          <h5 className="font-semibold mb-3">حالة الإعلانات الحالية</h5>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-slate-700 p-3 rounded">
              <div className={`text-lg font-bold ${adSettings.top ? 'text-green-400' : 'text-red-400'}`}>
                {adSettings.top ? 'مفعل' : 'معطل'}
              </div>
              <div className="text-sm text-slate-400">الإعلان العلوي</div>
            </div>
            <div className="bg-slate-700 p-3 rounded">
              <div className={`text-lg font-bold ${adSettings.side ? 'text-green-400' : 'text-red-400'}`}>
                {adSettings.side ? 'مفعل' : 'معطل'}
              </div>
              <div className="text-sm text-slate-400">الإعلان الجانبي</div>
            </div>
            <div className="bg-slate-700 p-3 rounded">
              <div className={`text-lg font-bold ${adSettings.bottom ? 'text-green-400' : 'text-red-400'}`}>
                {adSettings.bottom ? 'مفعل' : 'معطل'}
              </div>
              <div className="text-sm text-slate-400">الإعلان السفلي</div>
            </div>
          </div>
        </div>
        
        {/* الإعلان العلوي */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">الإعلان العلوي (Top)</label>
            <div className="flex items-center">
              <div 
                id="topAdToggle"
                className={`toggle-switch ${adSettings.top ? 'checked' : ''}`}
                onClick={(e) => e.target.classList.toggle('checked')}
              ></div>
              <span className="text-sm mr-2">إظهار</span>
            </div>
          </div>
          <textarea 
            id="topAdCode" 
            className="w-full px-3 py-2 bg-slate-800 text-white border border-slate-600 rounded h-24 font-mono text-sm" 
            placeholder="<script src='...'></script>"
            defaultValue={adSettings.topCode}
            onChange={(e) => updateAdPreview('top', e.target.value)}
          ></textarea>
          <div className="mt-2">
            <label className="text-xs text-slate-400">معاينة:</label>
            <div id="topAdPreview" className="ad-preview"></div>
          </div>
        </div>
        
        {/* الإعلان الجانبي */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">الإعلان الجانبي (Side)</label>
            <div className="flex items-center">
              <div 
                id="sideAdToggle"
                className={`toggle-switch ${adSettings.side ? 'checked' : ''}`}
                onClick={(e) => e.target.classList.toggle('checked')}
              ></div>
              <span className="text-sm mr-2">إظهار</span>
            </div>
          </div>
          <textarea 
            id="sideAdCode" 
            className="w-full px-3 py-2 bg-slate-800 text-white border border-slate-600 rounded h-24 font-mono text-sm" 
            placeholder="<script src='...'></script>"
            defaultValue={adSettings.sideCode}
            onChange={(e) => updateAdPreview('side', e.target.value)}
          ></textarea>
          <div className="mt-2">
            <label className="text-xs text-slate-400">معاينة:</label>
            <div id="sideAdPreview" className="ad-preview"></div>
          </div>
        </div>
        
        {/* الإعلان السفلي */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">الإعلان السفلي (Bottom)</label>
            <div className="flex items-center">
              <div 
                id="bottomAdToggle"
                className={`toggle-switch ${adSettings.bottom ? 'checked' : ''}`}
                onClick={(e) => e.target.classList.toggle('checked')}
              ></div>
              <span className="text-sm mr-2">إظهار</span>
            </div>
          </div>
          <textarea 
            id="bottomAdCode" 
            className="w-full px-3 py-2 bg-slate-800 text-white border border-slate-600 rounded h-24 font-mono text-sm" 
            placeholder="<script src='...'></script>"
            defaultValue={adSettings.bottomCode}
            onChange={(e) => updateAdPreview('bottom', e.target.value)}
          ></textarea>
          <div className="mt-2">
            <label className="text-xs text-slate-400">معاينة:</label>
            <div id="bottomAdPreview" className="ad-preview"></div>
          </div>
        </div>
        
        <Button 
          id="saveSettings" 
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded mt-4"
          onClick={handleSaveSettings}
        >
          حفظ الإعدادات
        </Button>
        <Button 
          id="closeSettings" 
          className="w-full bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 rounded mt-2"
          onClick={onClose}
        >
          إغلاق
        </Button>
      </Card>
    </div>
  );
};

export default Settings;
