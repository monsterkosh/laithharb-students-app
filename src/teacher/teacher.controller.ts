import { Controller, Get, Param } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All teachers';
  }

  @Get('/:teacherId')
  getTeachersById(@Param('teacherId') teacherId: string) {
    return `Get teacher with id of ${teacherId}`;
  }
}
