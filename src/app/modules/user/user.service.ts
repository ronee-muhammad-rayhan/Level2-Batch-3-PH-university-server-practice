import config from '../../config';
import { Student } from '../student/student.model';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
import { User } from './user.model';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is not provided, use default password
  userData.password = password || (config.default_password as string);
  // if (!password) {
  //   user.password = config.default_password as string;
  // }else{
  //   user.password =  password;
  // }

  // set student role
  userData.role = 'student';

  // year semesterCode 4 digit number
  const generateStudentId = (
    payload: TAcademicSemester,
  )

  // set manually generated id
  userData.id = '2030100001';

  // create a user
  const newUser = await User.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    // set id, _id as user
    studentData.id = newUser.id; //embedding id
    studentData.user = newUser._id; //reference _id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
