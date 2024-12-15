import { Category } from "../../entities/category";
import { ICreateCategoryDTO, ICategoryRepositorie } from "../ICategoriesRepository";
import { getRepository, Repository } from "typeorm";


class CategoriesRepository implements ICategoryRepositorie{
    
    private repository:Repository<Category>;
    private static INSTANCE: CategoriesRepository;

    constructor() {
        this.repository = getRepository(Category);
    }

    // public static getInstance(): CategoriesRepository{
    //     if(!CategoriesRepository.INSTANCE){
    //         CategoriesRepository.INSTANCE = new CategoriesRepository();
    //     }
    //     return CategoriesRepository.INSTANCE;
    // }

    async create({name,description}:ICreateCategoryDTO) : Promise<void>{
        const category = this.repository.create({
            description,
            name
        })
        await this.repository.save(category)
    }

    async list():Promise<Category[]>{
        const category = await this.repository.find();
        return category
    }

    async findByName(name:string):Promise<Category> {
        const category = await this.repository.findOne({name})
        return category;
    }
}

export {CategoriesRepository}