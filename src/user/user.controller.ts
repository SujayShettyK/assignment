import { Controller, Get, Post } from '@nestjs/common';
import { AgifyService } from './agify/agify.service';
import {UsersService} from './user.service'


@Controller('users')
export class UsersController {
    constructor(private agifyService: AgifyService){

    }

  // @Post()
  // create(): string {
  //   return 'This action adds a new user';
  // }

  
  // @Get()
  //   async getAge(){
  //       return await this.agifyService.getAge();

  //   }

}