import { Controller, Get, Param, Put } from '@nestjs/common';
import {
  FindStudentReponseDTO,
  StudentResponseDTO,
} from 'src/student/dto/students.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherId') teacherId: string): FindStudentReponseDTO[] {
    return `Get all students that belong to the teacher with an id of ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentResponseDTO {
    return `Update student with if of ${studentId} to teacher with id of ${teacherId}`;
  }
}
