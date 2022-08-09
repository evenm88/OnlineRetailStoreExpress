
import { Product } from '@/interfaces/product.interface';
import productService from '@/services/products.service';
import { json } from 'envalid';
import { NextFunction, Request, Response } from 'express';

class ProductsController {
    public productService = new productService();

    public getProducts = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const findAllProductsData: Product[] = await this.productService.findAllProduct();
    
          res.status(200).json({ data: findAllProductsData, message: 'findAll' });
        } catch (error) {
          next(error);
        }
      };
    
      public findProductById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(JSON.stringify(req.params));
          const findProductsData: Product = await this.productService.findProductById(req.params.id);
          console.log(JSON.stringify(findProductsData));
          res.status(200).json({ data: findProductsData, message: 'findProductByID' });
        } catch (error) {
          next(error);
        }
      };

      public findProductByName = async (req: Request, res: Response, next: NextFunction) => {
        try {

          console.log(JSON.stringify(req.params));
          const findProductsData: Product = await this.productService.findProductByName(req.params.name);
          res.status(200).json({ data: findProductsData, message: 'findProductByname' });
        } catch (error) {
          next(error);
        }
      };

      public createProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(JSON.stringify(req.body));
            const createdProduct: Product = await this.productService.createProduct(req.body);
            res.status(201).json({ data: createdProduct, message: 'create product' });
        } catch (error) {
          next(error);
         }
      };
      
      public updateProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(JSON.stringify(req.body));
            const product: Product = await this.productService.updateProduct(req.body);
            res.status(200).json({ data: product, message: 'Update product' });
        } catch (error) {
          next(error);
         }
      };

      public deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(JSON.stringify(req.params));
            const product: Product = await this.productService.deleteProductById(req.params.id);
            res.status(200).json({ data: product, message: 'Delete product' });
        } catch (error) {
          next(error);
         }
      };

}

export default ProductsController;