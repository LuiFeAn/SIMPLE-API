import { IncomingMessage, ServerResponse } from "http";

export interface Request extends IncomingMessage {}

export interface Response extends ServerResponse<IncomingMessage> {}