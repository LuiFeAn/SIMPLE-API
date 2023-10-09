import './env-module';

import { createServer} from 'http';

const PORT_ = process.env.SERVER_WEB_PORT;

import RouteHandler from './lib/route-handler';

import GlobalErrorHandler from './lib/global-error-handler';

const server = createServer(( req, res ) => {

    RouteHandler(req,res);

    process.on('uncaughtException', (err) => GlobalErrorHandler(err,req,res) )

});

server.listen(PORT_, () => console.log(`Server started at port ${PORT_}`) );