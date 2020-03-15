module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: "@import '@/constants/constants.scss'"
      }
    }
  }
}
