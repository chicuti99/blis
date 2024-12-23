import { CategoriesRepository } from "../../repositories/implementations/AbilitiesRepository";
import { UpdateAbilitiesController } from "./ListCategoriesController";
import { UpdateAbilitiesUseCase } from "./UpdateAbilitiesUseCase";


const listCategoriesUseCase = new UpdateAbilitiesUseCase();
const updateAbilitiesController = new UpdateAbilitiesController();

export {updateAbilitiesController};