

interface ICreateSpecificationDTO{
    name:string;
    description:string;
}


interface ISpecificationRepository {
    create({description,name} : ICreateSpecificationDTO): Promise<void>;
    findByName(name:string): Promise<void>;
}

export {ISpecificationRepository,ICreateSpecificationDTO}