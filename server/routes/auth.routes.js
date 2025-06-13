import { Router } from "express";
import register from "../controllers/auth/register.js";
import login from "../controllers/auth/login.js";
import logout from "../controllers/auth/logout.js";
import authUser from "../middleware/auth.middleware.js";
import isAuth from "../controllers/auth/checkAuth.js";

const authRouter = Router();
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.get("/is-auth", authUser, isAuth);

export default authRouter;
