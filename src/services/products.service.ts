import { Product } from '@/interfaces/product.interface';
import productModel from '../models/products.model';

class ProductService{

public products = productModel;

public async findAllProduct(){
    const products:Product[] = await this.products.find();
    return products;
}
    
public async findProductById(id: string){
    console.log(id);
    const product:Product = await this.products.findOne({ProductId: id });

    return product;
}

public async findProductByName(productName: string){
    console.log(productName);
    const products:Product = await this.products.findOne({ProductName: productName });
    return products;
}
 
public async createProduct(product: Product) {
    
    const createdProduct: Product = await this.products.create({ 
        ProductId: product.ProductId,
        ProductName: product.ProductName,
        ProductPrice: product.ProductPrice,
        AvailableQuantity: product.AvailableQuantity,
     });

    return createdProduct;
  }

  public async updateProduct(product: Product) {
    
     await this.products.findOneAndUpdate({ProductId: product.ProductId },{ 
        ProductName: product.ProductName,
        ProductPrice: product.ProductPrice,
        AvailableQuantity: product.AvailableQuantity,
     });
     const updatedProduct: Product = await this.products.findOne({ProductId: product.ProductId });
    return updatedProduct;
  }

  public async deleteProductById(id: string){
    console.log(id);
    const product:Product = await this.products.findOneAndDelete({ProductId: id });

    return product;
}

}
export default ProductService;