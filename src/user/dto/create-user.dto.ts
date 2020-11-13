
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateUserDto {
  @Field(()=>ID)
  readonly id: string;

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

}