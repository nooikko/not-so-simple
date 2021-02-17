import mongoose, { Document } from 'mongoose';

const BankSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  apr: String,
  cardType: {
    type: String,
    enum: ['Visa', 'Mastercard'],
    default: '',
  },
  description: String,
  website: String,
  ios: String,
  android: String,
  features: [
    {
      name: String,
      description: String,
    },
  ],
});

export interface BankType extends Document {
  name: string;
  apr: string;
  cardType: 'Visa' | 'Mastercard';
  description: string;
  website: string;
  ios: string;
  android: string;
  features: {
    name: string;
    description: string;
  }[];
}

export const Bank = mongoose.model<BankType>('Bank', BankSchema);
