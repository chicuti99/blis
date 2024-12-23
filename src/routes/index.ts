import { Router } from "express";
import { abilitiesRoutes } from "./abilities.routes";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.route";
import { restCountries } from "./countries.routes";

const router = Router();


router.use("/abilities",abilitiesRoutes);
router.use("/users",usersRoutes);
router.use(authenticateRoutes);
router.use("/countries",restCountries)


export {router}