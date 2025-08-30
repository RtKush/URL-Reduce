// const mongoose = require('mongoose');

// const URLSchema = new mongoose.Schema({
//     urlCode: {
//         type: String,
//         required: true
//     },
//     longUrl: {
//         type: String,
//         required: true
//     },
//     shortUrl: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: String,
//         default: Date.now
//     }
// },
//     {
//         versionKey: false,
//         timestamps: false,
//     }
// );

// const URLModel = mongoose.model('Url', URLSchema);
// module.exports = { URLModel }

const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  urlCode: { type: String, required: true, unique: true },
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
}, { timestamps: true });

const URLModel = mongoose.model("URL", urlSchema);

module.exports = { URLModel };
