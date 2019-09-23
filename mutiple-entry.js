const path = require('path')
const glob = require('glob')

const createEntry = () => {
  const pageEntry = path.resolve(__dirname, './src/pages')
  // 约定构建出的页面用folder名字
  // 默认入口为每个页面的main.js
  const entryFiles = glob.sync(pageEntry + '/**/main.js')
  const entry = {}
  entryFiles.forEach((filePath) => {
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

module.exports = createEntry
