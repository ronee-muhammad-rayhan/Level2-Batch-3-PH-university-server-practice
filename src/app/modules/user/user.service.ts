import config from '../../config';
import { Student } from '../student/student.model';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
import { User } from './user.model';
// import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
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

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  // set generated id
  // userData.id = generateStudentId(admissionSemester);
  if (admissionSemester !== null) {
    // userData.id = generateStudentId(admissionSemester);
    // userData.id = 'await generateStudentId(admissionSemester)';
    console.log({ admissionSemester });
    userData.id = await generateStudentId(admissionSemester);
    console.log(userData);
    // console.log(userData);
  } else {
    // console.error('admissionSemester is null');
    // console.log('admissionSemester is null');
    // console.error('admissionSemester is null');
  }

  // Check for null before using the variable
  // if (admissionSemester !== null) {
  //   processSemester(admissionSemester);
  // } else {
  //   // Handle the case where admissionSemester is null
  // // console.error('admissionSemester is null');
  // }

  // create a user
  // const newUser = await User.create(userData);
  const newUser = await User.create(userData);
  // console.log(userData);
  // console.log(newUser);

  // create a student
  if (Object.keys(newUser).length) {
    // set id, _id as user
    payload.id = newUser.id; //embedding id
    payload.user = newUser._id; //reference _id

    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
