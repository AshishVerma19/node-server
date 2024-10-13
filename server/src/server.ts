import express from "express";
import dotenv from "dotenv";
import { print } from "@services/print";
import path from "path";

dotenv.config();
const app = express();

app.use(express.json());

const port = process.env.PORT ?? 3000;

app.get("/api/user", (req, res) => {
  res.send({ name: "ashish vers" });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/dist")));

// All other GET requests not handled will return the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/dist/index.html"));
});

app.listen(port, () => {
  print("runnit for my", port);
  console.log(`Server is running on http://localhost:${port}`);
});
