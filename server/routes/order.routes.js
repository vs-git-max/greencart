import { Router } from "express";
import authUser from "../middleware/auth.middleware.js";
import placeCODOrder from "../controllers/order/placeCODOrder.js";
import getUserOrders from "../controllers/order/getUserOrders.js";
import getAllAdminOrders from "../controllers/order/getAdminOrders.js";
import isAdminAuth from "../controllers/admin/isAdmin.js";

const orderRoutes = Router();

orderRoutes.post("/place-order", authUser, placeCODOrder);
orderRoutes.get("/user-orders", authUser, getUserOrders);
orderRoutes.get("/get-admin-orders", isAdminAuth, getAllAdminOrders);

export default orderRoutes;
