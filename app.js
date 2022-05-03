import express from "express";
const app = express();
import cors from "cors";

import salesRouter from "./routes/sales/SalesRoutes.js";
import authRouter from "./routes/auth/AuthRoutes.js";

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/sales", salesRouter);

export default app;
