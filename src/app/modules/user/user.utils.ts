import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

// year semesterCode 4 digit number

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      //   role: 'Student',
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  //   203101   0001
  console.log(lastStudent?.id ? lastStudent.id.substring(6) : undefined);
  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};
// export const generateStudentId = (payload: TAcademicSemester) => {
export const generateStudentId = async (payload: TAcademicSemester) => {
  console.log({ payload });
  // first time 0000
  //   0001 => 1
  //   const currentId = (0).toString().padStart(4, '0');
  const currentId = (await findLastStudentId()) || (0).toString();

  // console.log(await findLastStudentId());

  // return findLastStudentId();

  // console.log(await findLastStudentId());
  // const currentId = findLastStudentId();

  // console.log('object');

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
