const { Schema, model } = require('mongoose');

const carSchema = new Schema(
  {
    brand: String,
    model: String,
    year: String,
    patent: String,
    color:  String   
  },
  { timestamps: true }
);

module.exports = model('Car', carSchema);
