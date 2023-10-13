import { Request, Response } from "../interfaces/http"

export default function JsonParserHandler(req: Request, res: Response){

    res.json = function(data, statusCode = 200){

        res.writeHead(statusCode);

        res.end(JSON.stringify(data));

    }

}