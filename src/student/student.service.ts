/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import {
  CreateStudentDTO,
  FindStudentReponseDTO,
  StudentResponseDTO,
  UpdateStudentDTO,
} from './dto/students.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  private students = students;
  getStudents(): FindStudentReponseDTO[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentReponseDTO {
    return this.students.find((student) => {
      return student.id === studentId;
    });
  }

  createStudent(payload: CreateStudentDTO): StudentResponseDTO {
    let newStudent = {
      id: uuid(),
      ...payload,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(payload: UpdateStudentDTO, studentId: string) {
    let updatedStudent: StudentResponseDTO;
    const updatedStudentList = this.students.map((student) => {
      if (student.id == studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
        return updatedStudent;
      } else return student;
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }

  getStudentsByTeacherId(teacherId: string): FindStudentReponseDTO[] {
    return this.students.filter((student) => {
      return student.teacher === teacherId;
    });
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentResponseDTO {
    let updatedStudent: StudentResponseDTO;
    const updatedStudentList = this.students.map((student) => {
      if (student.id == studentId) {
        updatedStudent = {
          ...student,
          teacher: teacherId,
        };
        return updatedStudent;
      } else return student;
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }
}
