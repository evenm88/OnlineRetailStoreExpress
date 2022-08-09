import { model, Schema, Document } from 'mongoose';

var orderSchema:Schema = new Schema({
    OrderId : {
        type: String,
        required: true,
        unique: true,
      },
      Product : {
        type: String,
        required: true,
      },
      Quantity  : {
        type: Number,
        required: true,
      },
      BillAmount  : {
        type: Number,
        required: true,
      },
});

const orderModel = model('order',orderSchema);

export default orderModel;