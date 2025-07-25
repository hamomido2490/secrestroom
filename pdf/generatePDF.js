import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

function generatePDF(results, userInfo) {
    const doc = new jsPDF();
    const lang = appState.currentLanguage;
    const isRTL = lang === 'ar';
    
    // إعداد الخط
    doc.addFont('assets/fonts/Tajawal-Regular.ttf', 'Tajawal', 'normal');
    doc.addFont('assets/fonts/Roboto-Regular.ttf', 'Roboto', 'normal');
    doc.setFont(isRTL ? 'Tajawal' : 'Roboto');
    
    // صفحة الغلاف
    doc.setFontSize(24);
    doc.setTextColor(106, 27, 154);
    doc.text(isRTL ? 'تقرير تحليل الشخصية' : 'Personality Analysis Report', 105, 40, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(isRTL ? 'غرفة الأسرار' : 'Secrets Room', 105, 60, { align: 'center' });
    
    // معلومات المستخدم
    doc.setFontSize(12);
    doc.text(${isRTL ? 'الاسم:' : 'Name:'} ${userInfo.name || 'N/A'}, 15, 80);
    doc.text(${isRTL ? 'العمر:' : 'Age:'} ${userInfo.age}, 15, 90);
    doc.text(${isRTL ? 'الجنس:' : 'Gender:'} ${userInfo.gender}, 15, 100);
    
    // ملخص النتائج
    doc.addPage();
    doc.setFontSize(18);
    doc.setTextColor(106, 27, 154);
    doc.text(isRTL ? 'الملخص التنفيذي' : 'Executive Summary', 15, 20);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    let y = 30;
    
    // MBTI
    doc.setFontSize(14);
    doc.text(${isRTL ? 'نوع الشخصية (MBTI):' : 'Personality Type (MBTI):'} ${results.mbti.type}, 15, y);
    y += 10;
    
    doc.setFontSize(12);
    const mbtiDesc = doc.splitTextToSize(results.mbti.description[lang], 180);
    doc.text(mbtiDesc, 15, y);
    y += mbtiDesc.length * 7 + 15;
    
    // Big Five Chart
    doc.setFontSize(14);
    doc.text(isRTL ? 'نموذج العوامل الخمسة' : 'Big Five Traits', 15, y);
    y += 10;
    
    const bigFiveData = {
        labels: isRTL ? 
            ['الانفتاح', 'الضمير', 'الانبساط', 'القبول', 'العصابية'] :
            ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
        datasets: [{
            data: [
                results.bigfive.openness.score,
                results.bigfive.conscientiousness.score,
                results.bigfive.extraversion.score,
                results.bigfive.agreeableness.score,
                results.bigfive.neuroticism.score
            ],
            backgroundColor: ['#6a1b9a', '#9c4dcc', '#d05ce3', '#f48fb1', '#f8bbd0']
        }]
    };
    
    doc.autoTable({
        startY: y,
        head: [[isRTL ? 'السمة' : 'Trait', isRTL ? 'الدرجة' : 'Score']],
        body: bigFiveData.labels.map((label, i) => [
            label,
            ${bigFiveData.datasets[0].data[i]}%
        ]),
        styles: { font: isRTL ? 'Tajawal' : 'Roboto', halign: 'center' },
        columnStyles: { 0: { cellWidth: 'auto' }, 1: { cellWidth: 'auto' } }
    });
    
    // باقي التقرير...
    
    // حفظ الملف
    doc.save(isRTL ? 'تقرير_شخصية.pdf' : 'personality_report.pdf');
}

export { generatePDF };
