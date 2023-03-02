import mongoose from 'mongoose';
import createSchema from './createSchema';

const { String, Number, Boolean, ObjectId, Mixed } = mongoose.Schema.Types;

export const userSchema = {
  someList: [
    createSchema(
      {
        id: { type: Number },
        paths: [
          createSchema(
            { path: { type: String }, type: { type: String } },
            { _id: false, id: false },
          ),
        ],
      },
      { _id: false, id: false },
    ),
  ],
};
