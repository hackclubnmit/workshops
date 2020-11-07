import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application=express();

const add=(a:number,b:number): number => a+b;
app.get('/', (req:Request,res:Response,next:NextFunction)=>{
console.log(add(5,5))
    res.send("Hello");
});

app.listen(5000,()=> console.log('Server running'));

