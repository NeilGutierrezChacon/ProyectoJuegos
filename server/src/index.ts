import express,{Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import gameRoutes from './routes/gamesRoutes';
import userRoutes from "./routes/userRoutes";
import morgan from 'morgan';
import cors from 'cors';
class Server {
    
    public app:Application;
    
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }

    config():void{
        /* 
            Establece la configuracion del servido.
                process.env.PORT: Se utiliza para ver si el servicio donde se desplegara el servidor tiene
                puerto predefinido entonces utiliza este caso contrario toma el espablecido a continuacion (3000)
        */
        this.app.set('port',process.env.PORT || 3000);
        /* Para utilizar morgar, normalmente te pide un parametro string */
        this.app.use(morgan("dev"));

        /* Para utilizar cors */
        this.app.use(cors());

        /* Para que nuestro servidor pueda trabajar con JSON */
        this.app.use(express.json());

        /* Para que nuestro servidor pueda trabajar con informacion de formularios */
        this.app.use(express.urlencoded({extended:false}));
    }

    routes():void{
        this.app.use("/api",indexRoutes);
        this.app.use("/api/games",gameRoutes);
        this.app.use("/api/user",userRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{

            console.log("Server on port",this.app.get('port'));
        });
    }
}

const server=new Server();

server.start();