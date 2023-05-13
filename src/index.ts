import express from "express";
import { config } from "dotenv";

config();

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello");
});

app.listen(port, () => console.log(`listening on port ${port}`));
