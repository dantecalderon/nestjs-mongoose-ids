import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Food, FoodSchema } from './food.schema';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop({ type: [FoodSchema] })
  favFoods: Food[]
}

export const CatSchema = SchemaFactory.createForClass(Cat);
