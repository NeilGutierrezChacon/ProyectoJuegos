"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UserController {
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.body;
            const { pass } = req.body;
            yield database_1.default.query('SELECT * FROM user WHERE email=? AND pass=?', [email, pass], function (err, result, fields) {
                if (err)
                    throw err;
                console.log(result.length);
                if (result.length > 0) {
                    res.json(result[0]);
                }
                else {
                    res.status(404).json({ text: "The user doesn't exists" });
                }
            });
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO user set ?', [req.body], function (err, result, fields) {
                if (err)
                    throw err;
                console.log(result);
            });
            res.json({ text: 'User register' });
        });
    }
}
exports.userController = new UserController();
