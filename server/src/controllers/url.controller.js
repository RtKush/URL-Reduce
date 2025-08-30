// const express = require("express");
// const router = express.Router();
// const validUrl = require("valid-url");
// const shortid = require("shortid");
// const { URLModel } = require("../models/url.model");
// const { generateShortId } = require("../utils");

// const baseUrl = process.env.BASEURI;


// const generateUniqueShortId = async () => {
//     let shortId;
//     let existingURL;

//     while (true) {
//         shortId = generateShortId();
//         existingURL = await URLModel.findOne({ urlCode: shortId });

//         if (!existingURL) {
//             break;
//         }
//     }
//     return shortId;
// };


// router.post("/shorten", async (req, res) => {
//     const { longUrl, urlCode } = req.body;

//     try {

//         if (!validUrl.isUri(longUrl)) {
//             return res.status(401).json({ error: "Invalid Url" });
//         }


//         if (urlCode) {
//             const existingCodeBookmark = await URLModel.findOne({ urlCode });

//             if (existingCodeBookmark) {
//                 return res.status(400).json({ error: `Code ${urlCode} already in use. Please choose a different code.` });
//             }
//         }

//         const existingURL = await URLModel.findOne({ longUrl });

//         if (existingURL && !urlCode) {
//             return res.json({ urlCode: existingURL.urlCode });
//         }

//         let generatedCode;
//         if (!urlCode) {
//             generatedCode = await generateUniqueShortId();
//         } else {
//             generatedCode = urlCode;
//         }
//         const shortUrl = `${baseUrl}/${generatedCode}`;

//         const newURL = new URLModel({
//             urlCode: generatedCode,
//             longUrl,
//             shortUrl,
//         });
//         await newURL.save();
//         res.status(201).json({ urlCode: generatedCode });
//     } catch (error) {
//         console.error('Error shortening URL:', error);
//         res.status(500).json({ error: 'Failed to shorten URL' });
//     }

// });

// module.exports = router;





const validUrl = require("valid-url");
const { URLModel } = require("../models/url.model");
const shortid = require("shortid");

const baseUrl = process.env.BASEURI;

// POST /api/url/shorten
const shortenUrl = async (req, res) => {
  const { longUrl } = req.body;

  if (!validUrl.isUri(longUrl)) {
    return res.status(401).json({ error: "Invalid long URL" });
  }

  try {
    let url = await URLModel.findOne({ longUrl });
    if (url) {
      return res.json(url);
    } else {
      const urlCode = shortid.generate();
      const shortUrl = `${baseUrl}/${urlCode}`;

      url = new URLModel({
        longUrl,
        shortUrl,
        urlCode,
      });

      await url.save();
      res.json(url);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
};

// GET /api/url/:shortId
const getUrl = async (req, res) => {
  try {
    const url = await URLModel.findOne({ urlCode: req.params.shortId });
    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("No URL Found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
};

module.exports = { shortenUrl, getUrl };
