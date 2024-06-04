import { Module } from '@nestjs/common';
import { TaskerService } from './tasker.service';
import { TaskerController } from './tasker.controller';
import { PrismaService } from 'src/shared';

@Module({
  controllers: [TaskerController],
  providers: [TaskerService, PrismaService],
})
export class TaskerModule {}
