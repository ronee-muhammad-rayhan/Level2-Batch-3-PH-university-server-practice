import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    //   const zodParsedData = studentVal
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // console.log(err);
    // res.status(500).json({
    //   success: false,
    //   message: err.message || 'something went wrong',
    //   error: err,
    // });
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
