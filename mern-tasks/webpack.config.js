module.exports = {
    mode: 'development',
    entry:'./src/app/index.js',
    output:{
        path:__dirname+'/src/public',
        filename:'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      }
  };