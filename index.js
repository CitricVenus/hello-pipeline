const express = require("express");
const app = express();
app.get("/", (_, res) => res.send("¡Deploy automatizado OK!"));
app.listen(process.env.PORT || 3000);
