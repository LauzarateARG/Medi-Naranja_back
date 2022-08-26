const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes/index");
const errorHandler = require("./src/utils/middlewares/errorHandler");
const setHeaders = require("./src/utils/middlewares/setHeaders");
const { conn } = require("./src/models");
const { PORT } = require("./src/utils/config");
const { route } = require("./src/routes/index");
const app = express();

//definimos nuestro headers
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(setHeaders);
//---------------------------------------------------------------------------------------------------------
app.use("/api", routes);

app.get("/",(req,res)=>{
  res.send("Servidor Corriendo correctamente! ")
})
//---------------------------------------------------------------------------------------------------------
//Control de errores
app.use(errorHandler);
//---------------------------------------------------------------------------------------------------------
conn.sync({ force: true }).then(() => {
  console.log(" connected database !");
  app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`);
  });
});
