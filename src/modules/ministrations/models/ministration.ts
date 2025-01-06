import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export enum MinistrationType {
  CALL = 'call',
  MSG = 'whatsapp message',
  INTERVIEW = 'interview',
}

@Schema({ versionKey: false })
export class Ministration extends Document {
  @Prop({
    required: true,
    default: () => new Date(Date.now() - 5 * 60 * 60 * 1000),
  })
  date: Date;

  @Prop({ required: true, enum: Object.values(MinistrationType) })
  type: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'Bishop', required: true })
  bishopId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Ward', required: true })
  wardId: Types.ObjectId;
}

export const MinistrationSchema = SchemaFactory.createForClass(Ministration);
