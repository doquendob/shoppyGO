import express, { Router } from 'express';
const cors = require ("cors");

interface Options {
    port?: number;
    routes: Router;
}

export class Server {
    public readonly app = express();
    private readonly port: number;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port = 3100, routes } = options;

        this.port = port;
        this.routes = routes;
    }

    async start () {
        
        this.app.use(cors());

        this.app.use(express.json()); // This works for raw body data
        this.app.use(express.urlencoded({ extended: true })); //This works for x www encoded body

        this.app.use( this.routes );

        this.app.listen(this.port, () => {
            console.log(`Server running in port ${this.port}`);
        });
    }
}