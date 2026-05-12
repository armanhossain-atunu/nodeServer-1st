import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "src/data/db.json");
export const redProducts = () => {
  // console.log(process.cwd());
  // console.log(filePath);
  const products = fs.readFileSync(filePath, "utf-8");
  // console.log(products.toString());
  console.log(products);
  return JSON.parse(products);
};
