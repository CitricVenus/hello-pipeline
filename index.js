const express = require("express");
const app = express();
app.get("/", (_, res) => res.send("¡Deploy automatizado OK! todo bien"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
