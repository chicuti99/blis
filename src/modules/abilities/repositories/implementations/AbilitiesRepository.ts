import { IAbilitieRepositorie,ICreateAbilitieDTO } from "../IAbilitiesRepository";


class CategoriesRepository implements IAbilitieRepositorie{
    
 

    async create({name,description}:ICreateAbilitieDTO) : Promise<void>{

    }

    async list() : Promise<void>{
    }

    async findByName(name:string) {
    }
}

export {CategoriesRepository}