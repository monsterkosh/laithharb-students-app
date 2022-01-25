import { Controller, Get, Param } from '@nestjs/common';
import { FindTeacherResponseDTO } from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): FindTeacherResponseDTO[] {
    return 'All teachers';
  }

  @Get('/:teacherId')
  getTeachersById(
    @Param('teacherId') teacherId: string,
  ): FindTeacherResponseDTO {
    return `Get teacher with id of ${teacherId}`;
  }
}
