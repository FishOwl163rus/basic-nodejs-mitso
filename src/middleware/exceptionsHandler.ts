import { NextFunction, Request, Response } from "express";

export const exceptionsHandler = (err: Error, _req: Request, res: Response, next: NextFunction) => {
  if (!err) {
    return next();
  }
  res.status(500).send('500: Internal server error');
}
