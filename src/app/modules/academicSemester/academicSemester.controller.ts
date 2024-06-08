import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createAcademicSemester = catchAsync(async (req, res) => {
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester successfully created',
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
};
