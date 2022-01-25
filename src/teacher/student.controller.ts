import { Controller, Get, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import {
  FindStudentReponseDTO,
  StudentResponseDTO,
} from 'src/student/dto/students.dto';
import { StudentService } from 'src/student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindStudentReponseDTO[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): StudentResponseDTO {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
