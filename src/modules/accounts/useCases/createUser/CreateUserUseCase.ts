import { inject, injectable } from "tsyringe";
import {ICreateUserDTO} from "../../dtos/ICreateUserDTO"
import {IUsersRepository} from "../../repositories/IUsersRepository"
import {hash} from "bcrypt"
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserUseCase{
    constructor(@inject("UsersRepository") private usersRepository: IUsersRepository){}

    async execute({driver_license,email,name,password}:ICreateUserDTO):Promise<void>{
        const emailAlreadyExists = await this.usersRepository.findByEmail(email)
        if(emailAlreadyExists){
            throw new AppError("user already exists");
        }
        const passwordHash = await hash(password,8);
        await this.usersRepository.create({
            name,
            email,
            driver_license,
            password:passwordHash
        })
    }
}

export {CreateUserUseCase}