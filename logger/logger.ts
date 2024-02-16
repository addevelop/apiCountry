const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.metadata(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logger/error.log', level: 'error'}),
        new winston.transports.File({ filename: 'logger/combined.log' }),
    ],
});

export default logger;