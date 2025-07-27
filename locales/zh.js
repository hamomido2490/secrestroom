// locales/zh.js
const zh = {
  ui: {
    title: "秘密房间",
    welcome: "欢迎回到秘密房间",
    age: "您的年龄是多少？",
    age_error: "请输入您的年龄（10至100岁之间）",
    gender: "您的性别是什么？",
    start: "开始分析",
    next: "下一页",
    submit: "提交",
    yes: "是",
    no: "否",
    select_answer: "请选择一个答案",
    result_summary: "简要分析",
    result_full: "详细分析",
    download_pdf: "下载PDF报告",
    share: "分享",
    share_title: "我的个性分析 - 秘密房间",
    share_text: "我在秘密房间发现了我的个性秘密！现在就试试吧！",
    ad_settings: "广告设置",
    logout: "退出登录",
    device_id: "您的设备ID",
    language_error: "语言加载失败，默认使用中文",
    pdf_error: "PDF库未加载，请稍后再试",
    data_error: "加载心理学理论数据时出错",
    general_recommendation: "继续探索您的优势，并保持对个人成长的开放态度"
  },
  options: {
    likert: {
      1: "非常少",
      2: "很少",
      3: "有时",
      4: "经常",
      5: "总是"
    },
    yes_no: {
      yes: "是",
      no: "否"
    }
  },
  results: {
    summary_intro: "以下是基于您的回答对您个性的简要概述：",
    full_intro: "基于心理学理论的深入分析：",
    theories_intro: "您的结果与心理学理论的比较：",
    recommendations_intro: "基于您的结果的个人发展建议：",
    domain_scores: "领域得分",
    score: "得分",
    interpretation: "解释",
    description: "描述",
    key_concepts: "关键概念",
    domains: {
      vision: "内在视野",
      analysis: "深入分析",
      healing: "心理疗愈",
      discovery: "诚实发现",
      full: "全面分析"
    },
    traits: {
      freud: "弗洛伊德精神分析",
      adler: "阿德勒个体心理学",
      jung: "荣格分析心理学",
      family_systems: "家庭系统理论",
      enneagram: "九型人格",
      big_five: "大五人格",
      rebt: "理性情绪行为疗法（REBT）",
      erikson: "埃里克森阶段理论",
      rogers: "罗杰斯理论",
      maslow: "马斯洛需求层次理论",
      eysenck_pen: "艾森克PEN模型",
      theory_of_mind: "心理理论",
      multiple_selves: "多重自我",
      mbti: "迈尔斯-布里格斯类型指标（MBTI）",
      skinner: "斯金纳行为主义",
      kohlberg: "科尔伯格道德发展理论",
      vygotsky: "维果茨基社会文化理论",
      piaget: "皮亚杰认知发展理论",
      disc: "DISC模型",
      colors: "个性颜色",
      bandura: "班杜拉社会学习理论",
      keirsey: "凯尔西气质分类"
    },
    red_personality: "红色人格",
    red_description: "您充满热情、活力，喜欢领导和探索。您在挑战和创新中蓬勃发展。",
    red_themes: ["活力", "热情", "领导力", "创新", "大胆"],
    blue_personality: "蓝色人格",
    blue_description: "您冷静、善于分析，偏好深入思考和理解。您重视秩序和帮助他人。",
    blue_themes: ["冷静", "深入思考", "分析", "助人", "组织"],
    purple_personality: "紫色人格",
    purple_description: "您复杂且多面，融合了多种特质。您在多样性和持续成长中蓬勃发展。",
    purple_themes: ["多才多艺", "成长", "创造力", "灵活性", "深度"]
  },
  admin: {
    admin_title: "广告设置",
    password_placeholder: "输入密码",
    wrong_password: "密码错误",
    save_settings: "保存设置",
    save_success: "广告设置保存成功！",
    ad_client_label: "AdSense客户ID",
    ad_slot_quiz_label: "测验部分的广告ID",
    ad_slot_results_label: "结果部分的广告ID",
    ad_slot_footer_label: "页脚部分的广告ID"
  },
  errors: {
    invalid_input: "输入无效，请重试",
    ad_load_error: "广告加载失败，请稍后再试"
  },
  copyright: "© 2025 Mohammed Tarek"
};

export default zh;