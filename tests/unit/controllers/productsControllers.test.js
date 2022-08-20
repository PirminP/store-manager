const { expect } = require('chai');
const sinon = require('sinon');

const productService = require('../../../services/productService');
const productController = require('../../../controllers/productController');

describe('Controller layer of products', () => {
  describe('get all products of StoreManager database successful', () => {
    const allProductsControl = {
      data: [
        { id: 1, name: "Martelo de Thor" },
        { id: 2, name: "Traje de encolhimento" },
        { id: 3, name: "Escudo do Capitão América" },
      ],
      code: 200,
    };

    const res = {};
    const req = {};
  
    before(async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'getAllProducts').resolves(allProductsControl);
    });
    after(async () => {
      productService.getAllProducts.restore();
    });

    it('return all products with status 200 and json message', async () => {
      await productController.getAllProducts(req, res);
      expect(res.status.calledWith(200)).to.be.eq(true);
      expect(res.json.calledWith(allProductsControl.data)).to.be.eq(true);
    });
  });

  describe('get all products of StoreManager database not successful', () => {
    const allProductsControl = {
      error: { message: "Product not found" },
      code: 404,
    };

    const res = {};
    const req = {};

    before(async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'getAllProducts').resolves(allProductsControl);
    });
    after(async () => {
      productService.getAllProducts.restore();
    });

    it('return all products with status 404 and error message', async () => {
      await productController.getAllProducts(req, res);
      expect(res.status.calledWith(404)).to.be.eq(true);
      expect(res.json.calledWith(allProductsControl.error)).to.be.eq(true);
    });
  });
});