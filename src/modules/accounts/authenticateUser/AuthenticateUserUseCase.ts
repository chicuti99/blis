import { inject, injectable } from "tsyringe";
import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { compare } from "bcrypt";
import {sign} from "jsonwebtoken"
import { AppError } from "../../../errors/AppError";

interface IRequest {
    email:string;
    password:string;
}

interface IResponse{
    user:{
        name:string,
        email:string
    };
    token:string
}

@injectable()
class AuthenticateUserUseCase{
    constructor(@inject("UsersRepository")
                private usersRepository:IUsersRepository){}

    async execute({email,password}:IRequest):Promise<IResponse>{
        const user = await this.usersRepository.findByEmail(email);

        if(!user){
            throw new AppError("usuario ou email incorreto");
        }
        const passwordMatch = await compare(password,user.password);

        if(!passwordMatch){
            throw new AppError("usuario ou email incorreto");
        }

        const token = sign({},"68830aef4dbfad181162f9251a1da51b",{
            subject:user.id,
            expiresIn:"1d"
        });

        const tokenReturn:IResponse = {
            token:token,
            user : {
                name:user.name,
                email:user.email
            }
        } 
        return tokenReturn
    }
}

export {AuthenticateUserUseCase }