import express, { Request, Response } from "express";
import Product from "../models/Concrete/Product";
import mongoose from "mongoose";
import ProductsController from "../controllers/product.controller";

const router = express.Router();
const productsController = new ProductsController();

router.get("/",productsController.getAllProducts);

router.post("/", productsController.createProduct);

router.put("/", productsController.updateProduct);

router.delete("/",  productsController.deleteProduct);

export default router;
