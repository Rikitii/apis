import Products from "../models/products.models.js";

export const listProduct = async (req, res, next) => {
    try {
        const products = await Products.find()

        res.status(200).json({
            ok: true,
            products,
        })

    } catch (error) {
        next(error)
    }
}

export const createProduct = async (req, res, next) => {

    try {

        console.log(req.body)
        const nuevo = await Products.create(req.body)
        console.log(nuevo)
        res.status(201).json({
            ok: true,
            nuevo
        })
    } catch (error) {
        next(error)
    }
}

export const getProductById = async (req, res, next) => {
    try {
        const product = await Products.findById(req, params.id)
        if (!product) {
            res.status(400).json({
                ok: false,
                msg: "Producto no encontrado"
            })
            return
        }
    } catch (error) {
        next(error)
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        const product = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!product) {
            res.status(400).json({
                ok: false,
                msg: "Producto no encontrado"
            })
            return
        }
    } catch (error) {
        next(error)
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        const product = await Products.findByIdAndDelete(req.params.id, req.body, { new: true })
        if (!product) {
            res.status(400).json({
                ok: false,
                msg: "Producto no encontrado"
            })
            return
        }
    } catch (error) {
        next(error)
    }
}

export const updateStockProduct = async (req, res, next) => {
    try {
        const product = await Products.findById(req.params.id)

        if (!product) {
            res.status(404).json({
                ok: false,
                msg: "Producto no encontrado"
            })
            return
        }

        product.stock = req.body.stock

        await product.save()

        res.status(200).json({
            ok: true,
            product
        })
    } catch (error) {
        next(error)
    }
}