import { IsAlphanumeric, IsNumber ,IsBoolean} from 'class-validator';

export class CreateProductDto {
  @IsAlphanumeric()
  public ProductId: string;

  @IsAlphanumeric()
  public ProductName: string;

  @IsNumber()
  public ProductPrice: Number;
  
  @IsNumber()
  public AvailableQuantity: Number;

  @IsBoolean()
  public Status: Boolean = true;
}
