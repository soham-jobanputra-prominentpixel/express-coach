import express from "express";
import console from "node:console";

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
