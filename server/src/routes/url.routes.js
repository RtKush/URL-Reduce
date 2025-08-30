// const express = require("express");
// const router = express.Router();
// const { shortenUrl, getUrl } = require("../controllers/url.controller");

// // POST /api/url/shorten
// router.post("/shorten", shortenUrl);

// // GET /api/url/:shortId
// router.get("/:shortId", getUrl);

// module.exports = router;
const express = require("express");
const router = express.Router();
const { shortenUrl, getUrl } = require("../controllers/url.controller");

router.post("/shorten", shortenUrl);
router.get("/:shortId", getUrl);

module.exports = router;
