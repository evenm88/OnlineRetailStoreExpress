import ProductsController from "@/controllers/products.controllers";
import { Routes } from "@/interfaces/routes.interface";
import { Router } from "express";


class ProductRoute implements Routes{
    path?: string = "/products";
     router: Router= Router();
     productController = new ProductsController();  
    
    constructor(){
        this.InitializeRoutes();
    }
    InitializeRoutes()
    {
        this.router.get(`${this.path}`, this.productController.getProducts);
        this.router.get(`${this.path}/:id`, this.productController.findProductById);
        this.router.get(`${this.path}/name/:name`, this.productController.findProductByName);
        this.router.post(`${this.path}`, this.productController.createProduct);
        this.router.put(`${this.path}`, this.productController.updateProduct);
        this.router.delete(`${this.path}/:id`, this.productController.deleteProduct);
    }

}
export default ProductRoute;