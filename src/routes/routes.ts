// import type { IncomingMessage, ServerResponse } from "http";
// import { productController } from "../controller/product.controller";

// export const routesHandler = (req: IncomingMessage, res: ServerResponse) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === "/" && method === "GET") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "Welcome to the root route!" }));
//   } else if (url === "/products" && method === "GET") {
//     productController(req, res);
//   } else {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: `Route ${url} with method ${method} not found` }));
//   }
// };
import type { IncomingMessage, ServerResponse } from "http";
import { productController } from "../controller/product.controller";

export const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
  // console.log(req.url); // '/', '/user', '/products'
  // console.log(req.method); // "GET" , "POST" , "Delete"

  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    // console.log("This is Root route");
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "This is root route" }));
  } else if (url?.startsWith("/products")) {
    productController(req, res);
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found!" }));
  }
};