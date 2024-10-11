import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Stake extends Document {
  @Prop({ required: true })
  name: string;
}

export const StakeSchema = SchemaFactory.createForClass(Stake);
