import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './user.service';
import { User, UserSchema } from './user.schema';
import { UserResolver } from './user.resolver';
import { UsersController } from './user.controller';
import { AgifyService } from './agify/agify.service';
import {IdentityModule} from '../identity/identity.module'
import { IdentityService } from '../identity/identity.service';

@Module({
  imports: [IdentityModule,HttpModule,MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService,UserResolver, AgifyService],
})
export class UsersModule {}