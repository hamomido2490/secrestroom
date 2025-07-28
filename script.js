document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const el = document.getElementById('loadingScreen');
        if (el) {
            el.style.opacity = '0';
            setTimeout(() => el.style.display = 'none', 500);
        }
    }, 1500);

    const userDataKey = 'psychAnalysisApp_v1';
    let data = JSON.parse(localStorage.getItem(userDataKey)) || { visitorCount: 0, analysisCount: 0 };
    data.visitorCount++;
    localStorage.setItem(userDataKey, JSON.stringify(data));

    const analysisTypes = {
        vision: { title: "الرؤية الداخلية", icon: "fas fa-eye", color: "#3498db" },
        analysis: { title: "التحليل العميق", icon: "fas fa-brain", color: "#9b59b6" },
        healing: { title: "الشفاء النفسي", icon: "fas fa-heart", color: "#2ecc71" },
        revelation: { title: "الكشف الصادق", icon: "fas fa-crystal-ball", color: "#f39c12" }
    };

    const analysisContent = {
        vision: {
            descriptions: [
                "لقد اكتشفت جانبًا مخفيًا من شخصيتك لم تكن تتخيله...",
                "رؤية داخلية قوية تشير إلى وعي عالٍ ومتفوق...",
                "البصيرة التي لديك تفوق التوقعات العادية بمستوى كبير...",
                "لديك قدرة استثنائية على رؤية الحقائق الخفية...",
                "العمق البصيري لديك يفتح أبوابًا لا نهائية للفهم..."
            ],
            insights: [
                "تحليلك يشير إلى قدرة استباقية مميزة وفريدة",
                "نمط التفكير الخاص بك غير تقليدي ومبتكِر",
                "التطور المستقبلي يعتمد على الثقة بالنفس والجرأة",
                "الوعي العالي لديك يخلق فرصًا لا محدودة للنمو",
                "القدرة على التنبؤ تجعلك قائدًا طبيعيًا"
            ]
        },
        analysis: {
            descriptions: [
                "تحليلك النفسي يشير إلى قوة داخلية غير متوقعة ومذهلة...",
                "العمق العاطفي الذي تمتلكه يستحق كل التقدير والاحترام...",
                "القدرة على فهم الذات تتطور بشكل متسارع ومثير...",
                "التحليل الدقيق يكشف عن طاقات خفية لم تكتشفها...",
                "الفهم العميق لنفسيتك يفتح آفاقًا جديدة للتطور..."
            ],
            insights: [
                "نمط التفكير الخاص بك فريد من نوعه ومتعدد الأبعاد",
                "التحديات الحالية فرص ذهبية للنمو الشخصي",
                "العلاقات الاجتماعية تؤثر بشكل كبير وعميق على تقدمك",
                "القدرة على التحليل تجعلك محصلًا متميزًا",
                "الفهم الذاتي يخلق توازنًا داخليًا قويًا"
            ]
        },
        healing: {
            descriptions: [
                "عملية الشفاء بدأت، وستشعر بالتغيير تدريجيًا ومريح...",
                "الشفاء النفسي يسير في المسار الصحيح والمثالي...",
                "التحول الداخلي يحدث بشكل طبيعي ومريح جدًا...",
                "التعافي يسير بسرعة أكبر مما تتوقع...",
                "الشفاء يخلق قوة داخلية لا تُقهر..."
            ],
            insights: [
                "القوة الداخلية أكبر مما تتخيل وتفوق التوقعات",
                "الوقت المناسب للشفاء هو الآن والفرص مواتية",
                "التقدم المستمر يبشر بمستقبل أفضل وأكثر إشراقًا",
                "التعافي يخلق مرونة نفسية استثنائية",
                "الشفاء يفتح قلوبًا جديدة للحب والثقة"
            ]
        },
        revelation: {
            descriptions: [
                "الحقيقة التي كنت تبحث عنها هي: أنت أقوى مما تتخيل...",
                "الكشف الصادق يُظهر قدرات لم تكتشفها بعد...",
                "الحقيقة الداخلية تحررك من القيود الوهمية...",
                "الكشف يفتح أبوابًا جديدة للفهم الذاتي...",
                "الحقيقة التي تكتشفها الآن ستغير كل شيء..."
            ],
            insights: [
                "الحقيقة التي تكتشفها الآن ستغير كل شيء بشكل جذري",
                "الوعي الجديد يفتح أبوابًا لا نهائية للتطور",
                "التطور الشخصي في أوجة ويتقدم بسرعة",
                "الكشف يخلق وعيًا جديدًا بالذات والعالم",
                "الحقيقة تحرر الطاقات الخفية داخلك..."
            ]
        }
    };

    function updateStats() {
        const v = document.getElementById('visitorCount'), a = document.getElementById('analysisCount');
        if (v) v.textContent = data.visitorCount;
        if (a) a.textContent = data.analysisCount;
    }

    document.querySelectorAll('.section-card').forEach(card => {
        const type = card.dataset.type;
        if (!analysisTypes[type]) return;

        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        });

        card.addEventListener('click', () => {
            showAnalysis(type);
            data.analysisCount++;
            localStorage.setItem(userDataKey, JSON.stringify(data));
            updateStats();
        });
    });

    function showAnalysis(type) {
        const analysis = analysisTypes[type], content = analysisContent[type];
        if (!analysis || !content) return;

        const desc = content.descriptions[Math.floor(Math.random() * content.descriptions.length)];
        const insight = content.insights[Math.floor(Math.random() * content.insights.length)];

        document.getElementById('modalTitle').textContent = analysis.title;
        document.getElementById('modalTitle').style.color = analysis.color;

        document.getElementById('modalBody').innerHTML = `
            <div class="analysis-content">
                <div class="analysis-header" style="border-right-color:${analysis.color}">
                    <div class="analysis-icon" style="color:${analysis.color}"><i class="${analysis.icon}"></i></div>
                    <h3>تحليلك الشخصي</h3>
                </div>
                <div class="analysis-description"><p>${desc}</p></div>
                <div class="analysis-progress">
                    <div class="progress-bar" style="background:${analysis.color}">
                        <div class="progress-fill" style="width:${Math.floor(Math.random()*40)+60}%;background:${analysis.color}"></div>
                    </div>
                </div>
                <div class="analysis-insight">
                    <div class="insight-header"><i class="fas fa-lightbulb"></i><h4>رؤية AI</h4></div>
                    <p>${insight}</p>
                </div>
                <div class="analysis-recommendations">
                    <div class="recommendations-header"><i class="fas fa-star"></i><h4>توصيات للتطوير</h4></div>
                    <ul>
                        <li>مارس التأمل اليومي لمدة 10 دقائق</li>
                        <li>اكتب ملاحظاتك البصيرية يوميًا</li>
                        <li>شارك تجربتك مع شخص تثق به</li>
                        <li>تابع تطورك خلال الأسبوع القادم</li>
                    </ul>
                </div>
                <div class="analysis-timestamp">
                    <i class="fas fa-clock"></i>
                    <span>تم التحليل في: ${new Date().toLocaleDateString('ar-EG')} - ${new Date().toLocaleTimeString('ar-EG')}</span>
                </div>
            </div>
        `;

        const modal = document.getElementById('analysisModal');
        modal.classList.add('active');

        document.getElementById('closeModal').onclick = () => modal.classList.remove('active');
        document.getElementById('saveReportBtn').onclick = () => savePDF(type, desc, insight);
        document.getElementById('shareBtn').onclick = shareAnalysis;
        modal.onclick = e => e.target === modal && modal.classList.remove('active');
    }

    async function savePDF(type, desc, insight) {
        try {
            await loadJS('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
            const { jsPDF } = jspdf;
            const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
            doc.setFont('Amiri');
            doc.setFontSize(20);
            doc.text('تقرير التحليل النفسي', 105, 30, { align: 'center' });
            doc.setFontSize(16);
            const titles = { vision: "الرؤية الداخلية", analysis: "التحليل العميق", healing: "الشفاء النفسي", revelation: "الكشف الصادق" };
            doc.text(`نوع التحليل: ${titles[type]}`, 20, 50);
            const date = new Date().toLocaleDateString('ar-EG');
            doc.text(`التاريخ: ${date}`, 20, 65);
            doc.setFontSize(14);
            doc.text('التحليل:', 20, 85);
            const lines1 = doc.splitTextToSize(desc, 170);
            doc.text(lines1, 20, 95);
            let y = 95 + (lines1.length * 8);
            doc.text('الرؤية:', 20, y + 10);
            const lines2 = doc.splitTextToSize(insight, 170);
            doc.text(lines2, 20, y + 20);
            doc.setFontSize(10);
            doc.text('تقرير مُولد آليًا من نظام التحليل النفسي', 105, 280, { align: 'center' });
            doc.save(`تحليل_${titles[type]}_${date.replace(/\//g, '-')}.pdf`);
            showNotification('تم حفظ التقرير بنجاح!', 'success');
        } catch (e) {
            showNotification('فشل في حفظ التقرير. تحقق من الاتصال.', 'error');
        }
    }

    function loadJS(src) {
        return new Promise((res, rej) => {
            if (document.querySelector(`script[src="${src}"]`)) return res();
            const s = document.createElement('script');
            s.src = src;
            s.onload = res;
            s.onerror = rej;
            document.head.appendChild(s);
        });
    }

    function shareAnalysis() {
        const url = window.location.href;
        if (navigator.share) {
            navigator.share({ title: 'تحليلي النفسي', text: 'اكتشفت شيئًا جديدًا عن نفسي!', url }).catch(() => copy(url));
        } else {
            copy(url);
        }
    }

    function copy(url) {
        navigator.clipboard.writeText(url).then(
            () => showNotification('تم نسخ الرابط!', 'info'),
            () => showNotification('تعذر النسخ. من فضلك انسخه يدويًا.', 'error')
        );
    }

    function showNotification(msg, type = 'info') {
        const notif = document.createElement('div');
        notif.className = `notification notification-${type}`;
        notif.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${msg}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        document.body.appendChild(notif);
        notif.querySelector('.notification-close').addEventListener('click', () => notif.remove());
        setTimeout(() => notif.remove(), 3000);
    }

    updateStats();

    window.addEventListener('load', () => {
        document.querySelectorAll('img').forEach(img => { img.loading = 'lazy'; });
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes glow { 0%,100% { box-shadow: 0 0 20px rgba(52,152,219,0.3); } 50% { box-shadow: 0 0 30px rgba(52,152,219,0.6); } }
        .section-card:hover { animation: glow 2s infinite; }
    `;
    document.head.appendChild(style);
});
