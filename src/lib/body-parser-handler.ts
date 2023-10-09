import { Request, Response } from "../interfaces/http";

export default function BodyParserHandler(req: Request, res: Response){

    if( req.method === 'POST' ){    
        
        let body = '';

        req.on('data', chunck => body += chunck);

        return new Promise((resolve,reject) => {

            req.on('end', () => {
            
                req.body = JSON.parse(body);

                resolve(null);
        
            } );

        });

    }
}