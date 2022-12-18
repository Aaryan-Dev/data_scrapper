const axios = require("axios");
const express = require("express");
const cheerio = require("cheerio");

const { connection } = require("./db");
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  axios("https://finance.yahoo.com/quote/%5ENSEI/history?p=%5ENSEI")
    .then(async (response) => {
      const html = await response.data;
      const $ = await cheerio.load(html);
      const articles = [];

      $(".BdT", html).each(function () {
        const date = $(this).find("td").find("span")[0].children[0].data;
        const open = $(this).find("td").find("span")[1].children[0].data;
        const high = $(this).find("td").find("span")[2].children[0].data;
        const low = $(this).find("td").find("span")[3]?.children[0].data;
        const close = $(this).find("td").find("span")[4]?.children[0].data;
        const adj_close = $(this).find("td").find("span")[5]?.children[0].data;
        const volume = $(this).find("td").find("span")[6]?.children[0].data;
        articles.push({
          date,
          open,
          high,
          low,
          close,
          adj_close,
          volume,
        });
      });
      res.send(articles);
    })
    .catch((err) => res.send(err));
});

app.listen(port, async () => {
  try {
    await connection;
  } catch (err) {
    console.log(err);
  }

  console.log("Active");
});
