import './env-module';

import { createServer} from 'http';

const PORT_ = process.env.SERVER_WEB_PORT;

import RouteHandler from './lib/route-handler';

import GlobalErrorHandler from './lib/global-error-handler';

import BodyParserHandler from './lib/body-parser-handler';

const server = createServer(async ( req, res ) => {

    process.on('uncaughtException', (err) => GlobalErrorHandler(err,req,res) )

    await BodyParserHandler(req,res);

    RouteHandler(req,res);

});

server.listen(PORT_, () => console.log(`Server started at port ${PORT_}`) );