const { expect } = require('chai');
const sinon = require('sinon');

const productModel = require('../../../models/productModel');
const connection = require('../../../models/connection');

describe('Model layer of products', () => {
  describe('get all products of StoreManager database', () => {
    const allProducts = [
      { id: 1, name: "Martelo de Thor" },
      { id: 2, name: "Traje de encolhimento" },
      { id: 3, name: "Escudo do Capitão América" },
    ];
    
    before(async () => {
      sinon.stub(connection, 'execute').resolves([allProducts]);
    });
    after(async () => {
      connection.execute.restore();
    });

    it('return all products', async () => {
      const returnAll = await productModel.getAllProducts();
      expect(returnAll[0]).to.have.all.keys('id', 'name');
      expect(returnAll[1].id).to.be.eq(2);
      expect(returnAll[1].name).to.be.eq('Traje de encolhimento');
      expect(returnAll[3]).to.be.eq(undefined);
    });
  });
});