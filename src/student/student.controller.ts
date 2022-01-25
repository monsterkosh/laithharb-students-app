import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateStudentDTO,
  FindStudentReponseDTO,
  StudentResponseDTO,
  UpdateStudentDTO,
} from './dto/students.dto';

@Controller('students')
export class StudentController {
  @Get()
  getStudents(): FindStudentReponseDTO[] {
    return 'All students';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string): FindStudentReponseDTO {
    return `Get student with id of ${studentId}`;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDTO): StudentResponseDTO {
    return `Create student with the following data ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudents(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDTO,
  ): StudentResponseDTO {
    return `Update student with id of ${studentId} with data of ${JSON.stringify(
      body,
    )}`;
  }
}
