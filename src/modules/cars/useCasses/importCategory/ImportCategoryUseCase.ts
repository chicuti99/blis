import fs from "fs"
import { parse } from "csv-parse"; // Importa a função `parse` diretamente
import { ICategoryRepositorie } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";


interface IImportCategory{
    name:string,
    description:string
}
@injectable()
class ImportCategoryUseCase{
    constructor(@inject("CategoriesRepository") private categoriesRepository:ICategoryRepositorie){}
    loadCategories(file:Express.Multer.File):Promise<IImportCategory[]>{
        return new Promise((resolve,reject)=>{
            const stream = fs.createReadStream(file.path);
            const categories:IImportCategory[] = []
            const parseFile = parse();
            stream.pipe(parseFile);
            
            parseFile.on("data", async(line)=>{
                const [name,description] = line;
                categories.push({
                    name,
                    description
                })
            }).on("end", ()=>{
                fs.promises.unlink(file.path)
                resolve(categories)
            }).on("error", (err)=>{
                console.log(err);
            })
        })
        
    }
    async execute(file:Express.Multer.File):Promise<void>{
        const categories =await  this.loadCategories(file);

        categories.map(async (cat)=>{
            const {name,description}= cat
            const existCat = await this.categoriesRepository.findByName(name);

            if(!existCat){
                await this.categoriesRepository.create({
                    name,
                    description
                })
            }
        })
    }
}

export {ImportCategoryUseCase}