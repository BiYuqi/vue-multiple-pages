# [vue-multiple-pages](https://github.com/BiYuqi/vue-multiple-pages)

> vue2+vue-router+vuex 多页面配置实例

## Setting
```js
// glob是webpack安装时依赖的一个第三方模块，还模块允许你使用 *等符号, 例如lib/*.js就是获取lib文件夹下的所有js后缀名的文件
const glob = require('glob')
// 页面模板
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 取得相应的页面路径，因为之前的配置，所以是src文件夹下的pages文件夹
const PAGE_PATH = path.resolve(__dirname, '../src/pages')

/**
* 多入口配置,通过glob模块读取pages文件夹下的所有对应文件夹下的js后缀文件
* 如果该文件存在 那么就作为入口处理
*/
exports.entries = function () {
  const entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
  const entry = {}
  entryFiles.forEach((filePath) => {
      const filename = filePath.match(/(\w+)\.js$/)[1]
      entry[filename] = filePath
  })
  return entry
}
/**
* 多页面输出配置
* 与上面的多页面入口配置相同，读取pages文件夹下的对应的html后缀文件，然后放入数组中
*/
exports.htmlPlugin = function () {
  const entryHtml = glob.sync(PAGE_PATH + '/*/*.html')
  const arr = []
  entryHtml.forEach((filePath) => {
      const filename = filePath.match(/(\w+)\.html$/)[1]
      let conf = {
          // 模板来源
          template: filePath,
          // 文件名称
          filename: filename + '.html',
          // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
          chunks: ['manifest', 'vendor', filename],
          inject: true
      }
      if (process.env.NODE_ENV === 'production') {
          conf = merge(conf, {
              minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeAttributeQuotes: true
              },
              chunksSortMode: 'dependency'
          })
      }
      arr.push(new HtmlWebpackPlugin(conf))
  })
  return arr
}
```
## Usage

``` bash
git clone https://github.com/BiYuqi/vue-multiple-pages.git

cd vue-multiple-pages

npm install

npm run dev

npm run build
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
