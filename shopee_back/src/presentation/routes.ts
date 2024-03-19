import { Router } from "express";
import { AuthRoutes } from "./auth/auth-routes";
import { AdminRoutes } from "./admin/admin-routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/auth', AuthRoutes.routes);

        router.use('/api/admin', AdminRoutes.routes);

        router.use((req, res) => res.status(404).json({message: 'Not found'}));

        return router;
    }
}