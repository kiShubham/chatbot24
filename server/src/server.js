require("dotenv").config({ path: "src/env" });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/chatbot")
  .then(() => console.log("connected to database🙂"))
  .catch((error) =>
    console.log("facing error in connecting to database", error)
  );

const chatRoutes = require("./routes/chat.routes");

app.get("/", (req, res) => res.send("backend is running"));
app.use("/api/chat", chatRoutes);

const port = 3000;

app.listen(port, () => console.log(`server listening on port ${port}!`));
