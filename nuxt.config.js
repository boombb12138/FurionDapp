const env = require('./env');

export default {
  server: {
    port: env[process.env.MODE].PORT,
    host: env[process.env.MODE].HOST,
  },
  components: ['~/components'],
  env: env[process.env.MODE],
  telemetry: false,
  head: {
    title: 'Furion',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Inter:300',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Inter:400',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Inter:500',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Inter:600',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Inter:700',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Inter:800',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Inter:900',
      },
    ],
  },
  loading: { color: '#FA6BE1' },
  css: [
    'normalize.css',
    '@/assets/scss/base.scss',
    '@/assets/scss/element.scss',
    '@/assets/scss/common.scss',
    '@/assets/scss/global.scss',
  ],
  plugins: [
    { src: '@/plugins/echarts', ssr: false },
    { src: '@/plugins/quill', ssr: false },
    { src: '@/plugins/element-ui' },
    { src: '@/plugins/mixin' },
    {
      src: '@/plugins/swiper.js',
      ssr: false,
    },
  ],
  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/composition-api/module',
    'cookie-universal-nuxt',
  ],
  router: {
    base: env[process.env.MODE].BASE,
    middleware: ['cookies'],
  },
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {},
    extractCSS: process.env.NODE_ENV === 'production',
  },
};
