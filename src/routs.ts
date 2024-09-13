import express, { NextFunction, Request, Response } from 'express';

const router = express.Router();




const middleware = (req:Request, res:Response, next : NextFunction)=>{
    const name = 'Hriday Paul';
    req.user = name;
    next();
}

router.post('/post', (req:Request, res:Response)=>{
    res.status(200).send({message : 'ok message'})
})

export default router;