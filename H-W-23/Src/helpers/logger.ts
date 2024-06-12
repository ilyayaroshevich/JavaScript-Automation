import winston from 'winston';
import path from 'path';

const logsDirectory = path.join(path.resolve(__dirname, '..'), 'reports'); 

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), 
        winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`) 
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: path.join(logsDirectory, 'logs.log'), level: 'info' })
    ],
});

export default logger;
