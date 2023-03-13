import mongoose from 'mongoose';

const statsSchema = new mongoose.Schema({
  count_valid: { type: Number },
  count_invalid: { type: Number },
  ratio: { type: Number },
});

const stats = mongoose.model('stats', statsSchema);

export default stats;
