const path = require('path')
const glob = require('glob')

const generateEntries = () => {
  // 默认查询多页面地址
  const PATH_ENTRY = path.resolve(__dirname, './src/pages')
  // 约定构建出的页面用folder名字，默认入口为每个页面的main.js
  const entryFilePaths = glob.sync(PATH_ENTRY + '/**/main.js')
  const entry = {}

  entryFilePaths.forEach((filePath) => {
    const FILENAME = filePath.match(/([^/]+)\/main\.js$/)[1]
    entry[FILENAME] = {
      entry: filePath,
      template: 'public/index.html',
      filename: FILENAME === 'index' ? `${FILENAME}.html` : `${FILENAME}/${FILENAME}.html`,
      // title可不传，每个页面单独设置
      title: `${FILENAME} Page`,
      chunks: ['chunk-vendors', 'chunk-common', FILENAME]
    }
  })

  return entry
}

module.exports = {
  generateEntries
}
