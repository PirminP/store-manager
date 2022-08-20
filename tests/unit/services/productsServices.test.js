const { expect } = require('chai');
const sinon = require('sinon');

const productModel = require('../../../models/productModel');
const productService = require('../../../services/productService');

describe('Service layer of products', () => {
  describe('get all products of StoreManager database successful', () => {
    const allProducts = [
      { id: 1, name: "Martelo de Thor" },
      { id: 2, name: "Traje de encolhimento" },
      { id: 3, name: "Escudo do Capitão América" },
    ];

    before(async () => {
      sinon.stub(productModel, 'getAllProducts').resolves(allProducts);
    });
    after(async () => {
      productModel.getAllProducts.restore();
    });

    it('return all products successful with status 200', async () => {
      const returnAll = await productService.getAllProducts();
      expect(returnAll).to.have.all.keys('data', 'code');
      expect(returnAll.data[0]).to.have.all.keys('id', 'name');
      expect(returnAll.data[1].id).to.be.eq(2);
      expect(returnAll.data[1].name).to.be.eq('Traje de encolhimento');
      expect(returnAll.data[3]).to.be.eq(undefined);
      expect(returnAll.code).to.be.eq(200);
    });
  });

  describe('get all products of StoreManager database not successful', () => {
    before(async () => {
      sinon.stub(productModel, 'getAllProducts').resolves();
    });
    after(async () => {
      productModel.getAllProducts.restore();
    });

    it('return all products not successfull with status 404 and Product not found', async () => {
      const returnAll = await productService.getAllProducts();
      expect(returnAll.error).to.be.a('object');
      expect(returnAll).to.have.all.keys('error', 'code');
      expect(returnAll.error.message).to.be.eq('Product not found');
      expect(returnAll.code).to.be.eq(404);
    });
  });
});