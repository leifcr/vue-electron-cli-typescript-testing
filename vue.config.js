module.exports = {
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.ts'
      // Or, for multiple preload files:
      // preload: { preload: 'src/preload.js' }
    }
  }
}