var mongoose = require('mongoose');
var bluebird = require('bluebird');
var logger = require('./logger');

module.exports = function (app, config) {
    logger.log('info', "Loading Mongoose functionality");
    mongoose.Promise = bluebird;
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', function () {
        throw new Error('unable to connect to database at ' + config.db);
});
};
if(process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));

    mongoose.set('debug', true);

    mongoose.connection.once('open', function callback() {
    logger.log('info', 'Mongoose connected to the database');
    });

    app.use(function (req, res, next) {
    logger.log('Request from ' + req.connection.remoteAddress + ' info');
    next();
    });
};