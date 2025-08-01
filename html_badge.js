;(() => {
  // 创建样式
  const style = document.createElement('style')
  style.id = 'genspark-badge'
  style.textContent = `
    .genspark-badge-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #333;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      font-size: 12px;
      cursor: pointer;
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .genspark-modal {
      display: none;
      position: fixed;
      bottom: 80px;
      right: 20px;
      z-index: 10000;
      justify-content: end;
    }
    
    .genspark-modal-content {
      background-color: white;
      border-radius: 8px;
      max-width: 450px;
      width: 100%;
      box-sizing: border-box;
      padding: 20px;
      position: relative;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      font-size: 14px;
    }
    @media (max-width: 768px) {
      .genspark-modal-content {
        max-width: 90%;
      }
    }
    
    .genspark-close {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 20px;
      cursor: pointer;
      background: none;
      border: none;
    }
    
    .genspark-title {
      margin-bottom: 8px;
      font-weight: normal;
      display: inline;
      font-size: 14px;
    }
    
    .genspark-report {
      color: #909499;
      text-decoration: underline;
      cursor: pointer;
      margin-bottom: 14px;
      display: inline;
    }
    
    .genspark-info {
      margin: 25px 0;
      color: #333;
      font-size: 14px;
    }
    
    .genspark-buttons {
      display: flex;
      gap: 10px;
    }
    
    .genspark-remove-btn {
      background-color: #f5f5f5;
      border: 1px solid #ddd;
      color: #333;
      padding: 4px 14px;
      border-radius: 8px;
      cursor: pointer;
      flex: 1;
      font-size: 14px;
      box-sizing: border-box;
    }
    
    .genspark-go-btn {
      background-color: #222;
      border: none;
      color: white;
      padding: 4px 14px;
      border-radius: 8px;
      cursor: pointer;
      flex: 1;
      font-size: 14px;
      box-sizing: border-box;
    }
  `
  document.head.appendChild(style)

  // 获取当前语言
  const getCurrentLocale = () => {
    // 优先检查全局变量 window.__genspark_locale
    if (window.__genspark_locale) {
      return window.__genspark_locale
    }

    // 回退到浏览器语言
    const browserLang = navigator.language || navigator.userLanguage
    // 简单映射到我们支持的语言
    const supportedLocales = [
      'en-US',
      'zh-CN',
      'zh-TW',
      'ja-JP',
      'ko-KR',
      'fr-FR',
      'de-DE',
      'es-ES',
      'it-IT',
      'pt-BR',
      'ru-RU',
      'hi-IN',
      'ar-EG',
    ]
    // 查找匹配的语言
    const matchedLocale = supportedLocales.find(locale =>
      browserLang.toLowerCase().startsWith(locale.toLowerCase().split('-')[0])
    )
    return matchedLocale || 'en-US' // 默认英语
  }

  // 获取本地化文本
  const getLocalizedText = () => {
    const locale = getCurrentLocale()

    const translations = {
      'en-US': {
        buttonText: 'Made with Genspark',
        titleText: 'This page was created by users with AI.',
        reportText: 'Report inappropriate content.',
        infoText: 'Page owner with Plus Plan can remove badge.',
        removeButtonText: 'Remove Badge',
        goButtonText: 'Go to Genspark',
      },
      'zh-CN': {
        buttonText: '由 Genspark 制作',
        titleText: '此页面由用户使用 AI 创建。',
        reportText: '举报不当内容。',
        infoText: 'Plus 计划的页面所有者可以移除徽章。',
        removeButtonText: '移除徽章',
        goButtonText: '前往 Genspark',
      },
      'zh-TW': {
        buttonText: '由 Genspark 製作',
        titleText: '此頁面由用戶使用 AI 創建。',
        reportText: '舉報不當內容。',
        infoText: 'Plus 計劃的頁面所有者可以移除徽章。',
        removeButtonText: '移除徽章',
        goButtonText: '前往 Genspark',
      },
      'ja-JP': {
        buttonText: 'Genspark で作成',
        titleText: 'このページはユーザーがAIで作成しました。',
        reportText: '不適切なコンテンツを報告する。',
        infoText: 'Plus プランのページ所有者はバッジを削除できます。',
        removeButtonText: 'バッジを削除',
        goButtonText: 'Genspark へ',
      },
      'ko-KR': {
        buttonText: 'Genspark로 제작됨',
        titleText: '이 페이지는 사용자가 AI로 만들었습니다.',
        reportText: '부적절한 콘텐츠 신고.',
        infoText: 'Plus 플랜 페이지 소유자는 배지를 제거할 수 있습니다.',
        removeButtonText: '배지 제거',
        goButtonText: 'Genspark로 이동',
      },
      'fr-FR': {
        buttonText: 'Créé avec Genspark',
        titleText: 'Cette page a été créée par des utilisateurs avec IA.',
        reportText: 'Signaler un contenu inapproprié.',
        infoText:
          'Le propriétaire de la page avec le plan Plus peut supprimer le badge.',
        removeButtonText: 'Supprimer le badge',
        goButtonText: 'Aller à Genspark',
      },
      'de-DE': {
        buttonText: 'Erstellt mit Genspark',
        titleText: 'Diese Seite wurde von Benutzern mit KI erstellt.',
        reportText: 'Unangemessene Inhalte melden.',
        infoText:
          'Seitenbesitzer mit Plus-Plan können das Abzeichen entfernen.',
        removeButtonText: 'Abzeichen entfernen',
        goButtonText: 'Zu Genspark',
      },
      'es-ES': {
        buttonText: 'Hecho con Genspark',
        titleText: 'Esta página fue creada por usuarios con IA.',
        reportText: 'Reportar contenido inapropiado.',
        infoText:
          'El propietario de la página con Plan Plus puede eliminar la insignia.',
        removeButtonText: 'Eliminar insignia',
        goButtonText: 'Ir a Genspark',
      },
      'it-IT': {
        buttonText: 'Creato con Genspark',
        titleText: "Questa pagina è stata creata dagli utenti con l'IA.",
        reportText: 'Segnala contenuti inappropriati.',
        infoText:
          'Il proprietario della pagina con Piano Plus può rimuovere il badge.',
        removeButtonText: 'Rimuovi badge',
        goButtonText: 'Vai a Genspark',
      },
      'pt-BR': {
        buttonText: 'Feito com Genspark',
        titleText: 'Esta página foi criada por usuários com IA.',
        reportText: 'Reportar conteúdo inadequado.',
        infoText:
          'O proprietário da página com Plano Plus pode remover o distintivo.',
        removeButtonText: 'Remover distintivo',
        goButtonText: 'Ir para Genspark',
      },
      'ru-RU': {
        buttonText: 'Сделано с Genspark',
        titleText: 'Эта страница создана пользователями с помощью ИИ.',
        reportText: 'Сообщить о неприемлемом содержании.',
        infoText: 'Владелец страницы с тарифом Plus может удалить значок.',
        removeButtonText: 'Удалить значок',
        goButtonText: 'Перейти к Genspark',
      },
      'hi-IN': {
        buttonText: 'Genspark के साथ बनाया गया',
        titleText: 'यह पेज उपयोगकर्ताओं द्वारा AI के साथ बनाया गया था।',
        reportText: 'अनुचित सामग्री की रिपोर्ट करें।',
        infoText: 'प्लस प्लान वाले पेज के मालिक बैज हटा सकते हैं।',
        removeButtonText: 'बैज हटाएं',
        goButtonText: 'Genspark पर जाएं',
      },
      'ar-EG': {
        buttonText: 'صنع بواسطة Genspark',
        titleText: 'تم إنشاء هذه الصفحة بواسطة المستخدمين مع الذكاء الاصطناعي.',
        reportText: 'الإبلاغ عن محتوى غير لائق.',
        infoText: 'يمكن لمالك الصفحة مع خطة بلس إزالة الشارة.',
        removeButtonText: 'إزالة الشارة',
        goButtonText: 'الذهاب إلى Genspark',
      },
    }

    return translations[locale] || translations['en-US']
  }

  const localizedText = getLocalizedText()

  // 创建徽章按钮
  const badgeButton = document.createElement('button')
  badgeButton.className = 'genspark-badge-button'
  badgeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<path d="M11.3412 0H2.65879C1.19038 0 0 1.19038 0 2.65879V11.3412C0 12.8096 1.19038 14 2.65879 14H11.3412C12.8096 14 14 12.8096 14 11.3412V2.65879C14 1.19038 12.8096 0 11.3412 0Z" fill="white"/>
<path d="M11.7403 10.7031H2.29243C2.09641 10.7031 1.9375 10.862 1.9375 11.0581V11.8033C1.9375 11.9993 2.09641 12.1582 2.29243 12.1582H11.7403C11.9363 12.1582 12.0952 11.9993 12.0952 11.8033V11.0581C12.0952 10.862 11.9363 10.7031 11.7403 10.7031Z" fill="#232425"/>
<path d="M5.09178 9.18166C5.03494 9.18166 4.98695 9.13998 4.97811 9.08314C4.60803 6.63655 4.34025 6.42056 1.91134 6.05427C1.83682 6.0429 1.78125 5.97848 1.78125 5.9027C1.78125 5.82691 1.83682 5.7625 1.91134 5.75113C4.32762 5.3861 4.54235 5.17011 4.90738 2.7551C4.91874 2.68058 4.98316 2.625 5.05894 2.625C5.13473 2.625 5.19914 2.68058 5.21051 2.7551C5.57554 5.17011 5.79153 5.3861 8.20655 5.75113C8.28107 5.7625 8.33664 5.82691 8.33664 5.9027C8.33664 5.97848 8.28107 6.0429 8.20655 6.05427C5.78017 6.42056 5.57302 6.63655 5.20546 9.08314C5.19662 9.13871 5.14862 9.18166 5.09178 9.18166Z" fill="#232425"/>
<path d="M9.70174 5.949C9.66637 5.949 9.63606 5.92248 9.63101 5.88711C9.39986 4.35878 9.23188 4.22363 7.71492 3.99501C7.66818 3.98743 7.63281 3.94828 7.63281 3.90028C7.63281 3.85355 7.66692 3.81313 7.71492 3.80555C9.2243 3.5782 9.35945 3.44305 9.5868 1.93366C9.59438 1.88693 9.63354 1.85156 9.68153 1.85156C9.72827 1.85156 9.76869 1.88567 9.77627 1.93366C10.0036 3.44305 10.1388 3.5782 11.6482 3.80555C11.6949 3.81313 11.7302 3.85228 11.7302 3.90028C11.7302 3.94702 11.6962 3.98743 11.6482 3.99501C10.1325 4.22363 10.0024 4.35878 9.77247 5.88711C9.76742 5.92248 9.73711 5.949 9.70174 5.949Z" fill="#232425"/>
<path d="M9.69114 9.76325C9.6684 9.76325 9.64946 9.74683 9.64567 9.7241C9.49915 8.75152 9.39179 8.66563 8.42679 8.52038C8.39648 8.51533 8.375 8.49007 8.375 8.45975C8.375 8.42944 8.39648 8.40418 8.42679 8.39912C9.38673 8.25387 9.47262 8.16798 9.61788 7.20804C9.62293 7.17772 9.64819 7.15625 9.6785 7.15625C9.70882 7.15625 9.73408 7.17772 9.73913 7.20804C9.88439 8.16798 9.97028 8.25387 10.9302 8.39912C10.9605 8.40418 10.982 8.42944 10.982 8.45975C10.982 8.49007 10.9605 8.51533 10.9302 8.52038C9.96523 8.66563 9.88312 8.75152 9.73661 9.7241C9.73282 9.74683 9.71387 9.76325 9.69114 9.76325Z" fill="#232425"/>
</svg> ${localizedText.buttonText}`

  // 检查是否在iframe中以及父窗口地址
  const isInIframe = window.self !== window.top
  let shouldShowBadge = true

  if (isInIframe) {
    try {
      // 尝试获取父窗口的URL
      const parentUrl = window.parent.location.href
      // 只有当父窗口URL包含html_badge_test.html时才显示
      shouldShowBadge = parentUrl.includes('html_badge_test.html')
    } catch (e) {
      // 如果无法访问父窗口URL（跨域限制），默认不显示
      shouldShowBadge = false
    }
  }

  // 只有当shouldShowBadge为true时才添加徽章按钮
  if (shouldShowBadge) {
    document.body.appendChild(badgeButton)
  }

  // 创建模态框
  const modal = document.createElement('div')
  modal.className = 'genspark-modal'
  modal.innerHTML = `
    <div class="genspark-modal-content">
      <button class="genspark-close"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<path d="M11 3L3 11M3 3L11 11" stroke="#232425" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
      <h3 class="genspark-title">${localizedText.titleText}</h3>
      <a class="genspark-report" href="mailto:support@genspark.ai?subject=Report%20inappropriate%20content&body=Current%20URL:%20${window.location.href}">${localizedText.reportText}</a>
      <p class="genspark-info">${localizedText.infoText}</p>
      <div class="genspark-buttons">
        <button class="genspark-remove-btn">${localizedText.removeButtonText}</button>
        <button class="genspark-go-btn">${localizedText.goButtonText}</button>
      </div>
    </div>
  `
  // 只有当shouldShowBadge为true时才添加模态框
  if (shouldShowBadge) {
    document.body.appendChild(modal)

    // 定义一个全局计时器变量
    let hideTimeout

    // 事件监听
    badgeButton.addEventListener('click', () => {
      modal.style.display = 'flex'
    })

    // 鼠标悬停时也显示badge
    badgeButton.addEventListener('mouseenter', () => {
      modal.style.display = 'flex'
      clearTimeout(hideTimeout) // 清除已有的计时器
    })

    // 鼠标离开badgeButton时，延迟1秒关闭modal
    badgeButton.addEventListener('mouseleave', () => {
      hideTimeout = setTimeout(() => {
        modal.style.display = 'none'
      }, 1000)
    })

    // 鼠标进入modal时，清除计时器
    modal.addEventListener('mouseenter', () => {
      clearTimeout(hideTimeout)
    })

    // 鼠标离开modal时，延迟1秒关闭modal
    modal.addEventListener('mouseleave', () => {
      hideTimeout = setTimeout(() => {
        modal.style.display = 'none'
      }, 1000)
    })

    const closeButton = modal.querySelector('.genspark-close')
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none'
    })

    // 点击模态框外部关闭
    document.addEventListener('click', e => {
      if (
        modal.style.display === 'block' &&
        !modal.contains(e.target) &&
        e.target !== badgeButton
      ) {
        modal.style.display = 'none'
      }
    })

    // 添加按钮功能
    const removeButton = modal.querySelector('.genspark-remove-btn')
    removeButton.addEventListener('click', () => {
      // 检测是否在iframe中
      if (window.self !== window.top) {
        // 在iframe中，使用postMessage发送token消息给父窗口
        window.parent.postMessage(
          {
            type: 'html_badge_remove_badge',
            payload: {
              token: window.__genspark_token,
            },
          },
          '*'
        )
      } else {
        // 不在iframe中，使用原来的逻辑
        if (window.__genspark_remove_badge_link) {
          window.location.href = window.__genspark_remove_badge_link
        }
      }
      console.log('Remove badge clicked')
    })

    const goButton = modal.querySelector('.genspark-go-btn')
    goButton.addEventListener('click', () => {
      // 这里可以添加跳转到Genspark的逻辑
      window.open('https://www.genspark.ai', '_blank')
    })
  }
})()
