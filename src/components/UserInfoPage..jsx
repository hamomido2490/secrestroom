import React from 'react';
import { useAppState } from '../context/AppState';
import { useNavigate } from '../hooks/useNavigate';

export default function UserInfoPage() {
  const { dispatch, state } = useAppState();
  const navigate = useNavigate();
  const t = require('../data/translations')[state.lang];

  const handleSubmit = (e) => {
    e.preventDefault();
    const gender = e.target.gender.value;
    const dob = e.target.dob.value;

    if (!gender || !dob) return navigate.showToast(t.alert_missing_fields);
    if (new Date(dob) > new Date()) return navigate.showToast(t.alert_invalid_dob);

    const zodiac = require('../utils/zodiac').calculateZodiac(dob);
    dispatch({ type: 'SET_USER_DATA', payload: { gender, dob, zodiac } });
    navigate.to('intro');
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-3xl font-bold gradient-text mb-6">{t.welcome_title}</h2>
      <p className="text-gray-300 mb-6">{t.user_info_desc}</p>
      <div className="glass-card max-w-md mx-auto p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-right">
            <label className="block mb-2">{t.gender_label}</label>
            <select name="gender" className="w-full p-3 rounded bg-gray-800">
              <option value="male">{t.male}</option>
              <option value="female">{t.female}</option>
              <option value="other">{t.other}</option>
            </select>
          </div>
          <div className="mb-6 text-right">
            <label className="block mb-2">{t.dob_label}</label>
            <input type="date" name="dob" className="w-full p-3 rounded bg-gray-800" required />
          </div>
          <button type="submit" className="btn-primary w-full">{t.submit_user_info}</button>
        </form>
      </div>
    </div>
  );
}