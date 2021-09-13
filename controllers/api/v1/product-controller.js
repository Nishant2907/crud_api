const ProductModal = require("../../../modal/Product");
const { validationResult } = require('express-validator');

module.exports.createProduct = async (req, res) => {
    try {
        const errors= validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
        // const data = req.body || {};
        const data = await ProductModal.create(req.body);
        res.status(200).json({
            msg: "Product successfully created",
            data: data
        });
    } catch (error) {
        console.log("Error in creating Product", error);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
}

module.exports.getProduct = async (req, res) => {
    try {
        const data = await ProductModal.find({});
        res.status(200).json({
            msg: "Products",
            data: data
        });
    } catch (error) {
        console.log("Error in getting Product", error);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
}


module.exports.updateProduct = async (req, res) => {
    try {
        console.log(req.name);
        const data = await ProductModal.updateOne({}
            // {name:"Nishant"}, 
            // function (err, docs) {
            //     if (err){
            //         console.log(err)
            //     }
            //     else{
            //         console.log("Updated Docs : ", docs);
            //     }}
            );
        res.status(200).json({
            msg: "Products",
            data: data
        });
    } catch (error) {
        console.log("Error in updating Product", error);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
};

module.exports.deleteProduct = async (req, res) => {
    try {
        const data = await ProductModal.deleteONE({});
        res.status(200).json({
            msg: "Products",
            data: data
        });
    } catch (error) {
        console.log("Error in deleting Product", error);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
};