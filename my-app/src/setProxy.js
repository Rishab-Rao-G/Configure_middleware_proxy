const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use('/get?foo1=bar1&foo2=bar2',
        createProxyMiddleware(
        {
            target: 'https://postman-echo.com',
            changeOrigin: true
        })
    );
};