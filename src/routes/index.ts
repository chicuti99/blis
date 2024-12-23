import { Router } from "express";
import { abilitiesRoutes } from "./abilities.routes";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.route";

const router = Router();


router.use("/abilities",abilitiesRoutes);
router.use("/users",usersRoutes);
router.use(authenticateRoutes);


export {router}