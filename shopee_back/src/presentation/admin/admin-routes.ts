import { Router } from "express";

export class AdminRoutes {
    static get routes(): Router {
        const router = Router();

        router.post('/create-product', (req, res) => {
            res.json({products: 'Books'})
        });

        return router;
    }

}