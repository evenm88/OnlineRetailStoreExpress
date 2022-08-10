import {IsAlphanumeric , IsNumber} from 'class-validator'

export class CreateOrderDto{
    @IsAlphanumeric()
    public OrderId: string;
  
    @IsAlphanumeric()
    public ProductId: string;
  
    @IsNumber()
    public Quantity: Number;

    @IsNumber()
    public BillAmount: Number;
    
}