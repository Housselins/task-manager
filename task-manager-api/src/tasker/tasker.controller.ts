import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskerService } from './tasker.service';
import { CreateTaskerDto } from './dto/create-tasker.dto';

@Controller('tasker')
export class TaskerController {
  constructor(private readonly taskerService: TaskerService) {}

  @Post()
  create(@Body() createUserDto: CreateTaskerDto) {
    return this.taskerService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.taskerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskerService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.taskerService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskerService.remove(+id);
  }
}
