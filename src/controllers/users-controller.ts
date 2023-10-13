import { ApiError } from '../errors/api-error';

import { Request, Response } from '../interfaces/http';

import { IUser } from '../mocks/repositories/users-repository';

import * as usersService from '../services/users-service';

export const index = ( req: Request, res: Response)  => {

    const users = usersService.findAll();

    res.json(users);

}

export const store = ( req: Request, res: Response ) => {

    if( !req.body.name ){

        throw new ApiError(400,'Please, send the username');

    }

    if( !req.body.age ){

        throw new ApiError(400,'Please, send the user age');

    }

    usersService.create(req.body as unknown as IUser);
    
    res.sendStatus(204);
    

}