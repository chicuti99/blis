import { ICreateUserDTO } from "../dtos/ICreateUserDTO"




interface IUsersRepository{
    create(data:ICreateUserDTO):Promise<void>
    findByEmail(email:string):Promise<void>
    findById(email:string):Promise<void>
}

export {IUsersRepository}