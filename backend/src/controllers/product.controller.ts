import mongoose from "mongoose";
import Product from "../models/Concrete/Product";
import { Request, Response } from "express";

export default class ProductsController {
  public getAllProducts = async (req: Request, res: Response): Promise<any> => {
    try {
      const products = await Product.find();
      res.status(200).json({ success: true, message: "All products are listed", data: products });
    } catch (error: any) {
      console.log("Error in fetching products: ", error.message);
    }
  };

  public createProduct = async (req: Request, res: Response): Promise<any> => {
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
      res.status(400).json({ success: false, message: "Please provide all fields" });
    }
    const product = new Product({ name, price, image });
    try {
      await product.save();
      res.status(201).json({ success: true, message: "product created successfully", data: product });
    } catch (error: any) {
      console.error("Error in create product: ", error.message);
      res.status(500).json({ success: false, message: "server error" });
    }
  };

  public updateProduct = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.body;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(500).json({ success: false, message: "Invalid product id" });
    }

    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true }); // default return old product, new: true return updated product
      return res.status(200).json({ success: true, message: "product updated successfully", data: updatedProduct });
    } catch (error: any) {
      console.log(error.message);
      return res.status(500).json({ success: false, message: "server error" });
    }
  };

  public deleteProduct=async (req: Request, res: Response) => {
    const { id } = req.body;
    if (!id) {
      res.status(400).json({ success: false, message: "Please provide an id" });
    }
  
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "The product deleted successfully." });
    } catch (error: any) {
      console.log(error.message);
      res.status(404).json({ success: false, message: "The product not found" });
    }
  }
}
