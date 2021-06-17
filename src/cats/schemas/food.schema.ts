import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ObjectID } from 'bson'

export type FoodDocument = Food & Document;

@Schema()
export class Food {
  @Prop({ type: Types.ObjectId, required: true, default: () => new ObjectID() })
  objectId: string


  @Prop()
  name: string;
}

export const FoodSchema = SchemaFactory.createForClass(Food);