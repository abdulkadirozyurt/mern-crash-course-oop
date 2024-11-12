const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Product API",
    version: "1.0.0",
    description: "A simple API to manage products",
  },
  servers: [
    {
      url: "http://localhost:5000", // API sunucunuzun URL'i
    },
  ],
  components: {
    schemas: {
      Product: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "The product's name",
          },
          price: {
            type: "number",
            description: "The product's price",
          },
          image:{
            type:"string"
          }
        },
        required: ["name", "price"],
      },
    },
  },
  paths: {
    "/api/products": {
      post: {
        summary: "Create a new product",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Product",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Product created successfully",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Product",
                },
              },
            },
          },
          400: {
            description: "Invalid input",
          },
        },
      },
    },
  },
};

export default swaggerDefinition;
