const path = require('path')
const createEntry = require('./mutiple-entry')

const resolve = dir => path.join(__dirname, dir)
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
  publicPath: IS_PROD ? process.env.BASE_URL : '/',
  productionSourceMap: false,
  pages: {
    ...createEntry()
  },
  devServer: {
    open: true
  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@buy', resolve('src/pages/buy'))
      .set('@rent', resolve('src/pages/rent'))
      .set('@index', resolve('src/pages/index'))
      .set('@common', resolve('src/components'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
  }
}
