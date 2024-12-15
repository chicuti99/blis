import { inject, injectable } from 'tsyringe';
import { Category } from '../../entities/category';
import {ICategoryRepositorie} from '../../repositories/ICategoriesRepository'

@injectable()
class ListCategoriesUseCase{
    constructor(@inject("CategoriesRepository") private categoriesRepository: ICategoryRepositorie) {
        
    }
    
    async execute():Promise<Category[]> {
        const categories = await this.categoriesRepository.list();
        return categories;
    }
}

export {ListCategoriesUseCase}