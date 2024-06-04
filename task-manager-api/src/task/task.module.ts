import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { PrismaService } from 'src/shared';
import { TaskController } from './task.controller';

@Module({
  controllers: [TaskController],
  providers: [TaskService, PrismaService],
})
export class TaskModule {}
