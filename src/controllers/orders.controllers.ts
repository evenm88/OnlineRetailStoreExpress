import { CreateOrderDto } from '@/dtos/order.dto';
import { Order } from '@/interfaces/order.interface';
import orderService from '@/services/orders.service';
import { NextFunction, Request, Response } from 'express';

class ordersController {
    public orderService = new orderService();

    public getorders = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const findAllordersData: Order[] = await this.orderService.FindAllOrder();
          res.status(200).json({ data: findAllordersData, message: 'findAll' });
        } catch (error) {
          next(error);
        }
      };

      public getordersById = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const order: Order = await this.orderService.FindOrder(req.params.id);
          res.status(200).json({ data: order, message: 'find order by id' });
        } catch (error) {
          next(error);
        }
      };

      public createorder = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const orderData: CreateOrderDto = req.body;
            const createdorder: Order = await this.orderService.CreateOrder(orderData);
            res.status(201).json({ data: createdorder, message: 'create order' });
        } catch (error) {
          next(error);
         }
      };
      
      public updateorder = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const orderData: CreateOrderDto = req.body;
          const order: Order = await this.orderService.UpdateOrder(orderData);
          res.status(200).json({ data: order, message: 'Update order' });
        } catch (error) {
          next(error);
         }
      };

      public deleteorder = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const order: Order = await this.orderService.DeleteOrderById(req.params.id);
            res.status(200).json({ data: order, message: 'Delete order' });
        } catch (error) {
          next(error);
         }
      };
}

export default ordersController;