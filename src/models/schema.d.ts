import mongoose from 'mongoose';

export type Schema<T> = {
  [key in keyof T]: TypeSchema<T[key]>
};

type TypeSchema<T> =
  T extends { type: (typeof mongoose.Schema.Types.String)[] } ? string[] :
  T extends { type: typeof mongoose.Schema.Types.String } ? string :
  T extends { type: (typeof mongoose.Schema.Types.Number)[] } ? number[] :
  T extends { type: typeof mongoose.Schema.Types.Number } ? number :
  T extends { type: (typeof mongoose.Schema.Types.Boolean)[] } ? boolean[] :
  T extends { type: typeof mongoose.Schema.Types.Boolean } ? boolean :
  T extends { type: any[] } ? any[] :
  T extends { type: any } ? any :
  Schema<T>;

