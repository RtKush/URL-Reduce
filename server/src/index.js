// const express = require('express');
// const redirect = require('./controllers/redirects.controller');
// const url = require('./controllers/url.controller');
// var cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.status(200).json({ Message: 'Hi there' });
// });

// app.use('/', redirect);
// app.use('/api/url', url);


// module.exports = app;

// const express = require("express");
// const cors = require("cors");

// const redirectRoutes = require("./routes/redirect.routes");
// const urlRoutes = require("./routes/url.routes");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).json({ Message: "Hi there" });
// });

// // use routers
// app.use("/", redirectRoutes);
// app.use("/api/url", urlRoutes);

// module.exports = app;

// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Hi there, URL Shortener API running!" });
// });

// app.use("/", require("./routes/redirect.routes"));
// app.use("/api/url", require("./routes/url.routes"));

// module.exports = app;



const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hi there, URL Shortener API running!" });
});

// Routes
app.use("/", require("./routes/redirect.routes"));
app.use("/api/url", require("./routes/url.routes"));

module.exports = app;
