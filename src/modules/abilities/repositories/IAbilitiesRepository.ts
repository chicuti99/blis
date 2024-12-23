
interface ICreateAbilitieDTO {
    name: string;
    description:string;
}

interface IAbilitieRepositorie {
    findByName(name:string):Promise<void>;
    list():Promise<void>;
    create({name,description}:ICreateAbilitieDTO):Promise<void>;
}
export{IAbilitieRepositorie,ICreateAbilitieDTO}