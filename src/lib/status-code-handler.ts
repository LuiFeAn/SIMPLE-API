import { Request, Response } from "../interfaces/http";

export default function StatusCodeHandler(req: Request, res: Response){

    res.sendStatus = function(statusCode){

        res.writeHead(statusCode);
        
        res.end();

    }

}