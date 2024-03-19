import { Router } from "express";

export class AuthRoutes {
    static get routes(): Router {
        const router = Router();

        router.get('/monda', (req, res) => {
            res.json('<h1>Auth routes</h1>');
        });

        router.post('/login', (req, res) => {
            res.json('login') 
        });
        router.post('/register', (req, res) => {
            res.json('register')
        });

        return router;
    }
}