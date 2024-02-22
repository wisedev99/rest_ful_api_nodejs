const winston = require('winston');

// Create a logger instance with a file transport
const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' })
    ]
});

module.exports = logger;
