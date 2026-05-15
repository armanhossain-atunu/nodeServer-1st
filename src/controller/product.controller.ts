import type { IncomingMessage, ServerResponse } from "http";
import { redProducts, writeProducts } from "../service/productService";
import type { Iproduct } from "../types/product.type";
import { parseBody } from "../utility/pasBrody";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;
  const urlPart = url?.split("/");
  const id = urlPart && urlPart[1] === "products" ? Number(urlPart[2]) : null;
 
  // Get ALl Products
  if (url === "/products" && method === "GET") {
    const products = redProducts();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Welcome to the products route! get products controller",
        data: products,
      }),
    );
  }
  // Get Single Product
  else if (method === "GET" && id! !== null) {
    const products = redProducts();
    const product = products.find((p: Iproduct) => p.id === id);
    const singleProduct= product ? product : "No Product Found";
    // console.log(product);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: singleProduct,
      }),
    );
  } 
  // Create Product
  else if (method === "POST" && url === "/products") {
    const body = await parseBody(req);
    const products = redProducts();
    const newProducts = {
      id: Date.now(),...body,
    }
    products.push(newProducts);
    writeProducts(products);
    // console.log("body", newProducts);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product created Successfully",
        data: newProducts,
      }),
    );
  }
  else if (method === "PUT" && id !== null) {
    const body = await parseBody(req);
    const products = redProducts();
    const productIndex = products.findIndex((p: Iproduct) => p.id === id);
    console.log("productIndex", productIndex);
  }
};
