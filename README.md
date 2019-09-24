# [vue-multiple-pages](https://github.com/BiYuqi/vue-multiple-pages)

> Vue多页面配置实例

## Mutiple Setting
```js
const path = require('path')
const glob = require('glob')

const generateEntries = () => {
  // 默认查询多页面地址
  const PATH_ENTRY = path.resolve(__dirname, './src/pages')
  // 约定构建出的页面用folder名字，默认入口为每个页面的main.js
  const entryFilePaths = glob.sync(PATH_ENTRY + '/**/main.js')
  const entry = {}
  
  entryFilePaths.forEach((filePath) => {
    const filename = filePath.match(/(\w+)\/main\.js$/)[1]
    entry[filename] = {
      entry: filePath,
      template: 'public/index.html',
      filename: `${filename}.html`,
      // title可不传，每个页面单独设置
      title: `${filename} Page`,
      chunks: ['chunk-vendors', 'chunk-common', filename]
    }
  })

  return entry
}

module.exports = {
  generateEntries
}
```

## 使用方法请看 vue.config.js

## Usage

``` bash
git clone https://github.com/BiYuqi/vue-multiple-pages.git

cd vue-multiple-pages

npm install

npm run serve

npm run build
```
