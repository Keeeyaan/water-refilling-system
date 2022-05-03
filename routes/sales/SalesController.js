const httpAddNewSale = (req, res) => {
  return res.send("SUP add");
};
const httpGetAllSales = (req, res) => {
  return res.send("SUP get");
};
const httpUpdateSale = (req, res) => {
  return res.send("SUP update");
};
const httpDeleteSale = (req, res) => {
  return res.send("SUP delete");
};
const httpShowStats = (req, res) => {
  return res.send("SUP stats");
};

export {
  httpAddNewSale,
  httpGetAllSales,
  httpUpdateSale,
  httpDeleteSale,
  httpShowStats,
};
