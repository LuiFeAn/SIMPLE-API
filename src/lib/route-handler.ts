import { Request, Response } from "../interfaces/http";

import { routes } from "../routes/main";

export default function RouteHandler(req: Request, res: Response){

    const route = routes.find( route => (
        route.url === req.url && route.method === req.method 
    ));

    if( route ){

        res.setHeader('Content-Type', 'application/json');

        route.handler(req,res);

    }else{

        res.writeHead(404);

    }

}