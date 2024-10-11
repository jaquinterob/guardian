import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Ward extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'Stake', required: true })
  stakeId: Types.ObjectId;
}

export const WardSchema = SchemaFactory.createForClass(Ward);
