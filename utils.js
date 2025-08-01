// utils.js - أدوات مفيدة للتطبيق

/**
 * حساب العمر بدقة من تاريخ الميلاد
 * @param {string} birthDateString - تاريخ الميلاد بصيغة ISO (مثل: "1995-04-15")
 * @returns {number|null} العمر كرقم، أو null إذا كان التاريخ غير صالح
 */
export function calculateAge(birthDateString) {
  if (!birthDateString) return null;

  const birthDate = new Date(birthDateString);
  if (isNaN(birthDate.getTime())) return null;

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // تقليل العمر إذا لم يحن عيد الميلاد بعد
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  // التأكد من أن العمر موجب
  return age >= 0 ? age : 0;
}

/**
 * عرض تنبيه للمستخدم
 * @param {string} message - الرسالة المراد عرضها
 */
export function showAlert(message) {
  alert(message);
}

/**
 * نسخ النص إلى الحافظة
 * @param {string} text - النص المراد نسخه
 * @returns {boolean} true إذا نُسخ بنجاح، false إن فشل
 */
export function copyToClipboard(text) {
  // الطريقة الحديثة (مفضّلة)
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(err => {
      console.warn('فشل في استخدام Clipboard API:', err);
    });
    return true;
  }

  // الطريقة الاحتياطية (للمتصفحات القديمة أو HTTP)
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.pointerEvents = 'none';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return true;
  } catch (err) {
    console.warn('فشل في استخدام execCommand:', err);
    return false;
  }
}
