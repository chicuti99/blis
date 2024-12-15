import  "reflect-metadata"
import { ICategoryRepositorie } from "../../repositories/ICategoriesRepository";
import { inject,injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
 interface IRequest {
    name:string;
    description:string;
 }

 @injectable()
 class CreateCategoryUseCase {

    constructor(@inject("CategoriesRepository") private categoriesRepository: ICategoryRepositorie) {
        
    }
    
    async execute({name,description}:IRequest):Promise<void>{
        console.log("pelo menos entre");
        const CategoryExists = await this.categoriesRepository.findByName(name);
    if(!CategoryExists) {
        this.categoriesRepository.create({name,description});
    }

    else{
        throw new AppError("categoria ja existe");
    }
    }
 }

 export { CreateCategoryUseCase}