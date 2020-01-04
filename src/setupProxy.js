const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target:'https://douban.uieee.com/v2/movie/',
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/"
    }
    })
  );
};