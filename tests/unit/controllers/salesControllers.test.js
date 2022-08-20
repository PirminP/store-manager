const { expect } = require('chai');
const sinon = require('sinon');

const salesService = require('../../../services/salesService');
const salesController = require('../../../controllers/salesController');

describe('Controller layer of sales', () => {
  describe('get all sales of StoreManager database successful', () => {
    const allSalesControl = {
      data: [
        {
          saleId: 1,
          date: 2022 - 08 - 19,
          productId: 1,
          quantity: 5,
        },
        {
          saleId: 1,
          date: 2022 - 08 - 19,
          productId: 2,
          quantity: 10,
        },
        {
          saleId: 2,
          date: 2022 - 08 - 19,
          productId: 3,
          quantity: 15,
        },
      ],
      code: 200,
    };

    const res = {};
    const req = {};

    before(async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'getAllSales').resolves(allSalesControl);
    });
    after(async () => {
      salesService.getAllSales.restore();
    });

    it('return all sales with status 200 and json message', async () => {
      await salesController.getAllSales(req, res);
      expect(res.status.calledWith(200)).to.be.eq(true);
      expect(res.json.calledWith(allSalesControl.data)).to.be.eq(true);
    });
  });

  describe('get all sales of StoreManager database not successful', () => {
    const allSalesControl = {
      error: { message: "Sale not found" },
      code: 404,
    };

    const res = {};
    const req = {};

    before(async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'getAllSales').resolves(allSalesControl);
    });
    after(async () => {
      salesService.getAllSales.restore();
    });

    it('return all saless with status 404 and error message', async () => {
      await salesController.getAllSales(req, res);
      expect(res.status.calledWith(404)).to.be.eq(true);
      expect(res.json.calledWith(allSalesControl.error)).to.be.eq(true);
    });
  });
});
