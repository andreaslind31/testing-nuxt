export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/faviconAL.ico' }
    ]
  },
ssr: false,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content', '@nuxtjs/axios', '@nuxtjs/pwa'
  ],
  pwa: {
    icon: {
      fileName : 'test-AL-logo.png',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    },
    manifest: {
      name: 'My Portfolio',
      lang: 'fa',
      useWebmanifestExtension: false
    }
  },
  axios: {
    // proxy: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
