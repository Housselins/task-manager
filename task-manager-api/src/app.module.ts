import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { TaskerModule } from './tasker/tasker.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';

@Module({
  imports: [AuthModule, SharedModule, TaskerModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
