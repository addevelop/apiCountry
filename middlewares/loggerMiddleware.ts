import { NextFunction, Request, Response } from "express";
import logger from "../logger/logger";

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(req);
    const { method, originalUrl } = req;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let logLevel = 'info';
    let logMessage =  `Requête ${method} reçu sur ${originalUrl} avec l'ip ${ip}`;
    let metaData = {type : "Requête", requête : method, urlOrigine: originalUrl, ip: ip, status: 0};
    logger[logLevel](logMessage, metaData);
    next();

    res.on('finish', () => {
        const { statusCode } = res;
        if (statusCode >= 400 && statusCode < 600)
        {
            logLevel = 'error';
        }
        
        logMessage = `Requête ${method} reçu sur ${originalUrl} avec l'ip ${ip} a retourné le code status ${statusCode}`;
        metaData = {type : "Response", requête : method, urlOrigine: originalUrl, ip: ip, status: statusCode };
        logger[logLevel](logMessage, metaData);
    })

    
}


export default loggerMiddleware;