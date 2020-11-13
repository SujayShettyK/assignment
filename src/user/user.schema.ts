import { Query } from '@nestjs/common';
import { Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop(()=>Int)
  age: number;

  @Prop()
  country_id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
