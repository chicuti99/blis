import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import {  IUsersRepository} from "../IUsersRepository"

class UsersRepository implements IUsersRepository{
    
    async create({name,driver_license,email,password,id,avatar}: ICreateUserDTO): Promise<void> {
    }

    async findByEmail(email: string): Promise<void> {

    }

    async findById(id: string): Promise<void> {
    }

}

export {UsersRepository}