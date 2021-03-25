// Default
const express = require("express");
const app = express();
const router = express.Router();
//libs
const axios = require("axios");
// controllers
const list = require("../controllers/createListData");
const detail = require("../controllers/createDetailData");

router.route("/items/:id").get((req, res) => {
  const param = req.params.id;
  axios
    .get("https://api.mercadolibre.com/items/" + param)
    .then((response) => {
      const data = response.data;
      return axios
        .get("https://api.mercadolibre.com/items/" + param + "/description")
        .then((response) => {
          const description = response.data;
          res.send(detail.createDetailData(data, description));
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/items").get((req, res) => {
  const searchQuery = req.query.q;
  axios
    .get("https://api.mercadolibre.com/sites/MLA/search?q=" + searchQuery)
    .then((response) => {
      const data = response.data.results.slice(0, 4);
      const hola = response.data.filters.find((x) => x.id === "category")
        .values[0].path_from_root;
      const sendInfo = list.createListData(data, hola);
      res.json(sendInfo);
    })
    .catch((error) => {
      console.log(error);
    });
});
module.exports = router;
