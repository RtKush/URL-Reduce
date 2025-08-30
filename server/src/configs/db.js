// const mongoose = require("mongoose");
// require("dotenv").config();

// const DB_URL = process.env.DB_URL;

// const connect = () => {
//     return mongoose.connect(DB_URL);
// };

// module.exports = connect;

const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connect;
