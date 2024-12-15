import { category } from "../entities/category";

interface ICreateCategoryDTO {
    name: string;
    description:string;
}

interface ICategoryRepositorie {
    findByName(name:string):Promise<category>;
    list():Promise<category[]>;
    create({name,description}:ICreateCategoryDTO):Promise<void>;
}
export{ICategoryRepositorie,ICreateCategoryDTO}