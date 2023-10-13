declare module "http" {

    interface IncomingMessage {

      body: any

    }

    interface ServerResponse{

      sendStatus(statusCode: number): void

      json(data: any, statusCode?: number): void

    }

}

  