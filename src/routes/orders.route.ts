import ordersController from "@/controllers/orders.controllers";
import { Routes } from "@/interfaces/routes.interface";
import { Router } from "express";


class orderRoute implements Routes{
    public path?: string = "/orders";
    public router: Router= Router();
    
    public orderController = new ordersController();  
    
    constructor(){
        this.InitializeRoutes();
    }
    InitializeRoutes()
    {
        this.router.get(`${this.path}`, this.orderController.getorders);
        this.router.get(`${this.path}/:id`, this.orderController.getordersById);
        this.router.post(`${this.path}`, this.orderController.createorder);
        this.router.put(`${this.path}`, this.orderController.updateorder);
        this.router.delete(`${this.path}/:id`, this.orderController.deleteorder);
    }

}

export default orderRoute;