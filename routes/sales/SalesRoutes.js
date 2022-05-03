import express from "express";
const salesRouter = express.Router();

import {
  httpAddNewSale,
  httpGetAllSales,
  httpUpdateSale,
  httpDeleteSale,
  httpShowStats,
} from "./SalesController.js";

salesRouter.route("/").get(httpGetAllSales).post(httpAddNewSale);
salesRouter.route("/stats").get(httpShowStats);
salesRouter.route("/:id").patch(httpUpdateSale).delete(httpDeleteSale);

export default salesRouter;
