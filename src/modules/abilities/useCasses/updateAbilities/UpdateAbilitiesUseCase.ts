import { PrismaClient } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    name:string;
    active:boolean;
 }

class UpdateAbilitiesUseCase{
    
    async execute({name,active}:IRequest):Promise<void> {
        const prisma = new PrismaClient();
        const abilitieToUpdate = await prisma.ability.findFirst({
            where:{name}
        });

        if(!abilitieToUpdate){
            throw new AppError("abilitie doesn't exists");
        }

        await prisma.ability.update({
            where: {
                id: abilitieToUpdate.id
            },
            data:{
                name: abilitieToUpdate.name,
                active:active
            }
        })
    }
}

export {UpdateAbilitiesUseCase}