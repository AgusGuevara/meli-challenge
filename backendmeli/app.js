// Default
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
// routes
const routes = require("./routes/routes");

//controlers
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

app.listen(port, () => console.log(`Escuchando en puerto ${port}`));
