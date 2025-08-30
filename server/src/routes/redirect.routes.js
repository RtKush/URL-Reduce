// const express = require("express");
// const router = express.Router();
// const { redirectToUrl } = require("../controllers/redirects.controller");

// // GET /:shortId → redirect to original URL
// router.get("/:shortId", redirectToUrl);

// module.exports = router;

const express = require("express");
const router = express.Router();
const { redirectToUrl } = require("../controllers/redirects.controller");

router.get("/:shortId", redirectToUrl);

module.exports = router;
