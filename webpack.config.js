var path = require('path');//(path) já faz parte do Node.js, não precisa instalar

module.exports = {
    //tell webpack which file it should begin looking at to create its bundle.
    entry: "./app/assets/scripts/App.js",
    //another object 
    output: {
        //path we want the bundled file to be created.
        path: path.resolve(__dirname, "./app/temp/scripts"),
        //name of the bundled file, we could to give the name we want.
        filename: "App.js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}