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


  @Cron('0 00 00 * * 1-7')
   async handleCron() {
    const hello = await this.http.get('https://api.github.com/search/repositories?q=dhiyo')
            .pipe(
                map(response => response.data)
            );

            hello.subscribe(async (res)=>{
             const result = res.items.map(a=>a.html_url);
           
            for(let i=0;i<10;i++){
                const createdTask = new this.taskModel({ repo: result[i]});
                console.log(result[i]);
                await createdTask.save();
            }
        
              
            })
    
  }

  
}
