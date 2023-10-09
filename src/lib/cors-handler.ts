import { Request, Response } from "../interfaces/http";

export default function CorsHandler(req: Request, res: Response){

    res.setHeader('Access-Control-Allow-Origin', '*');

}