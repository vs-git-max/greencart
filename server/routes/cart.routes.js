import { Router } from "express";
import updateCart from "../controllers/cart/updateCart.js";
import authUser from "../middleware/auth.middleware.js";

const cartRoutes = Router();

cartRoutes.post("/update-cart", authUser, updateCart);
export default cartRoutes;
