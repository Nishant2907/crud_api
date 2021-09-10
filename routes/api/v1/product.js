const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const productController = require('../../../controllers/api/v1/product-controller');

router.post("/create", [
    body("name").not().isEmpty().withMessage("Name is Empty"),
    body("quantity").isFloat({gt:0}).withMessage("Quantity is less than 0"),
    body("description").not().isEmpty().withMessage("Description is Empty"),
    body("price").isFloat({gt:0}).withMessage("Price is less than 0")

],productController.createProduct);
router.get("/all", productController.getProduct);
router.put("/update", productController.updateProduct);
router.delete("/delete", productController.deleteProduct);
module.exports = router;