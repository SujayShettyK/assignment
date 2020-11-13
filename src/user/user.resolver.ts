import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import {AgifyService} from './agify/agify.service'
import { UserInput } from './user.input';
import { User } from './user.schema';

@Resolver('Users')
export class UserResolver {
  constructor(private readonly userService: UsersService,
    private readonly agifyService: AgifyService) {}

  @Query(() => String)
  async hello() {
    return 'world';
  }

  @Query(() => [CreateUserDto]) 
  async users() {
    return this.userService.findAll();
  }

  @Mutation(() => CreateUserDto)
  async createUser(@Args('input') input: UserInput) {

(await this.agifyService.getAge(input.name)).subscribe(async (res)=>{
     
     (await this.agifyService.getNation(input.name)).subscribe((res1)=>{
      //error handling need to implemented
       input.age = res.age;
       input.country_id = res1.country[0].country_id;
       this.userService.create(input);
     });
    })
   return input;
  }
}