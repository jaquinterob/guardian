import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Ward extends Document {
  @Prop({ required: true })
  name: string;
}

export const WardSchema = SchemaFactory.createForClass(Ward);
