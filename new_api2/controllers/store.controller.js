import Store from "../models/store.models.js";

export const listStore = async (req, res, next) => {
    try {
        const products = await Store.find()

        res.status(200).json({
            ok: true,
            products
        })

    } catch (error) {
        next(error)
    }
}

export const createStore = async (req, res, next) => {

    try {
        const nuevo = await Store.create(req.body)
        console.log(nuevo)
        res.status(201).json({
            ok: true,
            nuevo
        })
    } catch (error) {
        next(error)
    }
}

// export const deleteStore = async (res,res)