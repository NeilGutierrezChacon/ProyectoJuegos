"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', userController_1.userController.getUser);
        this.router.post('/add', userController_1.userController.createUser);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
