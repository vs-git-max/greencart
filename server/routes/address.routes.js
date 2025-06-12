import { Router } from "express";
import authUser from "../middleware/auth.middleware.js";
import addAddress from "../controllers/address/addAddress.js";
import getAddress from "../controllers/address/getAddress.js";

const addressRouter = Router();

addressRouter.post("/add-address", authUser, addAddress);
addressRouter.get("/get-address", authUser, getAddress);

export default addressRouter;
