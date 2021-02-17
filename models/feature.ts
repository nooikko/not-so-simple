import mongoose from 'mongoose';

const FeatureSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
});

export const Feature = mongoose.model('Feature', FeatureSchema);
