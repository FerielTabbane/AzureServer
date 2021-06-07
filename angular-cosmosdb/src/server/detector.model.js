const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detectorSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    brand: String,
    model: String,
    expirationDate: Date,
    wiredElectricity: String,
    interconnected:String,
    alarmSystem: String,
    detectionType: String,
    batteryType: String,
    betteryAmount: Number,
    falseAlarm:Number,
    location: String,
    pictureFront: String,
    pictureBack: String
  },
  {
    collection: 'Dectectors'
  }
);

const Detector = mongoose.model('Detector', detectorSchema);

module.exports = Detector;
