import { Router } from "express";
import adminLogin from "../controllers/admin/admin.login.js";
import isAdminAuth from "../controllers/admin/isAdmin.js";
import adminLogout from "../controllers/admin/admin.logout.js";
import authAdmin from "../middleware/auth.admin.js";

const adminRoutes = Router();

adminRoutes.post("/login", adminLogin);
adminRoutes.get("/is-auth", authAdmin, isAdminAuth);
adminRoutes.get("/logout", adminLogout);

export default adminRoutes;
