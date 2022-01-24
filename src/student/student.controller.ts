import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }

  @Get('/:studentId')
  getStudentById() {
    return 'Get students by id';
  }

  @Post()
  createStudent() {
    return 'Create student';
  }

  @Put('/:studentId')
  updateStudents() {
    return 'Update students by id';
  }
}
