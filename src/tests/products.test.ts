// import mongoose from 'mongoose';
// import ProductsRoute from '@routes/products.route';
// import App from '@/app';
// import  request from 'supertest';

// describe('[GET] /products/:id', () => {
//     it('response findOne product', async () => {
//       const id = 'Pro0001';

//       const productsRoute = new ProductsRoute();
//       const products = productsRoute.productController.productService.products;

//       products.findOne = jest.fn().mockReturnValue({
//         ProductId: 'Pro0001',
//         ProductName: 'Dew',
//         ProductPrice: 12.00,
//         AvailableQuantity: 10,
//         Status: true,
//       });

//       (mongoose as any).connect = jest.fn();
//       const app = new App([productsRoute]);
//       return request(app.getServer()).get(`${productsRoute.path}/${id}`).expect(200);
//     });
//   });