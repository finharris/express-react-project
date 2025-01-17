const db = require("../db");

// http://localhost:5000/api/sales/add?

module.exports = async (req, res, next) => {
  const params = req.query;
  try {
    results = await db.addSale(params.table_number, params.product_id);
    res.json(results);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
