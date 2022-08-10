import { IsAlphanumeric, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsAlphanumeric()
  public ProductId: string;

  @IsAlphanumeric()
  public ProductName: string;

  @IsNumber()
  public ProductPrice: Number;
  
  @IsNumber()
  public AvailableQuantity: Number;
}
