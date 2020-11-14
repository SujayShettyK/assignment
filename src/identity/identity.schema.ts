
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IdentityDocument = Identity & Document;

@Schema()
export class Identity {
  @Prop()
  pushToken: string;

  @Prop()
  role: string;

}
export const IdentitySchema = SchemaFactory.createForClass(Identity);
