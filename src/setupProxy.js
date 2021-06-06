const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/user/',
        createProxyMiddleware({
            target: 'http://192.168.98.24:8080',
            //target: 'http://ccm.xcoder.ge/ccm/',
            logLevel:"debug",
            changeOrigin: false,
        })
    );
    app.use(
        '/withdrawals/',
        createProxyMiddleware({
            target: 'http://192.168.98.24:8080',
            //target: 'http://ccm.xcoder.ge/ccm/',
            logLevel:"debug",
            changeOrigin: false,
        })
    );

};
