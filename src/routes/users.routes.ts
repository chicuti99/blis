import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { UpdateUserDocumentsController } from "../modules/accounts/useCases/updateUserDocuments/UpdateUserDocumentsController";
import uploadConfig from "../config/upload";
import { CreateUserAbilitieController } from "../modules/accounts/useCases/createUserAbilities/CreateUserAbilitieController";
import { DeleteUserAbilitie } from "../modules/accounts/useCases/deleteUserAbility/DeleteUserAbilitie";
import { ListUserAbilitiesController } from "../modules/accounts/useCases/listUserAbilities/ListUserAbilitiesController";

const usersRoutes = Router();


const uploadDocuments = multer(uploadConfig.upload("./tmp/documents"));

const updateUserDocumentsController = new UpdateUserDocumentsController();
usersRoutes.post("/documents",ensureAuthenticate,uploadDocuments.single("documents"),updateUserDocumentsController.handle);
//feito

const createUserController = new CreateUserController();
usersRoutes.post("/",createUserController.handle);
//feito

const createUserAbilitieController = new CreateUserAbilitieController();
usersRoutes.post("/abilities", ensureAuthenticate,createUserAbilitieController.handle);
//feito

const deleteUserAbilitie = new DeleteUserAbilitie()
usersRoutes.delete("/abilities",ensureAuthenticate,deleteUserAbilitie.delete);
//julguei que não precisava

const listUserAbilitiesController = new ListUserAbilitiesController();
usersRoutes.get("/abilities", ensureAuthenticate, listUserAbilitiesController.handle);
//coloquei algumas regras arbitrarias para fins de demonstração


export {usersRoutes}