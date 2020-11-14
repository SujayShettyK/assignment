import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class IdentityInput {
  @Field()
  pushToken: string;
  
  @Field()
  role: string;

}