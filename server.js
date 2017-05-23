var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.js');

var port = 5000;
var app = express();
var compiler  = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
    }
));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, (err) => {
    if(err) {
        console.error(err);
    } else {
        console.info('Server listening on port %s', port);
}
});
