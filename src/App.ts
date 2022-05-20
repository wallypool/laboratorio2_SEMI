import dotenv from "dotenv";
import express, {Express} from "express";

dotenv.config();

class App{
    private app: Express;
    private port: number;
    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT) || 8000;
        this.configure();
        this.startModules();

    }
    private configure(){
        this.app.use(express.json());
        this.app.use(express.urlencoded());

    }
    private startModules() {
        console.log("Load Modules!!!");
        //code of the different project modules
        this.app.use("/",(request,response) =>{
            response.send("Hola el servidor esta corriendo en el puerto 8000");
        })
        
    }

    public getApp(){
        return this.app;
}
public getPort(){
        return this.port


}

}
export default App;