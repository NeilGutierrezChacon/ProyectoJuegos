import {Router} from 'express';
import { userController } from '../controllers/userController'; 
class UserRoutes{
    router: Router = Router();

    constructor(){
        this.config();

    }

    config():void{
        this.router.post('/',userController.getUser);
        this.router.post('/add',userController.createUser);

    }
}

const userRoutes = new UserRoutes();

export default userRoutes.router;