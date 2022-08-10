import {IsAlphanumeric , IsBoolean, IsNumber} from 'class-validator'

export class CreateOrderDto{
    @IsAlphanumeric()
    public OrderId: string;
  
    @IsAlphanumeric()
    public ProductId: string;
  
    @IsNumber()
    public Quantity: Number;

    @IsNumber()
    public BillAmount: Number;

    @IsBoolean()
    public Status: Boolean = true;
    
}