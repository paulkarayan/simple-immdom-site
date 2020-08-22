const { readFileSync } = require("fs");
const { join } = require("path");
const file = readFileSync(
  join(__dirname, "_files", "ci.txt"),
  "utf8"
).toString();

module.exports = (req, res) => {
  const { name = "World" } = req.query;
  res.status(200).send(`Hello ${name}! ${file}`);
};
