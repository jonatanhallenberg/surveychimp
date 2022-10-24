

import { Request, Response, NextFunction } from 'express';

export const handleGlobalErrors = (e: any, req: Request, res: Response, next: NextFunction) => {
    console.log('handleGlobalErrors');
    if (e.message.startsWith('400')) {
        res.status(400).json({
            message: 'Bad Request',
        });
    }
    else if (e.message.startsWith('401')) {
        res.status(401).json({
            message: 'Unauthorized',
        });
    }
    else if (e.message.startsWith('403')) {
        res.status(403).json({
            message: 'Forbidden',
        });
    } else if (e.message === '404') {
        res.status(404).json({
            message: 'Not Found',
        });
    } else {
        res.status(500).json({
            errorCode: e.code,
            message: e.message,
        });
    }
};
