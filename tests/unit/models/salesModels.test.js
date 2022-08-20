const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../models/salesModel');
const connection = require('../../../models/connection');

describe('Model layer of sales', () => {
  describe('get all sales of StoreManager database', () => {
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
      sinon.stub(connection, 'execute').resolves([allSales]);
    });
    after(async () => {
      connection.execute.restore();
    });

    it('return all products', async () => {
      const returnAll = await salesModel.getAllSales();
      expect(returnAll[0]).to.have.all.keys('saleId', 'date', 'productId', 'quantity');
      expect(returnAll[0].productId).to.be.eq(1);
      expect(returnAll[1].saleId).to.be.eq(1);
      expect(returnAll[2].quantity).to.be.eq(15);
      expect(returnAll[3]).to.be.eq(undefined);
    });
  });
});