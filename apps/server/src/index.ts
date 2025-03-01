import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello from Express.js in Turbo!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
