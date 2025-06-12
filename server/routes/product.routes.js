import { Router } from "express";
import addProduct from "../controllers/products/addProduct.js";
import productList from "../controllers/products/productList.js";
import getProduct from "../controllers/products/getProduct.js";
import changeStock from "../controllers/products/changeStock.js";
import authAdmin from "../middleware/auth.admin.js";
import upload from "../configs/cloudinary/multer.js";

const productRoutes = Router();

productRoutes.post(
  "/add-product",
  upload.array([images]),
  authAdmin,
  addProduct
);
productRoutes.get("/get-products", productList);
productRoutes.get("/get-product", getProduct);
productRoutes.put("/change-stock", authAdmin, changeStock);

export default productRoutes;
