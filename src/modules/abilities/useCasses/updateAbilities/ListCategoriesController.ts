import "reflect-metadata";
import { Request, Response } from "express";
import { UpdateAbilitiesUseCase } from "./UpdateAbilitiesUseCase";
import { container } from "tsyringe";
import Joi from "joi";

const updateAbilitiesSchema = Joi.object({
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
  active: Joi.boolean()
    .required()
    .messages({
      "boolean.base": "The active field must be a boolean.",
      "any.required": "The active field is required.",
    }),
});

class UpdateAbilitiesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { error } = updateAbilitiesSchema.validate(request.body, { abortEarly: false });
    if (error) {
      return response.status(400).json({
        message: "Validation error",
        details: error.details.map((err) => err.message),
      });
    }

    const { name, active } = request.body;

    const updateAbilitiesUseCase = container.resolve(UpdateAbilitiesUseCase);
    const updatedAbilities = await updateAbilitiesUseCase.execute({ name, active });

    return response.status(200).json({
      message: "Abilities updated successfully.",
      data: updatedAbilities,
    });
  }
}

export { UpdateAbilitiesController };
