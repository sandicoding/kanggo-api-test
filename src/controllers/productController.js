
import Product from '../models/ProductModel.js';
import expressHandler from 'express-async-handler';


// @desc    fetch all product
// @route   Get
// @access  public

const getProducts =  expressHandler(async(req, res) => {
    const products =  await Product.find({})
    res.json(products);
})

const createNewProduct = expressHandler(async(req, res) => {
    const product = await Product.create(req.body)
    res.json(product)
})


// @desc    fetch sigle product
// @route   Get
// @access  public

const getProductById =  expressHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
        res.status(404)

        throw new Error('Product not found')
    }
})


export {
    getProductById,
    getProducts,
    createNewProduct
}

