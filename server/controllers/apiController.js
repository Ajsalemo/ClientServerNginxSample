const express = require("express");
const router = express.Router();

const apiController = router.get("/", (_, res) => {
  try {
    const neighborhoods = [
      "Forest Hills",
      "Rego Park",
      "Bay Terrance",
      "Ozone Park",
      "Woodhaven",
      "Fresh Meadows",
      "Flushings",
      "Floral Park",
      "Queens Village",
      "Rosedale",
      "Little Neck",
      "Howard Beach",
      "Lidenwood",
      "Far Rockaway",
      "Rockaway Park",
      "Maspeth",
    ];
    console.log('Request received.')
    res.json(neighborhoods);
  } catch (error) {
    console.error("An error has occurred: ", error);
    next(error);
  }
});

module.exports = apiController;
