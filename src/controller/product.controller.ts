import type { IncomingMessage, ServerResponse } from "http";
import { redProducts } from "../service/productService";
import type { Iproduct } from "../types/product.type";
import { parseBody } from "../utility/pasBrody";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  console.log("product controller", req);
  const url = req.url;
  const method = req.method;
  //
  const urlPart = url?.split("/");
  const id = urlPart && urlPart[1] === "products" ? Number(urlPart[2]) : null;
  // console.log(id);
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
    // console.log(product);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product found",
        data: product,
      }),
    );
  } else if (method === "POST" && url === "/products") {
    const body = await parseBody(req);
    console.log("body", body);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product found",
        // data: product,
      }),
    );
  }
};
