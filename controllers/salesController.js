const salesService = require('../services/salesService');

async function createSales(req, res) {
  const { data, error, code } = await salesService.createSales(req.body);
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
}

module.exports = { createSales };