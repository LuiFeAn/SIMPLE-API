import { Request, Response } from '../interfaces/http';

import { IUser } from '../mocks/repositories/users-repository';

import * as usersService from '../services/users-service';

export const index = ( req: Request, res: Response)  => {

    const users = usersService.findAll();

    res.writeHead(200);

    res.end(JSON.stringify(users));

}

export const store = ( req: Request, res: Response ) => {

    let body = '';

    req.on('data', chunck => body += chunck);

    req.on('end', () => usersService.create(JSON.parse(body) as unknown as IUser));

}