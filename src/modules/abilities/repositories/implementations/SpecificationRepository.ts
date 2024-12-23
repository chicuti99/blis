
import { ISpecificationRepository,ICreateSpecificationDTO} from "../ISpecificationRepository";


class SpecificationsRepository implements ISpecificationRepository {

    async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
        // const specification = this.repository.create({
        //     description,
        //     name
        // })

        // await this.repository.save(specification)
    }

    async findByName(name: string): Promise<void> {
        // const specification = this.repository.findOne({name});
        // return specification
    }
}

export {SpecificationsRepository}