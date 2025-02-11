import express from "express";
import cors from "cors";
import { PORT } from "./config/serverConfig.js";
import apiRoutes from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", apiRoutes);

// app.get("/ping", (req, res) => {
//   res.send("pong");
// });

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
