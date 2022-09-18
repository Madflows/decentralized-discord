const express = require("express")
const GUN = require('gun');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 9000;

app.use(cors);

app.use(GUN.serve);

app.get("/", (_, res) => {
  res.status(200).send(">_ DEBUG: Discord Node is Live");
});

const server = app.listen(port, () => {
  console.log(
    `>_ DEBUG: Discord Node is listening at http://localhost:${port}`
  );
});

GUN({ web: server });
