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
    }

}

export default orderRoute;