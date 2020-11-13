import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { UserInput } from './user.input';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: UserInput): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
    
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
 
  // async update(nameInput:UserInput):Promise<User>{

  //  return await this.userModel.findOneAndUpdate({ name:nameInput.name }, {age:"3" });

  // }
}