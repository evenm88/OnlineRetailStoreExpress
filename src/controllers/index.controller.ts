import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("Hi");
      req.statusCode=200;
      res.statusMessage = "Hi all";
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
