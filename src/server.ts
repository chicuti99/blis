import  "reflect-metadata" 
import express, { NextFunction ,Request,Response} from "express";
import "express-async-errors";
import { router } from "./routes";
import swaggerUi  from "swagger-ui-express";
import swaggerFIle from '../src/swagger.json';
import "./database";
import "./shared/container"
import { AppError } from "./errors/AppError";
const app = express();

app.use(express.json());

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerFIle))

app.use(router);

app.use(
    
(err:Error,req:Request,res:Response,next:NextFunction) => {

        if(err instanceof AppError){
            return res.status(err.statusCode).json({
                message: err.message
            });
        }

            return res.status(500).json({
                status:"Error",
                message: `internal server error - ${err.message}`
            })
    }
)

app.listen(3333, () => console.log("server is running"));