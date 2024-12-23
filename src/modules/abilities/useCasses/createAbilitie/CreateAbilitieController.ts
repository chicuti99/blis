import  "reflect-metadata"
import {Request,Response} from 'express'
import { CreateAbilitieUseCase } from './CreateAbilitieUseCase';
import { container } from 'tsyringe';
import Joi from 'joi';

const abilitieSchema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(50)
      .required()
      .messages({
        "string.base": "The name must be a string.",
        "string.empty": "The name cannot be empty.",
        "string.min": "The name must have at least 3 characters.",
        "string.max": "The name must have at most 50 characters.",
        "any.required": "The name is required.",
      }),
  });
class CreateAbilitieController{

    
    async handle(request:Request,response:Response):Promise<Response>{
    const { error } = abilitieSchema.validate(request.body, { abortEarly: false });
    if (error) {
        return response.status(400).json({
          message: "Validation error",
          details: error.details.map(err => err.message),
        });
      }
    const {name} = request.body;
    const createAbilitieUseCase = container.resolve(CreateAbilitieUseCase)
     await createAbilitieUseCase.execute({name});
   
    return response.status(201).send();
    }
}

export { CreateAbilitieController}