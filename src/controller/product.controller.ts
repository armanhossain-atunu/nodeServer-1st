import type { IncomingMessage, ServerResponse } from "http";
import { redProducts } from "../service/productService";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;
 const urlPart = url?.split("/");
 const id = urlPart && urlPart[1] === "products" ? Number(urlPart[2]) : null;
//  console.log(id);
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
  } else if (method === "GET" && id ! !== null) {
    const products = redProducts();
    const product = products.find((p: { id: number }) => p.id === id);
    console.log(product);
  }
};
