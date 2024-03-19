import { Router } from "express";

export class AdminRoutes {
    static get routes(): Router {
        const router = Router();

        router.post('/create-product', (req, res) => {
            res.send('<h1>Create Product</h1>');
        });

        return router;
    }

}