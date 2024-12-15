import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.router";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.route";

const router = Router();


router.use("/categories",categoriesRoutes);
router.use("/specifications",specificationsRoutes);
router.use("/users",usersRoutes);
router.use(authenticateRoutes);


export {router}