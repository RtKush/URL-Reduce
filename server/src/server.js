// const connect = require('./configs/db');
// const app = require('./index');
// require("dotenv").config();
// const PORT = process.env.PORT || 3000;


// app.listen(PORT, async () => {
//     try {
//         await connect().then(() => {
//             console.log("Connected to MongoDB")});
//         console.log(`Server is running on ${PORT}`);

//     } catch (error) {
//         console.log(error.message);
//     }
// });

// const connect = require("./configs/db");
// const app = require("./index");
// require("dotenv").config();

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, "0.0.0.0", async () => {
//   try {
//     await connect();
//     console.log(`🚀 Server running at http://0.0.0.0:${PORT}`);
//   } catch (e) {
//     console.error("Server error:", e.message);
//   }
// });


const app = require("./index");
const connect = require("./configs/db");
const serverless = require("serverless-http");

// Connect DB when cold start
connect()
  .then(() => console.log("✅ DB connected"))
  .catch((err) => console.error("❌ DB connection error:", err.message));

module.exports = app;
module.exports.handler = serverless(app);
