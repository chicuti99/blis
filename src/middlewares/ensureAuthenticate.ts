import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
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
    const jwtSecret = process.env.JWT_SECRET || "";
    const {sub:user_id} = verify(token,jwtSecret) as IPayload;
    const prisma = new PrismaClient()
    const user = await prisma.user.findFirst({
        where:{id: user_id}
    })
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