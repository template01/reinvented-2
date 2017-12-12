module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'reinvented-v2',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  mode: 'spa',

  css: [
    // '~assets/css/main.css',



  ],

  modules: [
    '@nuxtjs/bulma'
  ],

  plugins: [
    '~/plugins/lodash-plugin.js',
    //'~/plugins/maps.js',
    '~/plugins/resizer.js',
    //GLOBAL MIXINS
    '~/mixins/computedresizerglobalmixin.js',
    // {
    //   src: '~/mixins/computedscrollbarwidth.js',
    //   ssr: false
    // },
  ],

  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios', 'lodash'],

    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
    /*
     ** Run ESLint on save
     */
    // extend(config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
