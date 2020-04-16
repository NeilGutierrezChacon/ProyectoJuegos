"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        /*
            Establece la configuracion del servido.
                process.env.PORT: Se utiliza para ver si el servicio donde se desplegara el servidor tiene
                puerto predefinido entonces utiliza este caso contrario toma el espablecido a continuacion (3000)
        */
        this.app.set('port', process.env.PORT || 3000);
        /* Para utilizar morgar, normalmente te pide un parametro string */
        this.app.use(morgan_1.default("dev"));
        /* Para utilizar cors */
        this.app.use(cors_1.default());
        /* Para que nuestro servidor pueda trabajar con JSON */
        this.app.use(express_1.default.json());
        /* Para que nuestro servidor pueda trabajar con informacion de formularios */
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use("/api", indexRoutes_1.default);
        this.app.use("/api/games", gamesRoutes_1.default);
        this.app.use("/api/user", userRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
