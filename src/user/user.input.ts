import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UserInput {
  [x: string]: any;
  @Field()
  readonly name: string;

  @Field()
  readonly email: string;

  @Field()
  readonly password: string;

  @Field(() =>Int, { nullable: true })
  age: number;

  @Field({nullable:true})
  country_id: string;

  @Field()
  pushToken: string;
  
  @Field()
  role: string;

}