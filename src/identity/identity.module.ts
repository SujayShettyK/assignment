import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IdentityService } from './identity.service';
import { Identity, IdentitySchema } from './identity.schema';
import { UsersService } from 'src/user/user.service';

@Module({
  imports: [HttpModule,MongooseModule.forFeature([{ name: Identity.name, schema: IdentitySchema }])],
  exports:[IdentityService],
  providers: [IdentityService],
})
export class IdentityModule {}
