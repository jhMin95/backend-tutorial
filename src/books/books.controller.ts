import {NextFunction, Request, RequestHandler, Response} from 'express';
import * as BooksService from './books.service';

export const search: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
    const msg: string = typeof req.query.message=== 'string' ? req.query.message: "not string";  
    res.send(await BooksService.search(msg));
}
export const create: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.send("create book api");
}