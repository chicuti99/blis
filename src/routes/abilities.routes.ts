import {Router} from 'express';
import { CreateAbilitieController } from '../modules/abilities/useCasses/createAbilitie/CreateAbilitieController';
import multer from 'multer';
import { UpdateAbilitiesController } from '../modules/abilities/useCasses/updateAbilities/ListCategoriesController';
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const abilitiesRoutes = Router();

const upload = multer({
    dest:"./tmp"
})


abilitiesRoutes.use(ensureAuthenticate);

const createAbilitiesController = new CreateAbilitieController();
abilitiesRoutes.post("/",createAbilitiesController.handle);

const updateAbilitiesUseCase = new UpdateAbilitiesController();   
abilitiesRoutes.put("/",updateAbilitiesUseCase.handle)
export {abilitiesRoutes}