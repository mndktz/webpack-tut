var path = require('path');
var webpack = require('webpack');
var extractTextPlugin = require('extract-text-webpack-plugin');

const DEVELOPMENT = process.env.NODE_ENV === 'development';

const PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION ? ['./src/index.js'] : [
    './src/index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080'
];

var plugins = PRODUCTION 
? [ new webpack.optimize.UglifyJsPlugin({
        comments: true,
        mangle: false,
        compress: {
            warnings: true
        }
    }), new extractTextPlugin('styles.css')
  ] 
: [ new webpack.HotModuleReplacementPlugin() ];
plugins.push(
    new webpack.DefinePlugin({
        DEVELOPMENT: JSON.stringify(DEVELOPMENT),
        PRODUCTION: JSON.stringify(PRODUCTION)

}));

const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]---[local]';

const cssLoader = PRODUCTION 
     ? extractTextPlugin.extract({
         loader: 'css-loader?localIdentName=' + cssIdentifier
     }) 
     : ['style-loader', 'css-loader?localIdentName=' + cssIdentifier ]



module.exports = {
    devtool: 'source-map',
    entry: entry,
    plugins: plugins,
    module: {
        loaders: [{
                test: /\.(png|jpg|gif)$/,
                loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
                exclude: '/node_modules/'
            },
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                loaders: cssLoader,
                exclude: '/node_modules/'
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },

};


//for browsers that don't support es6 use babel loader
//run - npm install babel-core babel-loader babel-preset-2015 babel-preset-stage-<use latest stage>
//add .babelrc file with { "presets": ["es2015", "stage-0"] }
//add to webpack.conig module.exports.module.loaders ...
//         {
//             test: /\.js$/,
//             loaders:['babel-loader'],
//             exclude:'/node_modules/'
//         }


//for images and other files we need a file loader
//run - npm install file-loader --save-dev
//add to webpack.conig module.exports.module.loaders ...
//         {
//            test: /\.(png|jpg|gif)$/,
//            loaders:['file-loader'],
//            exclude:'/node_modules/'
//         }


//for small images to have the files loaded as a data url 
//instead of a src file (a data url is faster because the browser doesnt need to make another http call)
//run - npm install url-loader --save-dev
//teh url-loader works like this ... loader = (file < limit) ? 'url-loader' : 'file-loader'
//change webpack.conig module.exports.module.loaders[i].loaders from file-loader to url-loader?limit=10000
//you can also change the naming and directory of the generated src files by adding &name=images/[hash:12].[ext]

//@ 52.29