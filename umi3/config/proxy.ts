export default {
  // "/api": {
  //   // 要代理的真实服务器地址
  //   target: "http://localhost:9001",
  //   https: false,
  //   // 依赖origin的功能可能需要这个，比如 cookie
  //   changeOrigin: true,
  //   pathRewrite: {
  //     '^/api': ""
  //   }, // 路径替换
  // },
  "/book":{
    target: "https://api.zhuishushenqi.com/",
    changeOrigin: true
  }
}