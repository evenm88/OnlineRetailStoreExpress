import { Order } from '@/interfaces/order.interface';
import orderService from '@/services/orders.service';
import { NextFunction, Request, Response } from 'express';

class ordersController {
    public orderService = new orderService();

    public getorders = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const findAllordersData: Order[] = await this.orderService.findAllorder();
    
          res.status(200).json({ data: findAllordersData, message: 'findAll' });
        } catch (error) {
          next(error);
        }
      };

}

export default ordersController;