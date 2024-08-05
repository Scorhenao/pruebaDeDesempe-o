// middleware que da permisos a usuaros segun su role

import { NextFunction, Request, Response } from 'express';

export const permissionMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { role } = req.user;

    if (role !== 'admin') {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    next();
}