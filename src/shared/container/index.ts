import  "reflect-metadata"
import { container } from "tsyringe";
import { ICategoryRepositorie } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationRepository";
import {IUsersRepository} from "../../modules/accounts/repositories/IUsersRepository"
import {UsersRepository} from "../../modules/accounts/repositories/implementations/UsersRepository"


container.registerSingleton<ICategoryRepositorie>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)