import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `Get student with id of ${studentId}`;
  }

  @Post()
  createStudent(@Body() body) {
    return `Create student with the following data ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudents(@Param('studentId') studentId: string, @Body() body) {
    return `Update student with id of ${studentId} with data of ${JSON.stringify(
      body,
    )}`;
  }
}
