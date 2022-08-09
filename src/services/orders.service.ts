import { Order } from '@/interfaces/order.interface';
import orderModel from '../models/orders.model';

class OrderService{

public orders = orderModel;

public async findAllorder(){
    const orders:Order[] = await this.orders.find();
    return orders;
}
    
}

export default OrderService;