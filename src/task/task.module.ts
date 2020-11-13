import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksService } from './task.service';
import { ScheduleModule } from '@nestjs/schedule';
import { Task, TasksSchema } from './task.schema';

@Module({
  imports: [ScheduleModule.forRoot(),HttpModule,MongooseModule.forFeature([{ name: Task.name, schema: TasksSchema }])],
  providers: [TasksService],
})
export class TasksModule {}