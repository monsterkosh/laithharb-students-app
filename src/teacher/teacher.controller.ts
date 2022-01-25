import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { FindTeacherResponseDTO } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  getTeachers(): FindTeacherResponseDTO[] {
    return this.teacherService.getTeacher();
  }

  @Get('/:teacherId')
  getTeachersById(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindTeacherResponseDTO {
    return this.teacherService.getTeacherById(teacherId);
  }
}
