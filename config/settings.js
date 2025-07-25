export default {
  appName: 'Secrets Room',
  version: '1.0.0',
  defaultLanguage: 'ar',
  supportedLanguages: ['ar', 'en'],
  api: {
    baseUrl: 'https://api.secretsroom.com/v1',
    endpoints: {
      tests: '/tests',
      theories: '/theories'
    }
  },
  ads: {
    enabled: true,
    provider: 'googleAdSense',
    slots: {
      header: 'top_banner',
      sidebar: 'side_banner'
    }
  }
};
