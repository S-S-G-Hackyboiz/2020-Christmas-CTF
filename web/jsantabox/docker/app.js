const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const Random = require("./components/random/random");
const secret = require("./secret");
const config = require("./config").server;

app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.enable("strict routing");
app.use(express.static(path.join(__dirname, "static", "boxstorages")));

app.get("/", (req, res) => {
  return res.render("index", {
    scriptSrc: currentScript.filename,
    username: currentScript.username,
  });
});

app.post("/", (req, res) => {
  if (!req.body.address) {
    return res.status(200).json({
      result: "fail",
      reason: "what you want?",
    });
  }

  const found = req.body.address === currentScript.boxkey;

  if (!found) {
    return res.status(200).json({
      result: "fail",
      reason: "what you want?",
    });
  }

  return res.status(200).json({ result: "success", present: secret.flag });
});

app.listen(config.port, config.host, () => {
  console.log(`listening on port ${config.port} ...`);
});

let scripts = JSON.parse(
  fs.readFileSync(path.join(__dirname, "static", "report.json"), {
    encoding: "utf-8",
  })
).scripts;

let currentScript;

const setScript = () => {
  currentScriptIndex = Random.number(0, scripts.length - 1);
  currentScript = scripts[currentScriptIndex];
  console.debug(currentScript);
};

setScript();

setInterval(setScript, 60000);
