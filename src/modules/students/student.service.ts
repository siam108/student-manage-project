import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (student: any) => {
  const studentModel = new Student(student);

  if (await studentModel.isUserExists(student.id)) {
    throw new Error('Student already exists');
  }

  const result = await studentModel.save(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
