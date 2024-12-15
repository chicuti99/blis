import {Router} from 'express';
import { CreateCategoryController } from '../modules/cars/useCasses/createCategory/CreateCategoryController';
import { listCategoriesController } from '../modules/cars/useCasses/listCategories';
import multer from 'multer';
import { ImportCategoryController } from '../modules/cars/useCasses/importCategory/ImportCategoryController';
import { ListCategoriesController } from '../modules/cars/useCasses/listCategories/ListCategoriesController';
const categoriesRoutes = Router();

const upload = multer({
    dest:"./tmp"
})

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController(); 
const listCategoriesUseCase = new ListCategoriesController();   

categoriesRoutes.post("/",createCategoryController.handle)

categoriesRoutes.get("/",listCategoriesController.handle)

categoriesRoutes.post("/import",upload.single("file"),importCategoryController.handle)
export {categoriesRoutes}