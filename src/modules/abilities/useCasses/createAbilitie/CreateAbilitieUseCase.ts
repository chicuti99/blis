import  "reflect-metadata"
import { ICreateAbilitieDTO } from "../../repositories/IAbilitiesRepository";
import { AppError } from "../../../../errors/AppError";
import { PrismaClient } from "@prisma/client";
 interface IRequest {
    name:string;
 }

 class CreateAbilitieUseCase {

    
    async execute({name}:IRequest):Promise<void>{
         const prisma = new PrismaClient();
        const AbilitieExists = await prisma.ability.findFirst({
         where: {name}
        });

        if(AbilitieExists){
         throw new AppError("Categoria ja existe");
        }

        await prisma.ability.create({
            data: {
               name:name,
               active:true
            }
        })
    
    }
 }

 export { CreateAbilitieUseCase}