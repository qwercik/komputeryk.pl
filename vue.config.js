module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~sass-mq";
          @import "~@/assets/scss/variables.scss";
        `
      }
    }
  }
}
