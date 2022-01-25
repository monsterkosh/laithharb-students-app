import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  CreateStudentDTO,
  FindStudentReponseDTO,
  StudentResponseDTO,
  UpdateStudentDTO,
} from './dto/students.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  // NO ENTIENDO - 1
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): FindStudentReponseDTO[] {
    // *1
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): FindStudentReponseDTO {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDTO): StudentResponseDTO {
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudents(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdateStudentDTO,
  ): StudentResponseDTO {
    return this.studentService.updateStudent(body, studentId);
  }
}
