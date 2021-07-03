// vue.config.js in order to be able to use your 
module.exports = {
  css: {
    loaderOptions: {
      sass: {
     
        additionalData: `@import "@/assets/_shareable.scss";`,
      },
    }
  }
}