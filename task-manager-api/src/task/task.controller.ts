import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskerService: TaskService) {}

  @Post()
  create(@Body() createUserDto: CreateTaskDto) {
    return this.taskerService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.taskerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
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
