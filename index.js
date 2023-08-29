require("dotenv").config();
require("./models/User.model");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000/",
  optionsSuccessStatus: 200,
};

const userRoutes = require("./routes/User.routes");

const productsRoutes = require("./routes/Product.routes");

const paymentRoutes = require("./routes/Payment.routes");

const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Conna:papasfritas131092@clusterdb.o809le3.mongodb.net/tienda');

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

app.use("/products", productsRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    mensaje: "ruta get",
  });
});

app.post("/", (req, res) => {
  res.status(200).json({
    mensaje: "ruta post",
    detail: "",
  });
});

app.put("/", (req, res) => {
  res.status(200).json({
    mensaje: "ruta put",
  });
});
app.delete("/", (req, res) => {
  res.status(200).json({
    mensaje: "ruta delete",
  });
});

app.use("/payment", (req, res) => {
  res.json({
    mensaje: "ruta payment",
  });
});

app.listen(port, () => {
  console.log(`eschuchando en el puerto ${port}`);
});
