import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

const shenaBahini = (name) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //   console.log('i am a shenabahini');
    //   console.log(req.body);
    console.log(`i am a shenabahini and my name is ${name}`);

    //   validation
    // next();
    //   next();
  };
};

router.post(
  '/create-student',
  shenaBahini('validateRequest'),
  UserControllers.createStudent,
);

export const UserRoutes = router;
