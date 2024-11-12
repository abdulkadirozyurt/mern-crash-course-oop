import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./src/models/Concrete/Product";
import express, { Request, Response } from "express";
import MongoDbConfig from "./src/config/MongoDbConfig";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerDefinition from "./swaggerConfig";
import swaggerUi from "swagger-ui-express"
import productRouter from "./src/routes/productRoute";

dotenv.config();
const PORT = 5000;
const app = express();

// middleware
app.use(express.json()); // allows us to acceps json data in the request body

const swaggerSpec = swaggerJSDoc({ swaggerDefinition: swaggerDefinition, apis: ["./index.ts"] });
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/products",productRouter);

app.listen(PORT, () => {
  MongoDbConfig.ConnectDb();
  console.log(`server started at http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
