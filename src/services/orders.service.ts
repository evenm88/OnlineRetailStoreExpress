import { CreateOrderDto } from '@/dtos/order.dto';
import { HttpException } from '@/exceptions/HttpException';
import { Order } from '@/interfaces/order.interface';
import { Product } from '@/interfaces/product.interface';
import productModel from '@/models/products.model';
import { Console } from 'console';
import orderModel from '../models/orders.model';
import ProductService from './products.service';

class OrderService{

public orders = orderModel;
public products = productModel;
public productService = new ProductService();

public async FindAllOrder(): Promise<Order[]>{
    const orders:Order[] = await this.orders.find();
    return orders;
}

public async FindOrder(orderId: String): Promise<Order>{
    const order:Order = await this.orders.findOne({OrderId: orderId}).where({'Status':true});
    if (!order) throw new HttpException(409, "order doesn't exist");
    return order;
}
    
public async CreateOrder(orderData: CreateOrderDto): Promise<Order> {
     const selectedProduct:Product = await this.products.findOne({ProductId: orderData.ProductId });
     if(selectedProduct === null)
        throw new HttpException(400 ,"Product brought in order is not found");

        var remainingQuantity:Number = selectedProduct.AvailableQuantity.valueOf() - orderData.Quantity.valueOf();

        if(remainingQuantity <0)
        throw new HttpException(400 ,"Ordered quantity is not available");

        const createdOrder: Order = await this.orders.create({ 
            OrderId: orderData.OrderId,
            ProductId: orderData.ProductId,
            Quantity: orderData.Quantity,
            BillAmount: orderData.BillAmount,
            Status: true
         });

        selectedProduct.AvailableQuantity = remainingQuantity;
        console.log(JSON.stringify(selectedProduct));
        await this.productService.updateProduct(selectedProduct);

        return createdOrder;
}

  public async UpdateOrder(orderData: CreateOrderDto): Promise<Order> {
    const selectedOrder:Order = await this.orders.findOne({OrderId:orderData.OrderId}).where({'Status':true});;
    if(selectedOrder === null)
        throw new HttpException(409,"Given order id not found");
    await this.orders.findOneAndUpdate({OrderId: selectedOrder.OrderId },{ 
        ProductId: orderData.ProductId,
        Quantity: orderData.Quantity,
        BillAmount: orderData.BillAmount,
     });
     const updatedorder: Order = await this.orders.findOne({OrderId: orderData.OrderId }).where({'Status':true});;
    return updatedorder;
  }

  public async DeleteOrderById(id: string): Promise<Order>{
    //const deletedOrder:Order = await this.orders.findOneAndDelete({OrderId: id });
    const deletedOrder: Order = await this.orders.findOne({OrderId: id }).where({'Status':true});
    if(deletedOrder === null)
        throw new HttpException(409,"Given order id not found");
    await this.orders.findOneAndUpdate({OrderId: deletedOrder.OrderId },{ 
            Status: false
         });
    const selectedProduct:Product = await this.products.findOne({ProductId: deletedOrder.ProductId }).where({'Status':true});
    if(selectedProduct === null)
        throw new HttpException(409,"Product brought in order is not found");
        console.log(JSON.stringify(selectedProduct));
    let remainingQuantity:Number = selectedProduct.AvailableQuantity.valueOf() + deletedOrder.Quantity.valueOf();
    selectedProduct.AvailableQuantity = remainingQuantity;
    console.log(JSON.stringify(selectedProduct));
    await this.productService.updateProduct(selectedProduct);

    return deletedOrder;
}

}

export default OrderService;