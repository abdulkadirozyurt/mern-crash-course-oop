import mongoose, { Schema } from "mongoose";
import IProduct from "../Abstract/IProduct";

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },

  {
    // timestamps: {
    //   createdAt: true,
    //   updatedAt: true,
    // },
    timestamps: true,
  }
);
//                              Product olarak tekil veririz, mongoose bunu products haline çevirir.
const Product = mongoose.model("Products", productSchema);

export default Product;
