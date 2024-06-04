import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
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

  @Get('verify')
  findOne(@Query('email') email: string, @Query('password') password: string) {
    return this.taskerService.findOne(email, password);
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
