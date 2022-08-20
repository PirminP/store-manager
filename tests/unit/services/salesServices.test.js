const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../models/salesModel');
const salesService = require('../../../services/salesService');

describe('Service layer of sales', () => {
  describe('get all sales of StoreManager database successful', () => {
    const allSales = [
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
    ];

    before(async () => {
      sinon.stub(salesModel, 'getAllSales').resolves(allSales);
    });
    after(async () => {
      salesModel.getAllSales.restore();
    });

    it('return all sales successful with status 200', async () => {
      const returnAll = await salesService.getAllSales();
      expect(returnAll).to.have.all.keys('data', 'code');
      expect(returnAll.data[0]).to.have.all.keys('saleId', 'date', 'productId', 'quantity');
      expect(returnAll.data[0].productId).to.be.eq(1);
      expect(returnAll.data[1].saleId).to.be.eq(1);
      expect(returnAll.data[2].quantity).to.be.eq(15);
      expect(returnAll.data[3]).to.be.eq(undefined);
      expect(returnAll.code).to.be.eq(200);
    });
  });

  describe('get all sales of StoreManager database not successful', () => {
    before(async () => {
      sinon.stub(salesModel, 'getAllSales').resolves();
    });
    after(async () => {
      salesModel.getAllSales.restore();
    });

    it('return all products not successfull with status 404 and Product not found', async () => {
      const returnAll = await salesService.getAllSales();
      expect(returnAll.error).to.be.a('object');
      expect(returnAll).to.have.all.keys('error', 'code');
      expect(returnAll.error.message).to.be.eq('Sale not found');
      expect(returnAll.code).to.be.eq(404);
    });
  });
});
  