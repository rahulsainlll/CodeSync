import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

function generate() {
  const subset = "1234567890qwertyuiopasdfghjklzxcvbnm";
  const length = 5;
  let id = "";

  for (let i = 0; i < length; i++) {
    id += subset[Math.floor(Math.random() * subset.length)];
  }

  return id;
}

app.post("/deploy", async (req, res) => {
  const repoUrl = req.body.repoUrl;
});

app.listen(3000);
