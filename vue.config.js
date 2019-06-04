module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target : 'http://39.97.33.178',
                changeOrigin: true
            },
            '/sohuCity':{
                target : 'http://pv.sohu.com',
                changeOrigin: true,
                pathRewrite:{"^/sohuCity":""}
            }
        },
        overlay: {
            warnings: false,
            errors: false
        }
    },
    lintOnSave: false
}
