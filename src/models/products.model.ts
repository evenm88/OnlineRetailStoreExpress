import { Product } from '@/interfaces/product.interface';
import { model, Schema, Document } from 'mongoose';

var productSchema:Schema = new Schema({
    ProductId : {
        type: String,
        required: true,
        unique: true,
      },
      ProductName : {
        type: String,
        required: true,
        unique: true,
      },
       ProductPrice : {
        type: Number,
        required: true,
      },
      AvailableQuantity : {
        type: Number,
        required: true,
      },
});

const productModel = model<Product>('product', productSchema);

export default productModel;

