import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

const findLastStudent = async () => {
    const lastStudent = await User.findOne(
        { role: 'student' },
        { id: 1, _id: 0 },
    )
        .sort({
            createdAt: -1,
        })
        .lean();

    return lastStudent?.id ? lastStudent.id : undefined;
};
export const generateStudentId = async (payload: TAcademicSemester) => {
    let currentId = (0).toString().padStart(4, '0');

    const lastStudentId = await findLastStudent();
    const lastStudentSemesterCode = lastStudentId?.slice(4, 6);
    const lastStudentAdmissionYear = lastStudentId?.slice(0, 4);

    const currentSemesterCode = payload.code;
    const currentAdmissionYear = payload.year;

    if (
        lastStudentId &&
        lastStudentSemesterCode === currentSemesterCode &&
        lastStudentAdmissionYear === currentAdmissionYear
    ) {
        currentId = lastStudentId.substring(6);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

    incrementId = `${payload.year}${payload.code}${incrementId}`;
    return incrementId;
    // console.log(await findLastStudent());
};
