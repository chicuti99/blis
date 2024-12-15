import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { AppError } from "../errors/AppError";

interface IPayload{
    sub:string
}

export async function ensureAuthenticate(request:Request,response:Response,next:NextFunction){
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError("token não existe",401);
    }

    const [, token] = authHeader.split(" ");

    try{
    const {sub:user_id} = verify(token,"68830aef4dbfad181162f9251a1da51b") as IPayload;
    const usersRepository = new UsersRepository();
    const user =await usersRepository.findById(user_id);
    
    if(!user){
        throw new AppError("não tem esse usuario",401);
    }

    request.user = {
        id:user_id
    }
    next();

    }
    catch{
        throw new AppError("token invalido",401);
    }

}