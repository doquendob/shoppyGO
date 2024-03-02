import { Request, Response } from "express"

export class AuthController {

    constructor() {

    }

    registerUser = (req: Request, res: Response) => {
        res.json('registered user controller')
    }

    loginUser = async (req: Request, res: Response) => {

    }
}