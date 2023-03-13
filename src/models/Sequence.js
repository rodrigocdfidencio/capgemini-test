import mongoose from 'mongoose';

const sequenceSchema = new mongoose.Schema({
  id: { type: String},
  letters: {
    type: Array,
    required: true,
    unique: true
  },
});

const sequence = mongoose.model('sequence', sequenceSchema);

export default sequence;
