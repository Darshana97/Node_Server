import express from "express";

const app = express();

const PORT = process.env.P | 3000;

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
