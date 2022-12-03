const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      // 自定义代理名,请求时使用
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn', 
        changeOrigin: true, 
      },
    },
  },
})