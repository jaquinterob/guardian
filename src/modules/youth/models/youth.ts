import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

@Schema({ versionKey: false })
export class Youth extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  dateOfBirth: Date;

  @Prop({ required: true })
  cellphone: string;

  @Prop({ required: true, enum: Object.values(Gender) })
  gender: string;

  @Prop({ type: Types.ObjectId, ref: 'Ward', required: true })
  wardId: Types.ObjectId;
}

export const YouthSchema = SchemaFactory.createForClass(Youth);
