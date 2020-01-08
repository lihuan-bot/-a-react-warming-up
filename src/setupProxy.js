const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target:'https://api.douban.com/v2/movie/',
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/"
    }
    })
  );
};