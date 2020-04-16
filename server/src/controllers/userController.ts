import {Request,Response} from 'express';

import pool from '../database';

class UserController {

    public async getUser (req:Request,res:Response){
        const {email} = req.body;
        const {pass} = req.body;
        await pool.query('SELECT * FROM user WHERE email=? AND pass=?',[email,pass], function(err, result, fields) {
            if (err) throw err;
            console.log(result.length);
            if(result.length>0){
                res.json(result[0]);
            }else{
                res.status(404).json({text:"The user doesn't exists"});
            }
        });
    }
    public async createUser (req:Request,res:Response){
        await pool.query('INSERT INTO user set ?',[req.body],function(err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
        res.json({text:'User register'});
    }
}

export const userController =new UserController();