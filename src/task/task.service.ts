import { HttpService, Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { map } from 'rxjs/operators';
import { Task, TasksDocument } from './task.schema';

@Injectable()
export class TasksService {
  
  constructor(
    @InjectModel(Task.name) private taskModel: Model<TasksDocument>,
    private http: HttpService){
}


  @Cron('5 * * * * *')
   async handleCron() {
    const hello = await this.http.get('https://api.github.com/search/repositories?q=dhiyo')
            .pipe(
                map(response => response.data)
            );

            hello.subscribe((res)=>{
             const result = res.items.map(a=>a.html_url);
           
            
                const createdTask = new this.taskModel(result);
                createdTask.save();
            
                
              
            })
    
  }

  
}
