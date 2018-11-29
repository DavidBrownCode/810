var path = require ('path');
        rootPath = path.normalize(__dirname + '/..');
        env = process.env.NODE.ENV || 'development';

var config = {
    development: {
            root: rootPath,
            app: {name:'810'},
            port: 5000,
    },

    production = {
            root: rootPath,
            app:{name: '810'},
            port:80,}
    };
module.exports = config[env];
