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
          if (!response.status === 200) {
            res.json("error en descripcion");
          } else if (response.status === 200) {
            const description = response.data;
            return res.json(detail.createDetailData(data, description));
          }
        })
        .catch((err) => {
          if (err.response) {
            console.log("error in detail");
          }
        });
    })
    .catch((err) => {
      res.json({ triggerError: true, message: err });
    });
});

router.route("/items").get((req, res) => {
  const searchQuery = req.query.q;
  axios
    .get("https://api.mercadolibre.com/sites/MLA/search?q=" + searchQuery)
    .then((response) => {
      const data = response.data.results.slice(0, 4);
      const cat = response.data.filters;
      const catData = (x) => {
        if (cat.length > 0) {
          return x.find((x) => x.id === "category").values[0].path_from_root;
        }
      };
      const sendInfo = list.createListData(data, catData(cat));
      res.json(sendInfo);
    })
    .catch((error) => {
      res.send("error de list -> " + error);
    });
});
module.exports = router;
