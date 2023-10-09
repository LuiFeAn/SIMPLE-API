import usersRepository, { IUser } from "../mocks/repositories/users-repository";

import { ApiError } from "../errors/api-error";

export const findAll = () => usersRepository.findAll();

export const create = (userDto: IUser) => {

    const user = usersRepository.findOneByName(userDto.name);

    if( user ){
        
        throw new ApiError(409,`User "${user.name}" already exists`);

    }

    usersRepository.insert(userDto);

}