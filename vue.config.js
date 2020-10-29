module.exports = {
  devServer: {
    proxy:{
      "^/api":{
        target:"http://m.kugou.com",
        secure:false,
        changeOrigin:true,
        pathRewrite:{
          "^/api":""
        }
      }
    }
  }
};
