import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './user/user.module';
import { join } from 'path';

@Module({
  imports: [

    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://user:976zMP3TJk8YFUc2@cluster0.yokil.mongodb.net/mongodb1?retryWrites=true&w=majority'
    ),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}