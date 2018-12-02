var winston = require('winston');

const logger = winston.createLogger({
    level: 'silly',
    format: winston.format.json(),
    transports:[
        new.winston.ransports.File({ filename: 'error.log', level: 'error'}),
        new.winston.ransports.File({ filename: 'combined.log', level: 'error'}),
    ]

});

module.exports = logger;