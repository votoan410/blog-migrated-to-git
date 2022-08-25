import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

const bodyParserConfig = {
  limit: "30mb",
  extended: true,
};

app.use(cors());

app.use(bodyParser.json(bodyParserConfig));
app.use(bodyParser.urlencoded(bodyParserConfig));
app.use("/posts", postRoutes);

// todo:  move the creds to .env
const CONNECTION_URL =
  "mongodb+srv://blog:Password123@cluster0.5szcmgv.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 9000;

const mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(CONNECTION_URL, mongoConfig)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error.message);
  });
