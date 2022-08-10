import { CreateProductDto } from '@/dtos/product.dto';
import { Product } from '@/interfaces/product.interface';
import productModel from '../models/products.model';

class ProductService{

public products = productModel;

public async findAllProduct(){
    const products:Product[] = await this.products.find();
    return products;
}
    
public async findProductById(id: string){
    const product:Product = await this.products.findOne({ProductId: id });
    return product;
}

public async findProductByName(productName: string){
    const products:Product = await this.products.findOne({ProductName: productName });
    return products;
}
 
public async createProduct(productData: CreateProductDto) {
    const createdProduct: Product = await this.products.create({ 
        ProductId: productData.ProductId,
        ProductName: productData.ProductName,
        ProductPrice: productData.ProductPrice,
        AvailableQuantity: productData.AvailableQuantity,
     });
    return createdProduct;
  }

  public async updateProduct(productData: CreateProductDto) {
     await this.products.findOneAndUpdate({ProductId: productData.ProductId },{ 
        ProductName: productData.ProductName,
        ProductPrice: productData.ProductPrice,
        AvailableQuantity: productData.AvailableQuantity,
     });
     const updatedProduct: Product = await this.products.findOne({ProductId: productData.ProductId });
    return updatedProduct;
  }

  public async deleteProductById(id: string){
    console.log(id);
    const product:Product = await this.products.findOneAndDelete({ProductId: id });
    return product;
}

}
export default ProductService;