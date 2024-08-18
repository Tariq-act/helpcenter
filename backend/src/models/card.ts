import { Schema, model, Document } from "mongoose";

interface ICard extends Document {
  id: string;
  title: string;
  description: string;
}

const cardSchema = new Schema<ICard>(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<ICard>("Card", cardSchema);
