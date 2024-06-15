// import mongoose from 'mongoose';
// import config from '../../config';
// import { AcademicSemester } from '../academicSemester/academicSemester.model';
// import { TStudent } from '../student/student.interface';
// import { Student } from '../student/student.model';
// import { TUser } from './user.interface';
// import { User } from './user.model';
// import { generateStudentId } from './user.utils';
// import AppError from '../../utils/appError';

// // const createStudentIntoDB = async (password: string, payload: TStudent) => {
// //     // create new user
// //     const userData: Partial<TUser> = {};

// //     // default password use:
// //     userData.password = password || (config.default_password as string);

// //     // set student role
// //     userData.role = 'student';

// //     // Find academic semester info
// //     const admissionSemester = await AcademicSemester.findById(
// //         payload.admissionSemester,
// //     );
// //     // set manual id
// //     userData.id = await generateStudentId(admissionSemester);

// //     const session = await mongoose.startSession();
// //     try {
// //         session.startTransaction();
// //         // create user
// //         const newUser = await User.create([userData], { session });

// //         // create student
// //         if (!newUser.length) {
// //             throw new AppError(500, 'User not created');
// //         }
// //         payload.id = newUser[0].id;
// //         payload.user = newUser[0]._id;

// //         const newStudent = await Student.create([payload], { session });

// //         if (!newStudent.length) {
// //             throw new AppError(500, 'Student not created');
// //         }

// //         await session.commitTransaction();
// //         session.endSession();
// //         return newStudent;
// //     } catch (error) {
// //         await session.abortTransaction();
// //         session.endSession();
// //         throw error;
// //     }
// // };

// export const UserService = {
//     createStudentIntoDB,
// };
