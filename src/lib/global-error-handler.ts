import { ApiError } from "../errors/api-error";

import { Request, Response } from "../interfaces/http";

export default function GlobalErrorHandler(error: any, req: Request, res: Response){

    if( error instanceof ApiError ){

       res.json({
        error: error.message,
        statusCode: error.statusCode
       });
        
    }

}