const salesService = require('../services/salesService');

async function createSales(req, res) {
  const { data, error, code } = await salesService.createSales(req.body);
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
}

async function getAllSales(req, res) {
  const { data, error, code } = await salesService.getAllSales();
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
}

async function getSalebyId(req, res) {
  const { id } = req.params;
  const { data, error, code } = await salesService.getSalebyId(id);
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
}

module.exports = {
  createSales,
  getAllSales,
  getSalebyId,
};